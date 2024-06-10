import React from "react";
import useTranslation from "next-translate/useTranslation";

export const Footer: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <footer
      className="bg-white dark:bg-slate-800 border-t py-6 mb-0"
      style={{
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl px-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-100">
          © {new Date().getFullYear()} RAGnexus. {t`all-rights-reserved`}
        </span>
      </div>
    </footer>
  );
};
