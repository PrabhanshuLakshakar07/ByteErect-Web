import { seo } from "@/lib/seo.config";
export const metadata = seo.maintenance;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";

export default function AppMaintenance() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            App Maintenance
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            App Maintenance & Support
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            Keep your app secure, up-to-date, and running smoothly. ByteErect
            offers ongoing maintenance, updates, and support to ensure your
            mobile and web applications deliver the best experience for your
            users.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10">
          <Image
            src="https://cedcoss.com/wp-content/uploads/2023/06/Mobile-App-maintenance.jpg"
            alt="App Maintenance"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Our Maintenance Services
            </h2>
            <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
              <li>Bug fixes & troubleshooting</li>
              <li>Performance monitoring & optimization</li>
              <li>Security updates & compliance</li>
              <li>Feature enhancements & upgrades</li>
              <li>24/7 support & emergency response</li>
            </ul>
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition"
            >
              Get App Support
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
