"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Smartphone, Code, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Chat from "./chat";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keywords = [
    "Mobile Apps",
    "Web  Development",
    "User Experiences",
    "Business Solutions",
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-blue-700/40 bg-blue-900/20 px-4 py-1.5 text-sm text-blue-300 backdrop-blur-md">
            <span className="mr-1 text-xs font-semibold uppercase">New</span> We are
            offering Android development
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            We build exceptional{" "}
            <span className="relative">
              <span
                className={cn(
                  "text-blue-400 transition-opacity duration-300",
                  mounted ? "opacity-100" : "opacity-0"
                )}
              >
                {keywords[currentIndex]}
              </span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-500"></span>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            ByteErect is a premium mobile app development agency delivering
            cutting-edge solutions that elevate your business to the next level.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
              Start your project <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-slate-700 bg-transparent text-white hover:bg-slate-800"
            >
              Our work <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <Smartphone className="h-10 w-10 text-blue-500" />
              <h3 className="mt-4 text-xl font-medium text-white">
                Native Apps
              </h3>
              <p className="mt-2 text-slate-400">
                Fast, responsive and platform-optimized applications built with
                Swift and Kotlin.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <Code className="h-10 w-10 text-blue-500" />
              <h3 className="mt-4 text-xl font-medium text-white">
                Cross-Platform
              </h3>
              <p className="mt-2 text-slate-400">
                Efficient multi-platform development using React Native and
                Flutter.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
              <svg
                className="h-10 w-10 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-white">
                UI/UX Design
              </h3>
              <p className="mt-2 text-slate-400">
                Intuitive and engaging designs focused on exceptional user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
