import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" className="inline-flex items-center">
              <span className="text-xl font-bold text-white">
                Byte<span className="text-blue-500">Erect</span>
              </span>
            </Link>
            <p className="mt-4 text-slate-400">
              Premium mobile app development agency delivering cutting-edge
              solutions for businesses worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-400 hover:bg-slate-900 hover:text-white"
                asChild
              >
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-400 hover:bg-slate-900 hover:text-white"
                asChild
              >
                <a
                  href="https://twitter.com/byteerect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-400 hover:bg-slate-900 hover:text-white"
                asChild
              >
                <a
                  href="https://www.instagram.com/byteerect?igsh=MWRuczI0azFseXFxbw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-400 hover:bg-slate-900 hover:text-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/byteerect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-slate-400 hover:bg-slate-900 hover:text-white"
                asChild
              >
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/ios"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  iOS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/android"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Android Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cross-platform"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Cross-Platform Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  App Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@byteerect.com"
                  className="flex items-center text-slate-400 hover:text-blue-400"
                >
                  <Mail className="mr-2 h-5 w-5 text-blue-500" />
                  byteerect@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-slate-400 hover:text-blue-400"
                >
                  <Phone className="mr-2 h-5 w-5 text-blue-500" />
                  +91 9755191734
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-500" />
                <span className="text-slate-400">
                  Electronic City Bangalore India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {new Date().getFullYear()} ByteErect. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-blue-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
