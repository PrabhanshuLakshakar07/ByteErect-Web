import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { seo } from "@/lib/seo.config";

const projects = [
  {
    title: "HealthTrack",
    category: "Healthcare",
    description:
      "A comprehensive health monitoring app for tracking vitals, medication, and appointments.",
    image:
      "https://images.pexels.com/photos/6690243/pexels-photo-6690243.jpeg?auto=compress&w=600",
    link: "#",
  },
  {
    title: "FinWise",
    category: "Finance",
    description:
      "Personal finance management app with budget tracking and financial insights.",
    image:
      "https://images.pexels.com/photos/6634170/pexels-photo-6634170.jpeg?auto=compress&w=600",
    link: "#",
  },
  {
    title: "SocialTrend",
    category: "Social Media",
    description:
      "A next-gen social platform for content creators and communities.",
    image:
      "https://images.pexels.com/photos/6633818/pexels-photo-6633818.jpeg?auto=compress&w=600",
    link: "#",
  },
  {
    title: "RetailPro",
    category: "E-commerce",
    description:
      "Mobile commerce solution with AR product visualization and seamless checkout.",
    image:
      "https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&w=600",
    link: "#",
  },
  {
    title: "TravelBud",
    category: "Travel",
    description:
      "Intelligent travel companion app with itinerary management and recommendations.",
    image:
      "https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg",
    link: "#",
  },
  {
    title: "EduPlus",
    category: "Education",
    description:
      "Interactive learning platform with personalized curriculum and progress tracking.",
    image:
      "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=",
    link: "#",
  },
];

export const metadata = seo.projects;

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Our Projects
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Showcase of Our Best Work
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            Explore our portfolio of successful mobile applications developed
            for clients across various industries.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 transition-all hover:border-blue-700 hover:bg-slate-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="blue" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-medium text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-slate-400">{project.description}</p>
                <span className="text-sm font-medium text-blue-500 transition-colors group-hover:text-blue-400">
                  View details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
