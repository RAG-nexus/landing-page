import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/navLink";
import {
  ABOUT_PAGE_PATH,
  CONTACT_PAGE_PATH,
  HOME_PAGE_PATH,
  RAG_NEXUS_SVG,
  SERVICES_PAGE_PATH,
} from "@/constants";
import { Burger } from "./burger";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav
      className="bg-white py-4"
      style={{
        backgroundColor: "#04a118",
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a className="flex items-center space-x-2" href={HOME_PAGE_PATH}>
          <img
            alt="RAGnexus logo"
            className="h-14 w-28"
            height="40"
            src={RAG_NEXUS_SVG}
            style={{
              aspectRatio: "40/80",
              objectFit: "cover",
            }}
            width="40"
          />
        </a>
        <div className="text-2xl hidden sm:block">
          <NavLink url={ABOUT_PAGE_PATH}>About</NavLink>
          <NavLink url={SERVICES_PAGE_PATH}>Services</NavLink>
          <NavLink url={CONTACT_PAGE_PATH}>Contact</NavLink>
        </div>
        <Link href={CONTACT_PAGE_PATH}>
          <Button className="hidden sm:block">Get Started</Button>
        </Link>
        <Burger />
      </div>
    </nav>
  );
};

export { NavBar };