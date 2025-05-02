import { seo } from "@/lib/seo.config";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2025",
    event: "Founded ByteErect with a vision for digital excellence.",
  },
];
export const metadata = seo.about;
export default function About() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Who We Are
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            ByteErect is a passionate team of developers, designers, and
            strategists dedicated to building world-class mobile and web
            applications. Our mission is to empower businesses with innovative
            digital solutions that drive growth and delight users.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800"
                alt="Team"
                width={400}
                height={300}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="text-left max-w-lg">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Our Mission
              </h2>
              <p className="text-slate-400 mb-4">
                To deliver cutting-edge, user-centric digital products that
                transform businesses and improve lives. We believe in quality,
                transparency, and long-term partnerships.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Our Values
              </h2>
              <ul className="list-disc pl-5 text-slate-400 space-y-1">
                <li>Innovation & Excellence</li>
                <li>Integrity & Transparency</li>
                <li>Client Success</li>
                <li>Continuous Learning</li>
                <li>Teamwork & Respect</li>
              </ul>
            </div>
          </div>
          {/* Timeline Section */}
          <div className="mt-16 w-full">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Our Journey
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className="flex flex-col items-center bg-slate-900/60 rounded-xl p-6 border border-slate-800 min-w-[180px]"
                >
                  <span className="text-blue-400 text-lg font-bold mb-2">
                    {item.year}
                  </span>
                  <span className="text-slate-300 text-sm">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Team Section */}
          <div className="mt-16 w-full">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              <div className="flex flex-col items-center bg-slate-900/60 rounded-xl p-6 border border-slate-800 shadow-lg">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="CTO"
                  width={100}
                  height={100}
                  className="rounded-full mb-3"
                />
                <h3 className="text-lg font-bold text-white">Priya Singh</h3>
                <p className="text-blue-400">CTO</p>
              </div>
              <div className="flex flex-col items-center bg-slate-900/60 rounded-xl p-6 border border-slate-800 shadow-lg">
                <Image
                  src="/founder.png"
                  alt="CEO"
                  width={120}
                  height={120}
                  className="rounded-full mb-3"
                />
                <h3 className="text-lg font-bold text-white">
                  Prabhanshu Lakshakar
                </h3>
                <p className="text-blue-400">CEO & Founder</p>
              </div>
              <div className="flex flex-col items-center bg-slate-900/60 rounded-xl p-6 border border-slate-800 shadow-lg">
                <Image
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Lead Designer"
                  width={100}
                  height={100}
                  className="rounded-full mb-3"
                />
                <h3 className="text-lg font-bold text-white">Michael Lee</h3>
                <p className="text-blue-400">Lead Designer</p>
              </div>
            </div>
          </div>
          {/* Founder Quote */}
          <div className="mt-16 max-w-2xl mx-auto bg-slate-900/70 rounded-xl p-8 border border-slate-800 shadow-lg">
            <blockquote className="text-xl italic text-slate-200 mb-4">
              “We believe technology should empower, inspire, and connect people
              everywhere.”
            </blockquote>
            <span className="block text-blue-400 font-bold">
              Prabhanshu Lakshakar, Founder & CEO
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
