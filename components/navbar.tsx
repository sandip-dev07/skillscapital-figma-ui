"use client";

import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const navItems = [
  "SAP Talent Cloud",
  "Enterprise Talent Cloud",
  "AI-Powered Vetting",
  "Tech Talent Solutions",
  "About Us",
];

const renderNavItems = (isMobile = false) => {
  return (
    <ul
      className={`flex gap-4 lg:gap-6 ${
        isMobile ? "flex-col items-start" : "items-center flex-row"
      }`}
    >
      {navItems.map((item) => (
        <li
          className={`flex items-center gap-1 lg:gap-2 font-medium cursor-pointer ${
            isMobile
              ? "text-sm py-2 border-b border-gray-100 w-full"
              : "text-sm"
          }`}
          key={item}
        >
          <span className={isMobile ? "flex-1" : ""}>{item}</span>
          <ChevronDown size={isMobile ? 18 : 14} className="lg:size-4" />
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-16 md:h-20 lg:h-[85px] shadow-sm">
      <nav className="container max-w-7xl px-3 md:px-4 mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1C1E53] cursor-pointer">
            SkillsCapital
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          {renderNavItems()}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {/* Find Talent Button */}
          <Button
            variant="outline"
            className="rounded-full font-medium h-8 md:h-10 lg:h-12 text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-6 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Find Talent</span>
            <span className="sm:hidden">Find</span>
            <div className="bg-[#FCD980] p-1 md:p-1.5 lg:p-2 size-5 md:size-6 lg:size-8 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/right-arrow.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
            </div>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="lg:hidden p-1">
              <Menu size={20} className="md:size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="mt-6">{renderNavItems(true)}</div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button
                  variant="outline"
                  className="w-full rounded-full font-medium h-12 text-base flex items-center justify-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  Find Talent
                  <div className="bg-[#FCD980] p-2 size-8 rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/right-arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />
                  </div>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
