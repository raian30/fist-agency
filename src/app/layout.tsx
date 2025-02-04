import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/custom/Navbar";
import Cursor from "@/components/custom/Cursor";
import Footer from "@/components/custom/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Fist Agency | Making a Strong Digital Impact",
  description: "Fist Agency, a no-nonsense digital agency offering Web development, UX/UI design, Search engine optimization (SEO), Conversion rate optimisation (CRO), and consultations. Driven by innovation, built on dedication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased text-white bg-background overflow-x-hidden font-[300]`}
      >
        <Cursor/>
        <Navbar/>
        {children}
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
