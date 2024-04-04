import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white dark:bg-slate-800 border-t py-6 mb-0"
      style={{
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-100">
          © 2024 RAGnexus. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
