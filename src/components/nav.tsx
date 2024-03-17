import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/navLink";
import {
  aboutPagePath,
  contactPagePath,
  homePagePath,
  ragNexusSvg,
  servicesPagePath,
} from "@/constants";

const NavBar: React.FC = () => {
  return (
    <nav
      className="bg-white border-b py-4"
      style={{
        backgroundColor: "#04a118",
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a className="flex items-center space-x-2" href={homePagePath}>
          <img
            alt="RAGnexus logo"
            className="h-14 w-28"
            height="40"
            src={ragNexusSvg}
            style={{
              aspectRatio: "40/80",
              objectFit: "cover",
            }}
            width="40"
          />
        </a>
        <div className="text-2xl">
          <NavLink url={aboutPagePath}>About</NavLink>
          <NavLink url={servicesPagePath}>Services</NavLink>
          <NavLink url={contactPagePath}>Contact</NavLink>
        </div>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export { NavBar };
