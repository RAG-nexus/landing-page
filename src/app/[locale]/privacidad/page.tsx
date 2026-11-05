import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageJsonLd } from "@/components/json-ld";
import { PLATFORM_PRIVACY, type Block } from "@/content/platform-privacy";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata("/privacidad", locale);
}

/** Renders **bold** and `code` inside a policy string. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    if (part.startsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`")) {
      return (
        <code key={i} className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-[0.85em] text-gray-800 dark:text-gray-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

function PolicyBlock({ block }: { block: Block }) {
  if ("p" in block) return <p>{inline(block.p)}</p>;
  if ("ul" in block) {
    return (
      <ul className="list-disc space-y-2 pl-5 marker:text-gray-400">
        {block.ul.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </ul>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full min-w-[36rem] text-left text-[0.95rem] leading-6">
        <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-900 dark:text-white">
          <tr>
            {block.table.head.map((cell) => (
              <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {block.table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 align-top">
                  {inline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PlatformPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const policy = PLATFORM_PRIVACY[locale === "es" ? "es" : "en"];

  return (
    <main className="max-w-3xl mx-auto px-4 pt-10 sm:pt-16 pb-20 sm:pb-28">
      <PageJsonLd route="/privacidad" locale={locale} />

      <header className="border-b border-gray-200 dark:border-gray-800 pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{policy.title}</h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{policy.effective}</p>
      </header>

      <nav aria-label={policy.tocLabel} className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 p-5 sm:p-6">
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{policy.tocLabel}</p>
        <ol className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2 text-[0.95rem]">
          {policy.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline underline-offset-4"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-4 text-[1.05rem] leading-7 text-gray-700 dark:text-gray-300">
        {policy.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 pt-10">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.blocks.map((block, i) => (
                <PolicyBlock key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
