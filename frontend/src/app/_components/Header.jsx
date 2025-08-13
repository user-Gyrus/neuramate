"use client"; // Recommended when the component uses props that change

import Image from "next/image";
import Link from "next/link";

// 1. Accept the new `isScrolled` prop
function Header({ orbitronClass, isScrolled }) {
  return (
    // 2. Conditionally apply classes based on the `isScrolled` prop
    <div
      className={`
        flex justify-between flex-row items-center p-4 z-10 sticky top-0
        transition-all duration-300
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      {/* Left section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/image.png"
            alt="NeuraMate Logo"
            width={40}
            height={40}
            className="inline-block m-1 bg-white rounded-full"
          />
          <span className={`text-lg m-1 font-bold ${orbitronClass}`}>
            NeuraMate
          </span>
        </Link>
      </div>

      {/* Right Section */}
      <div className={`${orbitronClass}`}>
        <Link href="/accounts">Accounts</Link>
      </div>
    </div>
  );
}

export default Header;
