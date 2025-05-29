import AiPowered from "@/components/ai-powered";
import CTA from "@/components/cta";
import Expertise from "@/components/experties";
import Experts from "@/components/experts";
import Hero from "@/components/hero";
import QualityService from "@/components/quality-service";
import React from "react";

const Home = () => {
  return (
    <main className="space-y-10">
      <Hero />
      <Expertise />
      <AiPowered />
      <QualityService />
      <CTA />
      <Experts />
    </main>
  );
};

export default Home;
