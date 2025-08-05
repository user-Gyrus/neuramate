"use client";

import { carousel } from "@/app/_data/carouselData";
import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Image from "next/image";

function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // for animation

  const handleLeftClick = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carousel.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = carousel[currentIndex];

  return (
    <div className="flex flex-row h-[500px] mx-1 select-none">
      {/* Left Arrow */}
      <div
        onClick={handleLeftClick}
        className="flex items-center justify-center cursor-pointer hover:shadow-[0_0_15px_#7d8592] w-[50px] transition duration-100 rounded-2xl active:scale-90"
      >
        <FaCaretLeft className="text-5xl text-white" />
      </div>

      {/* Feature Card with Sliding Animation */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <div
          key={currentItem.id}
          className={`flex flex-col items-center justify-center h-full w-[80%] p-6 bg-gray-800 rounded-lg shadow-lg text-center transition-transform duration-500 ease-in-out ${
            direction === "right"
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }`}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            {currentItem.title}
          </h2>
          <p className="text-gray-300 mb-6">{currentItem.description}</p>
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Arrow */}
      <div
        onClick={handleRightClick}
        className="flex items-center justify-center cursor-pointer hover:shadow-[0_0_15px_#7d8592] w-[50px] transition duration-100 rounded-2xl active:scale-90"
      >
        <FaCaretRight className="text-5xl text-white" />
      </div>
    </div>
  );
}

export default FeaturesCarousel;
