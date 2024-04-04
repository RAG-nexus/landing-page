import React from "react";
import Link from "next/link";
import { NavLinkProps } from "@/lib/types";

const NavLink: React.FC<NavLinkProps> = ({ url, children }) => {
  return (
    <Link className="text-2xl text-white hover:text-gray-900 mx-2" href={url}>
      {children}
    </Link>
  );
};

export { NavLink };
