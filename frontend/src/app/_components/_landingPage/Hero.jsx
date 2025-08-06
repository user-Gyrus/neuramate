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
  return (
    <div className="flex flex-col">
      {/* Intro part */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* <video
          src="/bgvideo.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        /> */}

        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60" /> */}
        {/* <div className="absolute w-full h-full bg-gradient-to-r from-red-400 via-pink-400 to-blue-300 rounded-[50%]" /> */}

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`text-5xl font-bold mb-4 ${orbitron.className} `}>
            Neuramate: Your AI Companion
          </h1>
          <p className={`text-lg mb-6 ${poppins.className}`}>
            Summarize videos, capture smart slides & images, and chat with an AI
            friend.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-6 py-3 rounded-3xl font-semibold">
            Get Started
          </button>
        </div>
      </div>

      <div className="my-4">
        <h1
          className={`text-center text-2xl font-bold my-8 ${poppins.className}`}
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
