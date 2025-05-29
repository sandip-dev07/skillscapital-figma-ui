"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const data = [
  {
    title: "SAP Consultants",
    desc: "Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.",
    action: "Explore SAP Consultants",
    image: "/images/card1.png",
  },
  {
    title: "Managed Teams",
    desc: "Scalable, fully managed SAP teams for end-to-end project delivery.",
    action: "Browse Managed Teams",
    image: "/images/card2.png",
  },
  {
    title: "SAP Consulting",
    desc: "SAP consulting and integration solutions to accelerate transformation.",
    action: "Access Top SAP Consulting",
    image: "/images/card3.png",
  },
];

const Expertise = () => {
  return (
   <section className="">
     <div className="max-w-7xl mx-auto p-2 w-full">
      <h2 className="font-semibold text-[35px] sm:text-[50px] text-center text-[#282938]">
        Source & Deploy SAP Expertise Seamlessly
      </h2>
      <p className="text-[#464646] text-center">
        Our AI-driven platform powers three key engagement models.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-10">
        {data.map((item) => (
          <Card key={item.title} className="sm:h-[550px] overflow-hidden">
            <div className="relative aspect-[9/7]">
              <Image src={item.image} alt="" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-[23px] sm:text-[28px] text-[#282938]">{item.title}</CardTitle>
            </CardHeader>
            <CardDescription className="px-6">{item.desc}</CardDescription>
            <CardFooter>
              <Button
                variant={"appBlue"}
                className="rounded-full text-sm h-14 px-10 font-semibold w-full mt-6"
              >
                Find SAP Experts Now <MoveRight size={20} className="ml-3 " />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
   </section>
  );
};

export default Expertise;
