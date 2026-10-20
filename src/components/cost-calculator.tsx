"use client";

import { useId, useState, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  COST_CALCULATOR_ANCHOR,
  calculate,
  formatCurrency,
  formatHours,
  formatPercent,
  validateField,
  type CalculatorInput,
  type CalculatorLocale,
  type FieldName,
} from "@/lib/cost-calculator";

interface CostCalculatorProps {
  /** "lawyers" swaps "people" for "lawyers" in the first field's label. */
  audience?: "general" | "lawyers";
  /** Only the home page supports dark mode; /abogados is light-only. */
  supportsDark?: boolean;
  className?: string;
}

const FIELDS: {
  name: FieldName;
  inputMode: "numeric" | "decimal";
  placeholder: boolean;
}[] = [
  { name: "people", inputMode: "numeric", placeholder: true },
  { name: "hours", inputMode: "decimal", placeholder: true },
  { name: "rate", inputMode: "decimal", placeholder: true },
  { name: "weeks", inputMode: "numeric", placeholder: true },
  { name: "pct", inputMode: "decimal", placeholder: false },
];

const EMPTY: CalculatorInput = { people: "", hours: "", rate: "", weeks: "", pct: "" };

export function CostCalculator({ audience = "general", supportsDark = false, className }: CostCalculatorProps) {
  const t = useTranslations("calculator");
  const locale = useLocale() as CalculatorLocale;
  const id = useId();
  // Values live only in component state: never persisted or sent anywhere.
  const [values, setValues] = useState<CalculatorInput>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  const result = calculate(values);
  const d = (cls: string) => (supportsDark ? cls : "");
  const bold = (chunks: ReactNode) => (
    <strong className={cn("font-bold text-emerald-700", d("dark:text-emerald-300"))}>{chunks}</strong>
  );

  const labelFor = (name: FieldName) =>
    name === "people" && audience === "lawyers" ? t("label_people_lawyers") : t(`label_${name}`);

  return (
    <section
      id={COST_CALCULATOR_ANCHOR}
      aria-labelledby={`${id}-title`}
      className={cn("py-24 scroll-mt-20", className)}
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id={`${id}-title`}
            className={cn("text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight", d("dark:text-white"))}
          >
            {t("title")}
          </h2>
          <p className={cn("text-lg text-gray-600 max-w-2xl mx-auto", d("dark:text-gray-300"))}>{t("subtitle")}</p>
        </div>

        <div
          className={cn(
            "bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10",
            d("dark:bg-gray-900 dark:border-gray-700")
          )}
        >
          <form noValidate onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {FIELDS.map(({ name, inputMode, placeholder }) => {
              const inputId = `${id}-${name}`;
              const errorId = `${inputId}-error`;
              const check = validateField(name, values[name]);
              const error = touched[name] && !check.ok ? t(`error_${check.error}`) : null;
              return (
                <div key={name} className={cn("flex flex-col", name === "pct" && "sm:col-span-2")}>
                  <label
                    htmlFor={inputId}
                    className={cn("flex-1 mb-2 text-sm font-semibold text-gray-700 leading-snug", d("dark:text-gray-200"))}
                  >
                    {labelFor(name)}
                  </label>
                  <input
                    id={inputId}
                    name={name}
                    type="text"
                    inputMode={inputMode}
                    autoComplete="off"
                    placeholder={placeholder ? t(`placeholder_${name}`) : undefined}
                    value={values[name]}
                    onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
                    onBlur={() => setTouched((tch) => ({ ...tch, [name]: true }))}
                    aria-required={name !== "pct"}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className={cn(
                      "h-12 w-full rounded-xl border bg-white px-4 text-base text-gray-900 placeholder:text-gray-400",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                      error ? "border-red-500 border-2" : "border-gray-300",
                      d("dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:ring-offset-gray-900"),
                      !error && d("dark:border-gray-700")
                    )}
                  />
                  {error && (
                    <p id={errorId} className={cn("mt-1.5 text-sm text-red-700", d("dark:text-red-400"))}>
                      {error}
                    </p>
                  )}
                </div>
              );
            })}
          </form>

          <div
            aria-live="polite"
            className={cn(
              "mt-8 rounded-2xl p-6 text-lg leading-relaxed",
              result ? "bg-emerald-50 text-gray-800" : "bg-gray-50 text-gray-500 text-base",
              result ? d("dark:bg-emerald-950/50 dark:text-gray-100") : d("dark:bg-gray-800 dark:text-gray-400")
            )}
          >
            {result ? (
              <>
                <p>
                  {t.rich("result", {
                    hours: formatHours(result.annualHours, locale),
                    cost: formatCurrency(result.annualCost, locale),
                    b: bold,
                  })}
                </p>
                {result.pct !== undefined && (
                  <p className="mt-3">
                    {t.rich("result_recoverable", {
                      pct: formatPercent(result.pct, locale),
                      hoursRec: formatHours(result.recoverableHours!, locale),
                      costRec: formatCurrency(result.recoverableCost!, locale),
                      b: bold,
                    })}
                  </p>
                )}
              </>
            ) : (
              <p>{t("hint")}</p>
            )}
          </div>

          <p className={cn("mt-4 text-sm text-gray-500 text-center", d("dark:text-gray-400"))}>{t("note")}</p>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="h-auto text-lg px-6 sm:px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)]"
            >
              <Link href="/contact">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
