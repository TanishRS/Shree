import type { Metadata } from "next";
import { Roboto_Slab, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree Excellence Tutorials | Pride in Excellence",
  description:
    "State Board and CBSE coaching for Grades 8–10 in Panvel, Maharashtra. Rated 4.9★ on Google with 44 reviews. Call +91 99673 65793.",
  keywords: [
    "tuition Panvel",
    "coaching classes Panvel",
    "CBSE tuition Khanda Colony",
    "State Board coaching Panvel",
    "Grade 8 9 10 tuition",
    "Shree Excellence Tutorials",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-cream text-[#1a1a2e]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
