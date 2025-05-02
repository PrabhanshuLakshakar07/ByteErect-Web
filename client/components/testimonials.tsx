"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock testimonial data
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at HealthFirst',
    content: 'ByteErect transformed our healthcare service with an intuitive mobile app that both our medical staff and patients love. Their attention to detail and understanding of the healthcare industry was impressive.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Product Manager at FinTech Solutions',
    content: 'Working with ByteErect was a game-changer for our financial services app. Their technical expertise and innovative approach helped us deliver a product that exceeded our customers\' expectations.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director at TravelPlus',
    content: 'The travel app ByteErect developed for us has significantly increased user engagement and bookings. Their team was responsive, creative, and delivered on time and within budget.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Founder of EduTech',
    content: 'ByteErect\'s expertise in educational technology was evident in the learning app they developed for us. They understood our vision and created an engaging platform that students and teachers love.',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!mounted) return null;

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20" id="testimonials">
      <div className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-4">Testimonials</Badge>
        <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mb-16 max-w-3xl text-lg text-slate-400">
          Don't just take our word for it. Hear from some of our satisfied clients about their experience working with ByteErect.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-5 w-5",
                    i < currentTestimonial.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-none text-slate-600"
                  )}
                />
              ))}
            </div>
            <blockquote className="mb-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
              "{currentTestimonial.content}"
            </blockquote>
            <div className="mt-auto">
              <div className="flex items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">{currentTestimonial.name}</p>
                  <p className="text-sm text-slate-400">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden overflow-hidden rounded-xl border border-slate-800 md:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < currentTestimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-none text-slate-600"
                    )}
                  />
                ))}
              </div>
              <p className="mb-1 text-xl font-medium text-white">{currentTestimonial.name}</p>
              <p className="text-sm text-slate-300">{currentTestimonial.role}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 rounded-full border-slate-800 bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 rounded-full border-slate-800 bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
        
        <div className="mt-6 flex justify-center md:justify-start">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={cn(
                "mx-1 h-2 w-2 rounded-full",
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-slate-700 hover:bg-slate-600"
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}