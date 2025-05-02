import { seo } from "@/lib/seo.config";
export const metadata = seo.ios;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

export default function IOSDevelopment() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            iOS Development
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Native iOS App Development
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We build high-performance, beautiful iOS applications using Swift
            and the latest Apple technologies. Our apps are optimized for speed,
            security, and seamless user experience on iPhone and iPad.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image
            src="https://www.techosquare.com/images/blog/iphone-ios-mobile-application-development-home.jpg"
            alt="iOS App Showcase"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Why Choose ByteErect for iOS?
            </h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>Swift & SwiftUI expertise</li>
              <li>App Store deployment & compliance</li>
              <li>Performance & battery optimization</li>
              <li>Custom UI/UX for Apple devices</li>
              <li>Integration with Apple services (HealthKit, ARKit, etc.)</li>
            </ul>
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Your iOS Project
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
