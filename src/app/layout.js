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
  
    const cursor = document.getElementById("custom-cursor");
  
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
  
    window.addEventListener("mousemove", moveCursor);
  
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <html lang="en">
      <body className={bodyFont.className}>
          <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999]"></div>
        {children}</body>
    </html>
  );
}
export { headingFont };