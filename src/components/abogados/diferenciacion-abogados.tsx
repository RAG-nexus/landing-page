"use client";

import { useTranslations } from "next-intl";
import { Check, AlertTriangle, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

type CellValue = "yes" | "warn" | "no" | "text";

interface Row {
  label: string;
  r: CellValue;
  cl: CellValue;   // Claude Legal
  c: CellValue;    // ChatGPT Ent.
  cp: CellValue;   // Copilot
  h: CellValue;    // Harvey
  r_label?: string;
  cl_label?: string;
  c_label?: string;
  cp_label?: string;
  h_label?: string;
}

function Cell({ value, label }: { value: CellValue; label?: string }) {
  const ariaLabel =
    value === "yes" ? "Sí" : value === "warn" ? "Parcial" : value === "no" ? "No" : label ?? "";

  return (
    <div className="flex flex-col items-center justify-center gap-1" aria-label={ariaLabel}>
      {value === "yes" && (
        <Check
          className="w-5 h-5 text-emerald-600 stroke-[3]"
          aria-hidden="true"
        />
      )}
      {value === "warn" && (
        <AlertTriangle
          className="w-5 h-5 text-amber-500"
          aria-hidden="true"
        />
      )}
      {value === "no" && (
        <X
          className="w-5 h-5 text-gray-400 stroke-[2.5]"
          aria-hidden="true"
        />
      )}
      {label && (
        <span className="text-[11px] text-gray-500 font-semibold leading-tight text-center">
          {label}
        </span>
      )}
    </div>
  );
}

export function DiferenciacionAbogados() {
  const t = useTranslations("abogados");

  const rows: Row[] = [
    {
      label: t("diff_t1"),
      r: "yes", cl: "warn", c: "no", cp: "warn", h: "yes",
    },
    {
      label: t("diff_t2"),
      r: "yes", cl: "no", c: "warn", cp: "warn", h: "no",
    },
    {
      label: t("diff_t3"),
      r: "yes", cl: "no", c: "no", cp: "no", h: "no",
    },
    {
      label: t("diff_t4"),
      r: "yes", cl: "no", c: "no", cp: "no", h: "no",
    },
    {
      label: t("diff_t5"),
      r: "yes", cl: "yes", c: "no", cp: "no", h: "yes",
    },
    {
      label: t("diff_t6"),
      r: "yes", cl: "no", c: "no", cp: "no", h: "no",
    },
    {
      label: t("diff_t7"),
      r: "yes", cl: "no", c: "no", cp: "no", h: "no",
    },
    {
      label: t("diff_t8"),
      r: "yes", cl: "warn", c: "warn", cp: "yes", h: "no",
    },
    {
      label: t("diff_t9"),
      r: "yes", cl: "warn", c: "warn", cp: "yes", h: "no",
      h_label: t("diff_t9_h"),
    },
    {
      label: t("diff_t10"),
      r: "yes", cl: "warn", c: "yes", cp: "yes", h: "text",
      h_label: t("diff_t10_h"),
    },
  ];

  const competitors = [
    { key: "cl", label: t("diff_col3") },
    { key: "c",  label: t("diff_col4") },
    { key: "cp", label: t("diff_col5") },
    { key: "h",  label: t("diff_col6") },
  ] as const;

  return (
    <section className="py-24 bg-gray-50" id="comparativa">
      <div className="max-w-[1100px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-[2.75rem] font-bold text-gray-900 mb-5 tracking-tight leading-tight">
            {t("diff_h2")}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {t("diff_sub")}
          </p>
        </div>

        {/* ── DESKTOP TABLE ── */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white mb-5">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-5 font-semibold text-gray-600 text-sm w-[34%]">
                  {t("diff_col1")}
                </th>
                {/* RAGnexus — highlighted */}
                <th className="p-5 font-bold text-center text-emerald-700 bg-emerald-50 border-x border-emerald-100 text-sm">
                  {t("diff_col2")}
                </th>
                {/* Competitors */}
                {competitors.map((comp) => (
                  <th
                    key={comp.key}
                    className="p-5 font-semibold text-center text-gray-500 border-r border-gray-100 text-sm last:border-r-0"
                  >
                    {comp.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-5 text-gray-800 text-sm leading-snug">{row.label}</td>
                  <td className="p-5 text-center bg-emerald-50/30 border-x border-emerald-100">
                    <Cell value={row.r} label={row.r_label} />
                  </td>
                  <td className="p-5 text-center border-r border-gray-100">
                    <Cell value={row.cl} label={row.cl_label} />
                  </td>
                  <td className="p-5 text-center border-r border-gray-100">
                    <Cell value={row.c} label={row.c_label} />
                  </td>
                  <td className="p-5 text-center border-r border-gray-100">
                    <Cell value={row.cp} label={row.cp_label} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={row.h} label={row.h_label} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── MOBILE: horizontal scroll table with sticky first column ── */}
        <div className="lg:hidden mb-5 rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="text-sm border-collapse" style={{ minWidth: "560px" }}>
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  {/* Sticky label column */}
                  <th
                    className="p-4 font-semibold text-gray-600 text-left sticky left-0 bg-gray-100 z-10 border-r border-gray-200"
                    style={{ minWidth: "160px", maxWidth: "200px" }}
                  >
                    {t("diff_col1")}
                  </th>
                  {/* RAGnexus */}
                  <th className="p-4 font-bold text-center text-emerald-700 bg-emerald-50 border-r border-emerald-100 whitespace-nowrap">
                    {t("diff_col2")}
                  </th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.key}
                      className="p-4 font-semibold text-center text-gray-500 border-r border-gray-100 last:border-r-0 whitespace-nowrap"
                    >
                      {comp.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/80">
                    <td
                      className="p-4 text-gray-800 text-xs leading-snug sticky left-0 bg-white border-r border-gray-200 z-10"
                      style={{ minWidth: "160px", maxWidth: "200px" }}
                    >
                      {row.label}
                    </td>
                    <td className="p-4 text-center bg-emerald-50/30 border-r border-emerald-100">
                      <Cell value={row.r} label={row.r_label} />
                    </td>
                    <td className="p-4 text-center border-r border-gray-100">
                      <Cell value={row.cl} label={row.cl_label} />
                    </td>
                    <td className="p-4 text-center border-r border-gray-100">
                      <Cell value={row.c} label={row.c_label} />
                    </td>
                    <td className="p-4 text-center border-r border-gray-100">
                      <Cell value={row.cp} label={row.cp_label} />
                    </td>
                    <td className="p-4 text-center">
                      <Cell value={row.h} label={row.h_label} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <p className="text-xs text-gray-400 text-center mb-12 tracking-wide">
          {t("diff_legend")}
        </p>

        {/* ── BLOQUE DESTACADO 1: No competimos con... ── */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-10 py-9 mb-6 max-w-4xl mx-auto shadow-sm">
          <p className="text-lg font-bold text-emerald-900 mb-3 text-center">
            {t("diff_block1_title")}
          </p>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            {t("diff_block1_body")}
          </p>
        </div>

        {/* ── BLOQUE DESTACADO 2: Sobre Claude Legal ── */}
        <div className="bg-white border border-gray-200 rounded-2xl px-10 py-9 mb-12 max-w-4xl mx-auto shadow-sm">
          <p className="text-base font-semibold text-gray-900 mb-4 text-center">
            {t("diff_block2_title")}
          </p>
          <div className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto space-y-4">
            <p>{t("diff_block2_p1")}</p>
            <p>{t("diff_block2_p2")}</p>
            <p>{t("diff_block2_p3")}</p>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-6 text-base rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              onClick={() => {
                if (typeof window !== "undefined" && (window as typeof window & { gtag?: Function }).gtag) {
                  (window as typeof window & { gtag: Function }).gtag("event", "click_demo_seccion_diferenciacion");
                }
              }}
            >
              {t("diff_cta")}
            </Button>
          </Link>
          <p className="text-[13px] text-gray-400 leading-relaxed text-center max-w-md">
            {t("diff_cta_sub")}
          </p>
        </div>

      </div>
    </section>
  );
}
