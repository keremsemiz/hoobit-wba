"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search, Menu } from "lucide-react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <header className="sticky top-0 z-50 backdrop-blur border-none rounded-full py-5 px-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("hero-section")}>Hoobit</h1>
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <button onClick={() => scrollToSection("features-section")} className="text-slate-400 hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollToSection("testimonials-section")} className="text-slate-400 hover:text-white transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection("cta-section")} className="text-slate-400 hover:text-white transition-colors">Get Started</button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-slate-400 hover:text-slate-900 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
