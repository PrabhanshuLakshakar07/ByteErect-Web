"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setFormState({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "We'll be in touch with you shortly.",
          variant: "default",
        });
      } else {
        setIsSubmitting(false);
        toast({
          title: "Something went wrong",
          description: data.error || "There was an error sending your message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-10">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your mobile presence?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Let's discuss how we can help bring your vision to life with a
              custom mobile application that meets your business needs.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/20 text-blue-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Free consultation</h3>
                  <p className="text-sm text-slate-400">
                    Schedule a no-obligation consultation with our experts
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/20 text-blue-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    Transparent pricing
                  </h3>
                  <p className="text-sm text-slate-400">
                    Clear project scope and pricing with no hidden costs
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/20 text-blue-500">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Ongoing support</h3>
                  <p className="text-sm text-slate-400">
                    Dedicated support and maintenance after project completion
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-slate-800 bg-slate-900/80 text-white shadow-xl">
            <CardHeader>
              <CardTitle>Let's Talk</CardTitle>
              <CardDescription className="text-slate-400">
                Fill out the form below and we'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="border-slate-800 bg-slate-900 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="border-slate-800 bg-slate-900 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] resize-none border-slate-800 bg-slate-900 text-white"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
