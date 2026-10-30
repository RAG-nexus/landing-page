// Pure logic for the search-cost calculator. Everything runs in the browser:
// values are never stored or sent anywhere.

export const COST_CALCULATOR_ANCHOR = "cost-calculator";

export type CalculatorLocale = "es" | "en";

export type FieldName = "people" | "hours" | "rate" | "weeks" | "pct";

export type FieldError =
  | "required"
  | "notNumber"
  | "notInteger"
  | "mustBePositive"
  | "weeksRange"
  | "hoursRange"
  | "pctRange";

export type CalculatorInput = Record<FieldName, string>;

export interface CalculatorResult {
  annualHours: number;
  annualCost: number;
  pct?: number;
  recoverableHours?: number;
  recoverableCost?: number;
}

export type FieldResult =
  | { ok: true; value: number | undefined }
  | { ok: false; error: FieldError };

const INTEGER_RE = /^-?\d+$/;
// One optional decimal separator ("." or ","), no thousands separators.
// A leading "-" is parsed so negatives get a range error, not "not a number".
const DECIMAL_RE = /^-?\d+(?:[.,]\d+)?$/;

const HOURS_PER_WEEK = 168;

function parseNumber(raw: string, integer: boolean): number | FieldError {
  const value = raw.trim();
  if (integer) {
    if (DECIMAL_RE.test(value) && !INTEGER_RE.test(value)) return "notInteger";
    if (!INTEGER_RE.test(value)) return "notNumber";
    return Number(value);
  }
  if (!DECIMAL_RE.test(value)) return "notNumber";
  return Number(value.replace(",", "."));
}

export function validateField(name: FieldName, raw: string): FieldResult {
  const optional = name === "pct";
  if (raw.trim() === "") {
    return optional ? { ok: true, value: undefined } : { ok: false, error: "required" };
  }

  const integer = name === "people" || name === "weeks";
  const parsed = parseNumber(raw, integer);
  if (typeof parsed === "string") return { ok: false, error: parsed };

  switch (name) {
    case "weeks":
      return parsed >= 1 && parsed <= 52 ? { ok: true, value: parsed } : { ok: false, error: "weeksRange" };
    case "pct":
      return parsed >= 0 && parsed <= 100 ? { ok: true, value: parsed } : { ok: false, error: "pctRange" };
    case "hours":
      if (parsed <= 0) return { ok: false, error: "mustBePositive" };
      return parsed <= HOURS_PER_WEEK ? { ok: true, value: parsed } : { ok: false, error: "hoursRange" };
    default:
      return parsed > 0 ? { ok: true, value: parsed } : { ok: false, error: "mustBePositive" };
  }
}

/** Returns null until the four required fields are valid. */
export function calculate(input: CalculatorInput): CalculatorResult | null {
  const people = validateField("people", input.people);
  const hours = validateField("hours", input.hours);
  const rate = validateField("rate", input.rate);
  const weeks = validateField("weeks", input.weeks);
  if (!people.ok || !hours.ok || !rate.ok || !weeks.ok) return null;

  const annualHours = people.value! * hours.value! * weeks.value!;
  const annualCost = annualHours * rate.value!;
  const result: CalculatorResult = { annualHours, annualCost };

  const pct = validateField("pct", input.pct);
  if (pct.ok && pct.value !== undefined) {
    result.pct = pct.value;
    result.recoverableHours = (annualHours * pct.value) / 100;
    result.recoverableCost = (annualCost * pct.value) / 100;
  }
  return result;
}

const INTL_LOCALE: Record<CalculatorLocale, string> = { es: "es-ES", en: "en-GB" };

// es-ES only groups from 5 digits by default ("1234,5"); force "1.234,5".
const GROUPING = { useGrouping: "always" } as unknown as Intl.NumberFormatOptions;

export function formatHours(value: number, locale: CalculatorLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    ...GROUPING,
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatCurrency(value: number, locale: CalculatorLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    ...GROUPING,
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number, locale: CalculatorLocale): string {
  return new Intl.NumberFormat(INTL_LOCALE[locale], {
    ...GROUPING,
    maximumFractionDigits: 1,
  }).format(value);
}
