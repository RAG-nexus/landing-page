import { describe, expect, it } from "vitest";
import {
  calculate,
  formatCurrency,
  formatHours,
  formatPercent,
  validateField,
  type CalculatorInput,
} from "./cost-calculator";

// Intl separates "€" with a non-breaking space; normalise for readable asserts.
const plain = (s: string) => s.replace(/[  ]/g, " ");

const base: CalculatorInput = { people: "25", hours: "3", rate: "40", weeks: "46", pct: "" };

describe("calculate", () => {
  it("computes annual hours and cost from the user's numbers", () => {
    expect(calculate(base)).toEqual({ annualHours: 3450, annualCost: 138000 });
  });

  it("accepts decimal hours and rate with comma or dot", () => {
    const r = calculate({ ...base, people: "2", hours: "1,5", rate: "40.5", weeks: "10" });
    expect(r?.annualHours).toBe(30);
    expect(r?.annualCost).toBe(1215);
  });

  it("adds recoverable hours and cost when a % is given", () => {
    const r = calculate({ ...base, pct: "20" });
    expect(r).toEqual({
      annualHours: 3450,
      annualCost: 138000,
      pct: 20,
      recoverableHours: 690,
      recoverableCost: 27600,
    });
  });

  it("accepts 0 % and 100 %", () => {
    expect(calculate({ ...base, pct: "0" })?.recoverableCost).toBe(0);
    expect(calculate({ ...base, pct: "100" })?.recoverableHours).toBe(3450);
  });

  it("ignores an invalid % but still returns the base result", () => {
    expect(calculate({ ...base, pct: "150" })).toEqual({ annualHours: 3450, annualCost: 138000 });
  });

  it.each<[string, Partial<CalculatorInput>]>([
    ["all empty", { people: "", hours: "", rate: "", weeks: "" }],
    ["people empty", { people: "" }],
    ["hours empty", { hours: "  " }],
    ["rate empty", { rate: "" }],
    ["weeks empty", { weeks: "" }],
    ["people 0", { people: "0" }],
    ["hours 0", { hours: "0" }],
    ["rate 0", { rate: "0" }],
    ["weeks 0", { weeks: "0" }],
    ["negative people", { people: "-3" }],
    ["negative hours", { hours: "-1" }],
    ["negative rate", { rate: "-40" }],
    ["weeks > 52", { weeks: "53" }],
    ["decimal people", { people: "2.5" }],
    ["non-numeric", { rate: "abc" }],
  ])("returns null when %s", (_, override) => {
    expect(calculate({ ...base, ...override })).toBeNull();
  });
});

describe("validateField", () => {
  it.each([
    ["people", "", "required"],
    ["people", "0", "mustBePositive"],
    ["people", "-2", "mustBePositive"],
    ["people", "2,5", "notInteger"],
    ["people", "1.000", "notInteger"],
    ["people", "diez", "notNumber"],
    ["hours", "0", "mustBePositive"],
    ["hours", "-1,5", "mustBePositive"],
    ["hours", "169", "hoursRange"],
    ["hours", "1e3", "notNumber"],
    ["rate", "0", "mustBePositive"],
    ["rate", "-10", "mustBePositive"],
    ["rate", "40€", "notNumber"],
    ["weeks", "0", "weeksRange"],
    ["weeks", "53", "weeksRange"],
    ["weeks", "-1", "weeksRange"],
    ["weeks", "46.5", "notInteger"],
    ["pct", "101", "pctRange"],
    ["pct", "100,5", "pctRange"],
    ["pct", "-1", "pctRange"],
  ] as const)("%s = %j → %s", (field, raw, error) => {
    expect(validateField(field, raw)).toEqual({ ok: false, error });
  });

  it.each([
    ["people", "1", 1],
    ["hours", "0,5", 0.5],
    ["hours", "168", 168],
    ["rate", " 40 ", 40],
    ["weeks", "1", 1],
    ["weeks", "52", 52],
    ["pct", "0", 0],
    ["pct", "12,5", 12.5],
  ] as const)("%s = %j is valid", (field, raw, value) => {
    expect(validateField(field, raw)).toEqual({ ok: true, value });
  });

  it("treats an empty % as valid and unset", () => {
    expect(validateField("pct", "")).toEqual({ ok: true, value: undefined });
  });
});

describe("formatting", () => {
  it("formats hours in ES with dot grouping and comma decimals", () => {
    expect(formatHours(1234.5, "es")).toBe("1.234,5");
    expect(formatHours(3450, "es")).toBe("3.450");
    expect(formatHours(690, "es")).toBe("690");
  });

  it("formats hours in EN with comma grouping and dot decimals", () => {
    expect(formatHours(1234.5, "en")).toBe("1,234.5");
    expect(formatHours(3450, "en")).toBe("3,450");
  });

  it("rounds hours to one decimal", () => {
    expect(formatHours(10.04, "es")).toBe("10");
    expect(formatHours(10.06, "en")).toBe("10.1");
  });

  it("formats currency as 18.000 € in ES and €18,000 in EN", () => {
    expect(plain(formatCurrency(18000, "es"))).toBe("18.000 €");
    expect(plain(formatCurrency(1234, "es"))).toBe("1.234 €");
    expect(formatCurrency(18000, "en")).toBe("€18,000");
    expect(formatCurrency(1234, "en")).toBe("€1,234");
  });

  it("rounds currency to whole euros", () => {
    expect(plain(formatCurrency(1215.6, "es"))).toBe("1.216 €");
    expect(formatCurrency(1215.4, "en")).toBe("€1,215");
  });

  it("formats percentages per locale", () => {
    expect(formatPercent(12.5, "es")).toBe("12,5");
    expect(formatPercent(12.5, "en")).toBe("12.5");
  });
});
