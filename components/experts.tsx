"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { Separator } from "./ui/separator";

const data = [
  {
    role: "Role: SAP FICO Consultant",
    jd_match: 94,
    persona: "Analytical, structured, risk-aware",
    availability: "Immediate",
    domain: "BFSI, Manufacturing, 6+ years",
    ref_score: "4.8/5 (based on 3 global clients)",
    readiness: "Ready in 48 hours",
    image: "/images/p1.png",
  },
  {
    role: "Role: SAP MM / Ariba Consultant",
    jd_match: 98,
    persona: "Analytical, structured, risk-aware",
    availability: "Immediate",
    domain: "BFSI, Manufacturing, 6+ years",
    ref_score: "4.8/5 (based on 3 global clients)",
    readiness: "Ready in 48 hours",
    image: "/images/p2.png",
  },
  {
    role: "Role: SAP SuccessFactors Lead",
    jd_match: 93,
    persona: "Analytical, structured, risk-aware",
    availability: "Immediate",
    domain: "BFSI, Manufacturing, 6+ years",
    ref_score: "4.8/5 (based on 3 global clients)",
    readiness: "Ready in 48 hours",
    image: "/images/p3.png",
  },
];

const Experts = () => {
  return (
    <div className="w-full relative py-6 sm:h-[1020px]">
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
          Meet Our Elite SAP Experts
        </h2>
        <p className="text-white text-center">
          Selected experts with knowledge and a history of successful delivery
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-10">
          {data.map((item) => (
            <Card
              key={item.role}
              className="border-b-0 overflow-hidden bg-transparent"
            >
              <div className="relative aspect-[9/7] ">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <CardContent className="bg-white py-3">
                <div className="space-y-3">
                  <h3 className="font-bold">{item.role}</h3>
                  <Separator className="bg-[#464646]" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">
                      {" "}
                      JD Match : {item.jd_match}%
                    </p>
                    <div className="w-full bg-white border rounded-md relative h-6 overflow-hidden">
                      <div
                        style={{ width: `${item.jd_match}%` }}
                        className={` absolute h-full top-0 left-0 bg-green-500/80`}
                      ></div>
                    </div>
                  </div>
                  <Separator className="bg-[#464646]" />
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="font-semibold">Persona: </span>{" "}
                      <span className="text-end">{item.persona}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Availability: </span>{" "}
                      <span>{item.availability}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Domain Fit: </span>{" "}
                      <span>{item.domain}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Reference Score: </span>{" "}
                      <span>{item.ref_score}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Readiness: </span>{" "}
                      <span>{item.readiness}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white rounded-b-lg">
                <Button
                  variant={"appBlue"}
                  className="rounded-full text-sm h-14 px-10 font-semibold w-full"
                >
                  View Full Persona Report{" "}
                  <MoveRight size={20} className="ml-3 " />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className=" mt-8">
          <Button
            variant={"appYellow"}
            className="rounded-full text-base h-14 px-10 font-semibold"
          >
            View More SAP Consultants <MoveRight size={20} className="ml-3 " />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
