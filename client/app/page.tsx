import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Container } from "@/components/container";
import { seo } from "@/lib/seo.config";

export const metadata = seo.home;

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Services />
        <Process />
        <Projects featured={true} />
        <Testimonials />
        <CTASection />
      </Container>
    </>
  );
}
