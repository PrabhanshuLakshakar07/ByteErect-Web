import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Layers,
  Zap,
  Code,
  LineChart,
  Shield,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) => (
  <div
    className={cn(
      "flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-blue-900/50 hover:bg-slate-900/80",
      className
    )}
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-500">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

export function Services() {
  return (
    <section className="py-20" id="services">
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4">
          Our Services
        </Badge>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Comprehensive Mobile Development Solutions
        </h2>
        <p className="mb-16 max-w-3xl text-lg text-slate-400">
          We offer end-to-end mobile application development services, from
          ideation and design to development and deployment.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="iOS Development"
          description="Native iOS applications built with Swift for optimal performance and seamless user experience."
          icon={<Smartphone className="h-6 w-6" />}
        />
        <ServiceCard
          title="Android Development"
          description="Feature-rich Android applications developed with Kotlin to reach the largest mobile user base."
          icon={<Smartphone className="h-6 w-6" />}
        />
        <ServiceCard
          title="Cross-Platform Apps"
          description="Cost-effective solutions using React Native and Flutter for deployment across multiple platforms."
          icon={<Layers className="h-6 w-6" />}
        />
        <ServiceCard
          title="UI/UX Design"
          description="User-centered design that focuses on creating intuitive, engaging, and memorable experiences."
          icon={<Zap className="h-6 w-6" />}
        />
        <ServiceCard
          title="Web Development"
          description="Build modern, responsive websites and applications using the latest web technologies."
          icon={<Code className="h-6 w-6" />}
        />
        <ServiceCard
          title="App Maintenance"
          description="Ongoing support and updates to ensure your application remains secure and up-to-date."
          icon={<RefreshCw className="h-6 w-6" />}
        />
      </div>
    </section>
  );
}