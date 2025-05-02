import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Chat from "@/components/chat";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteErect | Premium Mobile App Development Agency",
  description:
    "We design and develop cutting-edge mobile applications that transform businesses and user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        {/* Chat Button and Modal */}
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Open chat"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
          </DialogTrigger>
          <DialogContent
            className="fixed bottom-8 right-8 max-w-md w-full p-0 bg-blue-600 rounded-xl shadow-2xl border-none"
            style={{ left: "auto", top: "auto", transform: "none" }}
          >
            <DialogTitle className="text-white px-6 pt-6">
              Chat with ByteErect
            </DialogTitle>
            <DialogDescription className="text-blue-100 px-6">
              Ask us anything about our services or your project.
            </DialogDescription>
            <div className="p-6">
              <Chat />
            </div>
          </DialogContent>
        </Dialog>
      </body>
    </html>
  );
}
