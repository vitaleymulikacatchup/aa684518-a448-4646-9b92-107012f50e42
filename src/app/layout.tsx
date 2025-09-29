import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun Landing with Clear Buy Steps",
  description: "MemePulse makes memecoin fun and approachable with simple buying steps, transparent tokenomics, and a friendly, community-first vibe that invites everyone.",
  keywords: ["memecoin", "cryptocurrency", "buy meme", "tokenomics", "community", "memes", "crypto", "wallet", "airdrop", "memepulse"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MemePulse Memecoin — Fun Landing with Clear Buy Steps",
    description: "MemePulse makes memecoin fun and approachable with simple buying steps, transparent tokenomics, and a friendly, community-first vibe that invites everyone.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759139452156-2885890c.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse mascot against a pastel gradient with confetti",
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun Landing with Clear Buy Steps",
    description: "MemePulse makes memecoin fun and approachable with simple buying steps, transparent tokenomics, and a friendly, community-first vibe that invites everyone.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759139452156-2885890c.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}