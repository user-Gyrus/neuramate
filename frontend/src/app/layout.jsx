import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Orbitron, Inter } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "NeuraMate",
  keywords: "AI, NeuraMate, Next.js, React",
  authors: [{ name: "Nanda Kumar" }],
  description: "Your AI-powered companion for learning and support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header orbitronClass={orbitron.className} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
