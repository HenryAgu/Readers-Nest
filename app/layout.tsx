import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
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
          ${inter.variable}
          ${playfair.variable}
          antialiased 
          container mx-auto
        `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
