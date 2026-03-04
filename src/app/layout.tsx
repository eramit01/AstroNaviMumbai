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
    description: "Consult the best and most genuine astrologer in Navi Mumbai with 30+ years of trusted experience. Get solutions for marriage, career, child birth, and Kundli matching.",
    url: "https://www.astrologerinnavimumbai.in/",
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
    canonical: "https://www.astrologerinnavimumbai.in/",
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
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D45YC2DLQL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D45YC2DLQL');
          `}
        </Script>
        
        {/* Chatbot Widget Loader */}
        <Script id="chatbot-widget" strategy="afterInteractive">
          {`
            (function(){
              const spaId = "astrologer-in-navimumbai";
              const script = document.createElement('script');
              script.src = 'https://chatbot.bookingbot.in//bot.js?spa=' + spaId;
              script.async = true;
              script.setAttribute('data-spa', spaId);
              document.head.appendChild(script);
            })();
          `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <TopBar />
        <MainHeader />
        <TrustStrip />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Best Astrologer Navi Mumbai",
              "image": "https://www.astrologerinnavimumbai.in/AboutImg.png",
              "@id": "https://www.astrologerinnavimumbai.in/",
              "url": "https://www.astrologerinnavimumbai.in/",
              "telephone": "+91 93236 00011",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sai Sagar CHS, B-305, Plot no-50, Sector 20, Kharghar",
                "addressLocality": "Navi Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "410210",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0436,
                "longitude": 73.0645
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "priceRange": "$$"
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
