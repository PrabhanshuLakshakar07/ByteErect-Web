"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock project data
const projectsData = [
  {
    id: 'healthtrack',
    title: 'HealthTrack',
    category: 'Healthcare',
    description: 'A comprehensive health monitoring application that tracks vitals, medication, and appointments.',
    imageSrc: 'https://images.pexels.com/photos/6690243/pexels-photo-6690243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Firebase', 'HealthKit'],
    link: '/projects/healthtrack'
  },
  {
    id: 'finwise',
    title: 'FinWise',
    category: 'Finance',
    description: 'Personal finance management app with budget tracking, expense categorization, and financial insights.',
    imageSrc: 'https://images.pexels.com/photos/6634170/pexels-photo-6634170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    link: '/projects/finwise'
  },
  {
    id: 'socialtrend',
    title: 'SocialTrend',
    category: 'Social Media',
    description: 'Next-generation social media platform focused on content creators and community building.',
    imageSrc: 'https://images.pexels.com/photos/6633818/pexels-photo-6633818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'Kotlin', 'AWS'],
    link: '/projects/socialtrend'
  },
  {
    id: 'retailpro',
    title: 'RetailPro',
    category: 'E-commerce',
    description: 'Mobile commerce solution with AR product visualization and seamless checkout experience.',
    imageSrc: 'https://images.pexels.com/photos/3585090/pexels-photo-3585090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'GraphQL', 'Stripe'],
    link: '/projects/retailpro'
  },
  {
    id: 'travelbud',
    title: 'TravelBud',
    category: 'Travel',
    description: 'Intelligent travel companion app with itinerary management, recommendations, and local experiences.',
    imageSrc: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    link: '/projects/travelbud'
  },
  {
    id: 'eduplus',
    title: 'EduPlus',
    category: 'Education',
    description: 'Interactive learning platform with personalized curriculum and progress tracking for students.',
    imageSrc: 'https://images.pexels.com/photos/5428147/pexels-photo-5428147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Swift', 'Python', 'TensorFlow'],
    link: '/projects/eduplus'
  }
];

const categories = [
  'All',
  ...Array.from(new Set(projectsData.map((project) => project.category)))
];

interface ProjectsProps {
  featured?: boolean;
}

export function Projects({ featured = false }: ProjectsProps) {
  const [category, setCategory] = useState('All');
  
  const filteredProjects = projectsData.filter((project) => 
    category === 'All' || project.category === category
  );
  
  const displayedProjects = featured 
    ? filteredProjects.slice(0, 3) 
    : filteredProjects;

  return (
    <section className="py-20" id="projects">
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4">Our Projects</Badge>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Showcase of Our Best Work
        </h2>
        <p className="mb-10 max-w-3xl text-lg text-slate-400">
          Explore our portfolio of successful mobile applications developed for clients across various industries.
        </p>
        
        {!featured && (
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="outline"
                className={cn(
                  "rounded-full border",
                  category === cat
                    ? "border-blue-600 bg-blue-900/20 text-blue-400"
                    : "border-slate-800 bg-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-300"
                )}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 transition-all hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="blue" className="mb-2">{project.category}</Badge>
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-slate-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-500 transition-colors group-hover:text-blue-400">
                  View case study
                </span>
                <ArrowRight className="h-4 w-4 text-blue-500 transition-colors group-hover:text-blue-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {featured && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-800 bg-slate-900/50 text-white hover:bg-slate-800"
            asChild
          >
            <Link href="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
}