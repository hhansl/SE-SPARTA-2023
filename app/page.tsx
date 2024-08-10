"use client";
import Image from "next/image" ; 
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "@/components/Hero.tsx";
import Interest from "@/components/Interest.tsx";
import Skills from "@/components/Skills.tsx";
import Project from "@/components/Project.tsx";
import Experience from "@/components/Experience.tsx";
import Contact from "@/components/Contact.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="dark:bg-gradient-to-t from-gray-700 to-gray-900 overflow-hidden">
      <SpeedInsights/>
      <Analytics/>
      <Hero/>
      <Interest/>
      <Skills/>
      <Project/>
      <Experience />
      <Contact/>  
    </main>
    );
  };

export default Home;