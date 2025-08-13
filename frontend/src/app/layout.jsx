import "./globals.css";
import { Orbitron, Inter } from "next/font/google";
import PageShell from "./PageShell"; // Import the new client component

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

// 1. The metadata export can now stay here, in a Server Component.
export const metadata = {
  title: "NeuraMate",
  description: "Your AI-powered companion for learning and support",
};

export default function RootLayout({ children }) {
  // 2. This file is a Server Component again (no "use client").
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen flex flex-col bg-background`}
      >
        {/* 3. Use the PageShell component to wrap the children */}
        <PageShell orbitronClass={orbitron.className}>{children}</PageShell>
      </body>
    </html>
  );
}
