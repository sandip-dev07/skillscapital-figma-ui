"use client"
import Image from "next/image";
import React from "react";

const data = [
  {
    icon: "/icons/search.svg",
    title: "Instant Matching",
    desc: "Smart AI-driven selection of the top 1% of SAP consultants.",
  },
  {
    icon: "/icons/hand.svg",
    title: "Guaranteed Quality",
    desc: "Smart AI-driven selection of the top 1% of SAP consultants.",
  },
  {
    icon: "/icons/swipe.svg",
    title: "Seamless Replacements",
    desc: "Smart AI-driven selection of the top 1% of SAP consultants.",
  },
];

const QualityService = () => {
  return (
    <div className="w-full relative py-6 sm:h-[450px]">
      <div className="absolute top-0 left-0 z-0 h-full w-full">
        <Image
          src={"/images/bg-image.png"}
          className="object-cover"
          alt=""
          fill
        />
      </div>

      <div className="relative z-10 max-w-7xl p-2 mx-auto w-full flex items-center flex-col justify-center h-full">
        <h2 className="font-semibold text-[35px] sm:text-[50px] text-center text-white">
        Enterprise-Grade SAP Talent in 48 Hours
        </h2>
        <p className="text-white text-center">No Compromise on Quality</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                className=" bg-white rounded-xl overflow-hidden p-4 sm:p-7 space-y-2 sm:space-y-4"
              >
                <Image
                  src={item.icon}
                  alt=""
                  className="size-5 sm:size-7"
                  width={30}
                  height={30}
                />

                <h3 className="text-sm sm:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-base text-[#282938]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QualityService;
