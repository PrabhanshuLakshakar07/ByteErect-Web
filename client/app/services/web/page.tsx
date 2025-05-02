import { seo } from '@/lib/seo.config';
export const metadata = seo.web;

import Image from 'next/image';
import { Container } from '@/components/container';
import { Badge } from '@/components/ui/badge';

export default function WebDevelopment() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">Web Development</Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">Modern Web Development</h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We build fast, secure, and scalable web applications using the latest technologies. From landing pages to complex web platforms, ByteErect delivers solutions that drive business growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image src="https://www.cdmi.in/courses@2x/web-developments.webp" alt="Web Development" width={350} height={350} className="rounded-xl shadow-lg object-cover" />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">Our Web Expertise</h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>React, Next.js, and modern frameworks</li>
              <li>Responsive & mobile-first design</li>
              <li>API integration & backend development</li>
              <li>SEO & performance optimization</li>
              <li>Cloud deployment & DevOps</li>
            </ul>
            <a href="/contact" className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition">Start Your Web Project</a>
          </div>
        </div>
      </Container>
    </div>
  );
} 