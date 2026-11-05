import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Heading on the left, content on the right; stacked on mobile. Sections are split by a rule, not cards. */
export function AuthorSection({
  id,
  title,
  note,
  className,
  children,
}: {
  id: string;
  title: string;
  note?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className={cn("border-t border-gray-200 dark:border-gray-800", className)}>
      <div className="max-w-5xl mx-auto px-4 py-14 sm:py-20 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h2
            id={id}
            className="text-2xl sm:text-[1.75rem] leading-tight font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          {note && <div className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{note}</div>}
        </div>
        <div className="md:col-span-8 max-w-2xl">{children}</div>
      </div>
    </section>
  );
}
