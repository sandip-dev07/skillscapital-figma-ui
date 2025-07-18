"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="w-full py-6">
      <div className=" z-10 max-w-7xl p-2 mx-auto w-full flex items-center flex-col justify-center h-full relative">
      
        <h2 className="font-semibold text-[35px] sm:text-[50px] text-center text-[#282938]">
          India – SkillsCapital for SAP & Enterprise Talent
        </h2>
        <p className="text-[#464646] text-center">
          India’s top SAP talent, combined with our AI-powered vetting, ensures
          unmatched expertise
        </p>

        <div className="w-full relative h-[420px] sm:h-[480px] mt-8 overflow-hidden rounded-xl">
        <div className="absolute hidden sm:block top-0 right-0 h-full w-full bg-gradient-to-r from-[#111c28] via-[#042240] to-transparent"></div>
          <Image
            src={"/images/india.png"}
            className="object-cover sm:object-contain w-full object-right rounded-lg h-full "
            alt=""
            fill
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0c1a29] "></div>
          <div className="absolute top-12 left-4 sm:left-8">
            <div className=" flex items-start justify-center flex-col w-full h-full space-y-12">
              <div className="max-w-2xl">
                <h2 className="text-white text-[30px] sm:text-[50px] leading-[1.2] font-semibold">
                  Work with Elite SAP Consultants who have delivered projects
                  for Fortune 500 Companies.
                </h2>
              </div>

              <div className="relative  max-w-7xl p-2 pt-0 mx-auto z-10 h-fit w-full flex items-center justify-center flex-col sm:block">
                <Button
                  variant={"appYellow"}
                  className="rounded-full text-base  h-14 px-10 font-semibold"
                >
                  Find Top SAP Talent Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
