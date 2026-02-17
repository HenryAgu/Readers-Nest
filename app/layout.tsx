import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://readers-nest.vercel.app/"),

  title: {
    default: "ReadersNest | Read Better. Think Deeper. Grow Together.",
    template: "%s | ReadersNest",
  },

  description:
    "ReadersNest is a community-driven book club focused on intentional reading, deep discussions, and personal growth.",

  openGraph: {
    title: "ReadersNest | Read Better. Think Deeper. Grow Together.",
    description:
      "Join a community of passionate readers exploring one powerful book every month.",
    url: "https://readers-nest.vercel.app/",
    siteName: "ReadersNest",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadersNest Book Club – Read Better. Think Deeper. Grow Together.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ReadersNest",
    description:
      "A modern book club for intentional readers.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-[#F4EFE6] 
          text-[#2F4F2F]
        `}
      >
        {children}
      </body>
    </html>
  );
}
