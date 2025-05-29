"use client"
import React from "react";
import CommonUi from "./common-ui";
import { Separator } from "./ui/separator";

const data1 = {
  headerIcon: "/icons/puzzel.svg",
  headerTitle: "Advanced ML-Powered Precision MatchTM",
  headerAction: "Find Talent",

  contentImage: "/images/ai01.png",
  features: [
    {
      icon: "/icons/ai01.svg",
      name: "Continuously Learning Models",
      desc: "Matching algorithms evolve with every project, improving accuracy over time.",
    },
    {
      icon: "/icons/ai02.svg",
      name: "Trained on Real-World Data",
      desc: "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
    },
    {
      icon: "/icons/ai03.svg",
      name: "AI-Powered Precision",
      desc: "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
    },
    {
      icon: "/icons/ai04.svg",
      name: "Optimized for Enterprise Needs",
      desc: "Ensures high-relevance matches tailored to complex SAP delivery environments.",
    },
  ],

  buttonAction: "Explore Our Vetting Process",
};

const data2 = {
  headerIcon: "/icons/deep.svg",
  headerTitle: "Deep Tech AI-Driven Deep Vet",
  headerAction: "Find Talent",

  contentImage: "/images/ai02.png",
  features: [
    {
      icon: "/icons/ai05.svg",
      name: "End-to-End Fit Scoring",
      desc: "Matching algorithms evolve with every project, improving accuracy over time.",
    },
    {
      icon: "/icons/ai06.svg",
      name: "Verified by External Assessments",
      desc: "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
    },
    {
      icon: "/icons/ai07.svg",
      name: "AI-Powered Matching",
      desc: "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
    },
    {
      icon: "/icons/ai08.svg",
      name: "Human Insights for Cultural Fit",
      desc: "Ensures high-relevance matches tailored to complex SAP delivery environments.",
    },
  ],

  buttonAction: "Our Candidate Vetting Process",
};

const data3 = {
  headerIcon: "/icons/users.svg",
  headerTitle: "Cognitive NLP-Processed Talent Personal",
  headerAction: "Find Talent",

  contentImage: "/images/ai03.png",
  features: [
    {
      icon: "/icons/ai09.svg",
      name: "Continuously Learning Models",
      desc: "Matching algorithms evolve with every project, improving accuracy over time.",
    },
    {
      icon: "/icons/ai10.svg",
      name: "Trained on Real-World Data",
      desc: "Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.",
    },
    {
      icon: "/icons/ai11.svg",
      name: "AI-Powered Precision",
      desc: "Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.",
    },
    {
      icon: "/icons/ai12.svg",
      name: "Optimized for Enterprise Needs",
      desc: "Ensures high-relevance matches tailored to complex SAP delivery environments.",
    },
  ],

  buttonAction: "Explore Our Vetting Process",
};


// /api/blogs 

const AiPowered = () => {
  return (
    <section className="w-full bg-[#F4F6FC] py-10">
      <div className="max-w-7xl mx-auto p-2 w-full">
        <h2 className="font-semibold text-[35px] sm:text-[50px] text-center text-[#282938]">
          AI-Powered Deep Vet 360
        </h2>
        <p className="text-[#464646] text-center">Precision Hiring at Scale.</p>
        <div>
          <CommonUi data={data1} />
          <Separator className="mt-8" />
          <CommonUi data={data2} />
          <Separator className="mt-8" />
          <CommonUi data={data3} />
        </div>
      </div>
    </section>
  );
};

export default AiPowered;
