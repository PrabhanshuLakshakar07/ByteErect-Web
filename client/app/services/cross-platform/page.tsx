import { seo } from "@/lib/seo.config";
export const metadata = seo.crossPlatform;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

export default function CrossPlatformApps() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Cross-Platform Apps
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Cross-Platform Mobile App Development
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            Reach more users with a single codebase! We build high-quality
            cross-platform apps using React Native and Flutter, delivering
            native performance and a consistent experience on both iOS and
            Android.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image
            src="https://www.thedroidsonroids.com/wp-content/uploads/2023/11/header-2.png"
            alt="Cross-Platform App"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Why Choose Cross-Platform?
            </h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>Faster time to market</li>
              <li>Lower development & maintenance costs</li>
              <li>Consistent UI/UX across devices</li>
              <li>Access to native device features</li>
              <li>Expertise in React Native & Flutter</li>
            </ul>
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Your Cross-Platform Project
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
