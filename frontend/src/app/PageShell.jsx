"use client";

import { useState } from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function PageShell({ children, orbitronClass }) {
  // All the client-side logic now lives here
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event) => {
    setIsScrolled(event.currentTarget.scrollTop > 10);
  };

  return (
    <>
      <Header orbitronClass={orbitronClass} isScrolled={isScrolled} />

      <main onScroll={handleScroll} className="flex-grow overflow-y-auto">
        {children}
      </main>

      <Footer />
    </>
  );
}
