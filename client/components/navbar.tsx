"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/careers" },
];

const serviceLinks = [
  { title: "iOS Development", href: "/services/ios" },
  { title: "Android Development", href: "/services/android" },
  { title: "Cross-Platform Apps", href: "/services/cross-platform" },
  { title: "UI/UX Designing", href: "/services/ui-ux" },
  { title: "Web Development", href: "/services/web" },
  { title: "App Maintenance", href: "/services/maintenance" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.jpg" alt="ByteErect Logo" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold text-white">
                Byte<span className="text-blue-500">Erect</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex space-x-6">
              {navigationItems.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div
                      key={item.name}
                      className="relative flex items-center"
                      onMouseEnter={() => {
                        if (servicesTimeout) clearTimeout(servicesTimeout);
                        setShowServices(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(
                          () => setShowServices(false),
                          200
                        );
                        setServicesTimeout(timeout);
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors",
                          pathname === item.href
                            ? "text-blue-400"
                            : "text-slate-300 hover:text-blue-300"
                        )}
                        style={{ padding: "0 12px" }}
                      >
                        {item.name}
                      </Link>
                      {showServices && (
                        <div
                          className="absolute left-1/2 top-full z-50 mt-2 w-80 -translate-x-1/2 rounded-xl border border-slate-800 bg-black/95 shadow-xl animate-fade-in"
                          onMouseEnter={() => {
                            if (servicesTimeout) clearTimeout(servicesTimeout);
                            setShowServices(true);
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(
                              () => setShowServices(false),
                              200
                            );
                            setServicesTimeout(timeout);
                          }}
                        >
                          <ul className="py-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                            {serviceLinks.map((service) => (
                              <li key={service.title}>
                                <Link
                                  href={service.href}
                                  className="block px-5 py-2 text-slate-200 hover:bg-blue-900/30 hover:text-blue-400 rounded transition-colors text-center"
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-blue-300"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-4 border-t border-slate-800 bg-black">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === item.href
                    ? "bg-slate-900 text-blue-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-3 w-full bg-blue-600 hover:bg-blue-700"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
