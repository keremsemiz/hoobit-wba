// HeroSection.js
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="mt-0 flex flex-col justify-center gap-4">
        <h2 className="text-4xl relative w-[80%] mx-auto z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
          Learn Programming the{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-0">
              <span className="">Easy & Fast way.</span>
            </div>
          </div>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-[60%] mx-auto py-2">
          <button
            onClick={scrollToFeatures}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-16 py-5 text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </button>
          <button
            className="inline-flex h-12 font-semibold animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-16 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            View Docs
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}