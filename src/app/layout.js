"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { useEffect } from "react";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
export { headingFont };