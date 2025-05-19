import { ChevronDown, Menu } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

const renderNavitems = () => {
  return (
    <ul className="flex sm:items-center items-start gap-6 flex-col sm:flex-row ">
      {navItems.map((item) => (
        <li
          className="text-sm flex items-center gap-2 font-semibold cursor-pointer"
          key={item}
        >
          {item} <ChevronDown size={16} />
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  return (
    <section className="w-full h-[85px] shadow-sm mx-auto">
      <nav className=" container max-w-7xl p-2 mx-auto flex items-center justify-between my-auto h-full">
        {/* logo */}
        <div>
          <h2 className="text-[20px] font-semibold text-[#1C1E53]">
            SkillsCapital
          </h2>
        </div>
        <div className="flex items-center justify-between gap-4 sm:gap-12">
          <div className="hidden sm:block">{renderNavitems()}</div>
          <Button
            variant={"outline"}
            className="rounded-full text-base h-12 font-semibold"
          >
            Find Talent{" "}
            <div className="bg-[#FCD980] p-2 size-8 rounded-full flex items-center justify-center">
              <Image
                src={"/icons/right-arrow.svg"}
                alt=""
                width={20}
                height={20}
              />
            </div>
          </Button>
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <Menu size={26} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <div>
                  {renderNavitems()}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
