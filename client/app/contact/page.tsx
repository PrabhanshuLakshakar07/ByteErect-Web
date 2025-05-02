import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin } from "lucide-react";
import { seo } from "@/lib/seo.config";
import { CTASection } from "@/components/cta-section";
import Image from "next/image";

export const metadata = seo.contact;

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We love to hear from you! Reach out for project inquiries,
            partnerships, or just to say hello.
          </p>
        </div>
        <CTASection />
      </Container>
    </div>
  );
}
