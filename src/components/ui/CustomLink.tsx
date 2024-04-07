import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
}
export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      className={cn(
        "text-green-light text-center md:text-start font-medium hover:underline dark:text-green-light",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
