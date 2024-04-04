import Link from "next/link";
import React from "react";
import { NavLinkProps } from "@/lib/types";

export const NavLinkMobile: React.FC<NavLinkProps> = ({ url, children }) => (
  <Link href={url} className="p-2 text-center text-white text-2xl">
    {children}
  </Link>
);
