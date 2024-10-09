import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/custom/Navbar";

export const metadata: Metadata = {
  title: "Fist Agency | Making a Strong Digital Impact",
  description: "Fist, a no-nonsense digital agency offering Web development, UX/UI design, Search engine optimization (SEO), Conversion rate optimisation (CRO), and consultations. Driven by innovation, built on dedication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased text-white bg-background`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
