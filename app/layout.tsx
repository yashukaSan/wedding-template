import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Haeder from "./header"
import Footer from "./footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding template",
  description: "Created by Yogesh Sahu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Haeder />
          {children}
        <Footer />
      </body>
    </html>
  );
}
