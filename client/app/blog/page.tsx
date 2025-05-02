
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { seo } from "@/lib/seo.config";

const posts = [
  {
    title: "The Future of Mobile App Development",
    excerpt:
      "Discover the latest trends and technologies shaping the future of mobile applications in 2024 and beyond.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600",
    date: "2024-05-01",
    link: "#",
  },
  {
    title: "UI/UX Best Practices for 2024",
    excerpt:
      "Learn how to create engaging, user-friendly interfaces that delight users and drive business results.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=600",
    date: "2024-04-15",
    link: "#",
  },
  {
    title: "Why Cross-Platform Apps Are the Future",
    excerpt:
      "Explore the benefits and challenges of building cross-platform mobile applications with React Native and Flutter.",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=600",
    date: "2024-03-28",
    link: "#",
  },
];

export const metadata = seo.blog;

export default function Blog() {
  return (
    <div className="bg-gradient-to-b from-black to-slate-900 py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4">
            Blog
          </Badge>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Insights & Resources
          </h1>
          <p className="mb-10 max-w-3xl text-lg text-slate-300">
            Stay up to date with the latest news, tips, and insights from the
            ByteErect team.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={post.link}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-blue-700 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs text-blue-400 mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 flex-1">{post.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-blue-500 transition-colors group-hover:text-blue-400">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
