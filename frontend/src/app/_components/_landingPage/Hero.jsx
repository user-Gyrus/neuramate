"use client";
import { Orbitron, Poppins } from "next/font/google";
import FeaturesCarousel from "./FeaturesCarousel";
import Contact from "../Contact";
import { motion, useScroll, useTransform } from "framer-motion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

function Hero() {
  const handleScrollToFeatures = (event) => {
    const mainScrollableElement = event.currentTarget.closest("main");
    const featuresElement = document.getElementById("features");

    // New: Find the header element in the document
    const headerElement = document.querySelector("header");

    // Get the header's height. Default to 0 if it's not found.
    const headerHeight = headerElement ? headerElement.offsetHeight : 0;

    if (mainScrollableElement && featuresElement) {
      mainScrollableElement.scrollTo({
        // Updated: Subtract the header's height from the target's position
        top: featuresElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Intro part */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`text-5xl font-bold mb-4 ${orbitron.className} `}>
            Neuramate: Your AI Companion
          </h1>
          <p className={`text-lg mb-6 ${poppins.className}`}>
            Summarize videos, capture smart slides & images, and chat with an AI
            friend.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-6 py-3 rounded-3xl font-semibold"
            onClick={handleScrollToFeatures}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="">
        {/* We need some top margin/padding here so the heading isn't at the very top edge */}
        <h1
          id="features"
          className={`text-center text-2xl font-bold pt-20 ${poppins.className}`}
        >
          Explore Key features of <br />
          <span className={`${orbitron.className}`}>NEURAMATE</span>
        </h1>
        <FeaturesCarousel />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Hero;
