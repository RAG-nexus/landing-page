"use client";
import React, { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface MarkdownRendererProps {
  text: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ text }) => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const renderMarkdown = async (markdownText: string) => {
      // Process the markdown
      const result = marked(markdownText);

      // Check if `marked` returns a string or a promise
      if (result instanceof Promise) {
        result.then((resolvedResult) => {
          setHtml(DOMPurify.sanitize(resolvedResult));
        });
      } else {
        setHtml(DOMPurify.sanitize(result));
      }
    };

    renderMarkdown(text);
  }, [text]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
