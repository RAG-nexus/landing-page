import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface NavBarProps {
  links: string[];
}

const linkClasses = "text-base  text-white hover:text-gray-900";
const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <nav
      className="bg-white border-b py-4"
      style={{
        backgroundColor: "#04a118",
        borderColor: "#59A52C",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a className="flex items-center space-x-2" href="#">
          <img
            alt="RAGnexus logo"
            className="h-10 w-10"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <span
            className="text-xl font-semibold"
            style={{
              color: "#ffffff",
            }}
          >
            RAGnexus
          </span>
        </a>
        <div
          style={{
            fontSize: "1.5rem",
          }}
        >
          <Link className={linkClasses} href="#">
            About
          </Link>
          <Link className={linkClasses} href="#">
            Services
          </Link>
          <Link className={linkClasses} href="#">
            Contact
          </Link>
        </div>
        <Button className="bg-[#05d31f] text-white">Get Started</Button>
      </div>
    </nav>
  );
};

export default NavBar;
