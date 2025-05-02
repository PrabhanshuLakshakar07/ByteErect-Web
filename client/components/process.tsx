"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, Code, Shield, Rocket, MessageSquare, FileSearch } from 'lucide-react';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    id: 'discovery',
    label: 'Discovery',
    title: 'Discover and Define',
    description: 'We work closely with you to understand your business, target audience, and project goals to define a clear roadmap.',
    icon: <Lightbulb className="h-8 w-8" />,
    details: [
      'Business requirements gathering',
      'Market research and competitor analysis',
      'User persona development',
      'Project scope definition',
      'Technical feasibility assessment'
    ]
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Design and Prototype',
    description: 'Our design team creates intuitive, engaging user interfaces with a focus on user experience excellence.',
    icon: <FileSearch className="h-8 w-8" />,
    details: [
      'Wireframing and information architecture',
      'Visual design and UI component creation',
      'Interactive prototyping',
      'User testing and feedback implementation',
      'Design system development'
    ]
  },
  {
    id: 'development',
    label: 'Development',
    title: 'Development and Testing',
    description: 'We build your application using the latest technologies and follow industry best practices for quality code.',
    icon: <Code className="h-8 w-8" />,
    details: [
      'Agile development methodology',
      'Clean, maintainable code architecture',
      'Regular sprint reviews and demos',
      'Comprehensive quality assurance testing',
      'Performance optimization'
    ]
  },
  {
    id: 'security',
    label: 'Security',
    title: 'Security and Compliance',
    description: 'We implement robust security measures to protect your application and user data from vulnerabilities.',
    icon: <Shield className="h-8 w-8" />,
    details: [
      'Data encryption implementation',
      'Authentication and authorization systems',
      'Security code reviews and penetration testing',
      'Compliance with industry regulations (GDPR, HIPAA, etc.)',
      'Security best practices documentation'
    ]
  },
  {
    id: 'launch',
    label: 'Launch',
    title: 'Deployment and Launch',
    description: 'We handle the deployment process and ensure a smooth launch of your application to the market.',
    icon: <Rocket className="h-8 w-8" />,
    details: [
      'App store preparation and submission',
      'Server environment configuration',
      'Continuous integration/continuous deployment setup',
      'Launch strategy and marketing support',
      'Post-launch monitoring and optimization'
    ]
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Maintenance and Support',
    description: 'Our relationship continues after launch with ongoing maintenance, updates, and support services.',
    icon: <MessageSquare className="h-8 w-8" />,
    details: [
      'Proactive app maintenance and updates',
      'Bug fixes and issue resolution',
      'Feature enhancements and iterations',
      'Performance monitoring and analytics',
      'Technical support and consultation'
    ]
  }
];

export function Process() {
  const [activeTab, setActiveTab] = useState('discovery');

  return (
    <section className="py-20" id="process">
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4">Our Process</Badge>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          How We Bring Your Ideas to Life
        </h2>
        <p className="mb-16 max-w-3xl text-lg text-slate-400">
          We follow a structured yet flexible process to ensure every application we build exceeds expectations.
        </p>
      </div>

      <Tabs defaultValue="discovery" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex w-full flex-wrap justify-center gap-2 bg-transparent">
          {processSteps.map((step) => (
            <TabsTrigger
              key={step.id}
              value={step.id}
              className={cn(
                "rounded-full border px-6 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                activeTab === step.id
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-800 bg-slate-900 text-slate-400 hover:border-blue-800 hover:text-slate-100"
              )}
            >
              {step.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {processSteps.map((step) => (
          <TabsContent key={step.id} value={step.id} className="mt-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-900/20 text-blue-500">
                  {step.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">{step.title}</h3>
                <p className="mb-6 text-lg text-slate-400">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 lg:p-10">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg bg-slate-800">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-blue-500">{step.icon}</div>
                    <h4 className="mt-4 text-xl font-medium text-white">{step.label}</h4>
                    <p className="mt-2 text-sm text-slate-400">Step {processSteps.findIndex(s => s.id === step.id) + 1} of {processSteps.length}</p>
                    <div className="mt-6 h-1 w-full max-w-[200px] rounded-full bg-slate-700">
                      <div 
                        className="h-1 rounded-full bg-blue-500" 
                        style={{ 
                          width: `${((processSteps.findIndex(s => s.id === step.id) + 1) / processSteps.length) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}