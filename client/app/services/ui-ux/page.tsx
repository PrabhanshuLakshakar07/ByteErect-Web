import { seo } from "@/lib/seo.config";
export const metadata = seo.uiux;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

export default function UIUXDesign() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            UI/UX Design
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            UI/UX Design for Mobile & Web
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We craft intuitive, beautiful interfaces that delight users and
            drive business results. Our design process is user-centered,
            data-driven, and focused on delivering exceptional experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image
            src="https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg"
            alt="UI/UX Design"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Our UI/UX Services
            </h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>User research & persona development</li>
              <li>Wireframing & prototyping</li>
              <li>Visual design & branding</li>
              <li>Usability testing & analytics</li>
              <li>Design systems & documentation</li>
            </ul>
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Start Your Design Project
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
