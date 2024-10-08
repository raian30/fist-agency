import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/custom/Navbar";

export const metadata: Metadata = {
  title: "Fist Agency",
  description: "Modern digital agency.",
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
