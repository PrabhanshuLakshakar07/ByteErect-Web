import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Layers,
  Zap,
  Code, LineChart,
  RefreshCw,
} from "lucide-react";
import { seo } from "@/lib/seo.config";

const services = [
  {
    title: "iOS Development",
    description:
      "Native iOS applications built with Swift for optimal performance and seamless user experience.",
    icon: <Smartphone className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Android Development",
    description:
      "Feature-rich Android applications developed with Kotlin to reach the largest mobile user base.",
    icon: <Smartphone className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Cost-effective solutions using React Native and Flutter for deployment across multiple platforms.",
    icon: <Layers className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that focuses on creating intuitive, engaging, and memorable experiences.",
    icon: <Zap className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications using the latest technologies.",
    icon: <Code className="h-8 w-8 text-blue-500" />,
  }
,  
  {
    title: "App Maintenance",
    description:
      "Ongoing support and updates to ensure your application remains secure and up-to-date.",
    icon: <RefreshCw className="h-8 w-8 text-blue-500" />,
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Comprehensive Mobile Development Solutions
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            We offer end-to-end mobile application development services, from
            ideation and design to development and deployment.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-900/60 p-8 shadow-lg hover:border-blue-700 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export const metadata = seo.services;
