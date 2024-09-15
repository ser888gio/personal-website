"use client";

import "./globals.css";
import BusinessCard from "../components/BusinessCard";
import TechStack from "../components/TechStack";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import "@/utils/i18n";
import LanguageButton from "../components/LanguageButton";

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-[#0F172A] relative mt-10 text-white`}>
        <div className="absolute top-4 right-4 z-10">
          <LanguageButton />
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          {/* Left side - fixed
          lg means large screen (1024px and up) */}
          <div className="lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[40%] p-4 overflow-y-auto">
            <div className="flex justify-center mt-10">
              <BusinessCard />
            </div>
            <div className="flex justify-center">
              <Navbar />
            </div>
          </div>
          {/* Right side - scrollable */}
          <div className="lg:ml-[40%] lg:w-[60%] p-4 overflow-y-auto flex flex-col items-center">
            <div id="about-me" className="w-full max-w-3xl">
              <AboutMe aria-label="about-me" />
            </div>
            <div id="tech-stack" className="w-full max-w-3xl">
              <TechStack aria-label="tech-stack" />
            </div>
            <div id="contact-me" className="w-full max-w-3xl">
              <ContactMe aria-label="contact-me" />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-[#0F172A]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
