"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { Separator } from "./ui/separator";

const Hero = () => {
  return (
    <section className="h-svh relative w-full bg-[#002C59]">
      <div className="absolute top-0 right-0 h-full aspect-square z-0">
        <Image src={"/images/hero.png"} alt="" fill className="object-cover" />
      </div>
      <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-[#002C59] via-[#002C59] to-transparent z-[1]"></div>

      <div className=" relative  max-w-7xl p-2 mx-auto z-10 h-full w-full">
        <div className=" flex items-start justify-center flex-col w-full h-full space-y-12">
          <div className="max-w-xl">
            <h2 className="text-white text-[35px] sm:text-[50px] leading-[1.4] font-bold">
              Unleash SAP & Tech <br className="hidden sm:inline" /> Excellence with AI/ML{" "}
              <br className="hidden sm:inline" /> Talent Cloud
            </h2>
            <p className="text-white">
              Find and deploy elite SAP consultants, managed teams, and
              consulting expertise instantly with AI-driven precision.
            </p>
          </div>
          <div className="relative  max-w-7xl p-2 mx-auto z-10 w-full text-white sm:flex items-center gap-8 grid grid-cols-2">
            <div className="  text-center sm:text-start space-y-1 max-w-[200px]">
              <p className="text-2xl font-semibold  ">20,000+</p>
              <p>Vetted SAP Tech Consultants</p>
            </div>
            <Separator className="hidden sm:block" orientation="vertical" />
            <div className="   text-center space-y-1 max-w-[200px]">
              <p className="text-2xl font-semibold  ">1000+</p>
              <p>Global Clients & SAP Projects</p>
            </div>
            <Separator className="hidden sm:block" orientation="vertical" />
            <div className=" text-center space-y-1 max-w-[200px]">
              <p className="text-2xl font-semibold  ">10+ Years</p>
              <p>Average Experience per Consultant</p>
            </div>
            <Separator className="hidden sm:block" orientation="vertical" />
            <div className="   text-center space-y-1 max-w-[200px]">
              <p className="text-2xl font-semibold  ">20M+</p>
              <p>Man-Hours of SAP Expertise</p>
            </div>
          </div>

          <div className="relative  max-w-7xl p-2 pt-5 mx-auto z-10 h-fit w-full space-x-2 flex items-center justify-center flex-col sm:block">
            <Button
              variant={"appYellow"}
              className="rounded-full text-base h-14 px-10 font-semibold"
            >
              Find SAP Experts Now
            </Button>

            <Button
              variant={"ghost"}
              className="rounded-full text-base bg-transparent hover:bg-transparent text-white hover:text-white h-14 px-10 font-semibold"
            >
              Explore Talent Cloud <MoveRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
