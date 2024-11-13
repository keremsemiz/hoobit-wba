import React from "react";
import { Button } from "./ui/button";

function CTASection() {
  return (
    <section id="cta-section" className="py-20 sm:py-32 mb-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Ready to start learning Python?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join Hoobit today and begin your journey with free, personalized Python tutoring designed to make learning simple and effective.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })} className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-12 px-8 rounded-lg transition-colors">
            Start Learning for Free
          </Button>
          <Button onClick={() => document.getElementById("testimonials-section").scrollIntoView({ behavior: "smooth" })} variant="outline" className="text-black border-slate-600 hover:bg-slate-200 h-12 px-8 rounded-lg transition-colors">
            See Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
