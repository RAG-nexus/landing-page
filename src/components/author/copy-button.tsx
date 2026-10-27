"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

function copyWithSelection(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}

export function CopyButton({ text, label, copiedLabel }: { text: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard API blocked (permissions, unfocused document or insecure context).
      if (!copyWithSelection(text)) return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = copied ? Check : Copy;
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
