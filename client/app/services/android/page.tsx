import { seo } from "@/lib/seo.config";
export const metadata = seo.android;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

export default function AndroidDevelopment() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Android Development
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Native Android App Development
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We create robust, scalable Android applications using Kotlin and the
            latest Google technologies. Our Android apps are designed for
            performance, security, and a seamless experience across all devices.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image
            src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/5f5b11b6a6b679001ce6c799.png"
            alt="Android App Showcase"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Why Choose ByteErect for Android?
            </h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>Kotlin & Java expertise</li>
              <li>Google Play deployment & compliance</li>
              <li>Device compatibility & optimization</li>
              <li>Material Design UI/UX</li>
              <li>Integration with Google services (Maps, Firebase, etc.)</li>
            </ul>
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Your Android Project
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
