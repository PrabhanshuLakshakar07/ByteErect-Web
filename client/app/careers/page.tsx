import { seo } from "@/lib/seo.config";
export const metadata = seo.careers;

import Image from "next/image";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";

export default function Careers() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Careers
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Join Our Team
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            At ByteErect, we are always looking for passionate, talented
            individuals to join our growing team. If you want to work on
            cutting-edge projects and make a real impact, explore our open
            positions below!
          </p>
        </div>
       <CTASection/>
      <div className="mt-16 w-full">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Life at ByteErect
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <Image
              src="https://imageio.forbes.com/specials-images/dam/imageserve/982403996/960x0.jpg?height=474&width=711&fit=bounds"
              alt="Team Culture"
              width={400}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
            <div className="text-left max-w-lg">
              <p className="text-slate-400 mb-4">
                We believe in a culture of innovation, collaboration, and
                continuous learning. Our team enjoys flexible work options,
                regular team events, and opportunities for professional growth.
              </p>
              <ul className="list-disc pl-5 text-slate-400 space-y-1">
                <li>Flexible hours & remote work</li>
                <li>Learning & development budget</li>
                <li>Inclusive, diverse team</li>
                <li>Cutting-edge projects</li>
                <li>Supportive leadership</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Didn't find your role?
          </h2>
          <p className="text-slate-400 mb-4">
            We're always interested in meeting talented people. Send your resume
            and portfolio to{" "}
            <a
              href="mailto:careers@byteerect.com"
              className="text-blue-400 underline"
            >
                byteerect@gmail.com
            </a>{" "}
            and tell us how you can make a difference at ByteErect!
          </p>
        </div>
      </Container>
    </div>
  );
}
