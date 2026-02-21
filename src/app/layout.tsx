import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Best Astrologer in Navi Mumbai",
    default: "Best Astrologer in Navi Mumbai | Accurate Kundli & Marriage Predictions",
  },
  description:
    "Consult the best astrologer in Navi Mumbai with 30+ years of experience. Get accurate predictions for marriage, career, child birth, business growth, and Kundli matching.",
  keywords: [
    "Astrologer in Navi Mumbai",
    "Best Astrologer near me",
    "Love Marriage Specialist Navi Mumbai",
    "Kundli Matching",
    "Career Astrology",
    "Business Problem Solution",
    "Child Birth Guidance",
    "Genuine Astrologer in Mumbai",
  ],
  authors: [{ name: "Best Astrologer Navi Mumbai" }],
  creator: "Best Astrologer Navi Mumbai",
  publisher: "Best Astrologer Navi Mumbai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Best Astrologer in Navi Mumbai | Accurate Predictions",
    description: "Expert astrology consultation in Navi Mumbai. Specialist in marriage, career, and business problems. 30+ years of trusted experience.",
    url: "https://yourwebsite.com", // Recommendation: update with actual domain
    siteName: "Best Astrologer Navi Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Astrologer in Navi Mumbai",
    description: "Expert astrology consultation in Navi Mumbai. Experience 30+ years of trusted guidance.",
    creator: "@yourhandle", // Update if you have a Twitter Handle
  },
  alternates: {
    canonical: "https://yourwebsite.com", // Recommendation: update with actual domain
  },
  icons: {
    icon: "/Logos/Fav.png",
    apple: "/Logos/Fav.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import TrustStrip from "@/components/TrustStrip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <TopBar />
        <MainHeader />
        <TrustStrip />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
