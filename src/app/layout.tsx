import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AOS from "@/components/AOS";

export const metadata: Metadata = {
  title: "Максим Гнатишин | Full stack developer",
  description:
    "Мене звати Максим Гнатишин, я Full stack developer з досвідом роботи з JavaScript, React, Next.js та TypeScript. Випускник Західноукраїнського національного університету, спеціальність Інженерія програмного забезпечення.",
  keywords: [
    "Full stack developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AOS />
        {children}
      </body>
    </html>
  );
}
