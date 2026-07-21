import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Excellence Tutorials | Pride in Excellence",
  description:
    "State Board and CBSE coaching for Grades 8–12 in Panvel, Maharashtra. Rated 4.9★ on Google with 44 reviews. Call +91 99673 65793.",
  keywords: [
    "tuition Panvel",
    "coaching classes Panvel",
    "CBSE tuition Khanda Colony",
    "State Board coaching Panvel",
    "Grade 8 9 10 11 12 tuition",
    "Shree Excellence Tutorials",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-cream text-[#14110F]">
        <Navbar />
        <main className="flex-1 pt-[4.75rem] sm:pt-[5.75rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
