import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import HoroscopeSEO from "@/components/HoroscopeSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Daily Horoscope & Rashifal Today | Weekly & Monthly Forecasts",
    description: "Read your free daily horoscope and rashifal today. Get highly accurate weekly, monthly, and yearly horoscope predictions based on Vedic astrology.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/daily-horoscope",
    },
    openGraph: {
        title: "Daily Horoscope & Rashifal Today | Astrological Forecasts",
        description: "Stay ahead of the stars. Check your accurate today horoscope, weekly, and yearly predictions from top Vedic astrologers.",
        url: "https://www.astrologer_in_navimumbai.in/daily-horoscope",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function DailyHoroscopePage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Horoscope Expert in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/daily-horoscope",
        "url": "https://www.astrologer_in_navimumbai.in/daily-horoscope",
        "telephone": "+919323600011",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sai Sagar CHS, B-305, Plot no-50, Sector 20",
            "addressLocality": "Kharghar, Navi Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "410210",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0330,
            "longitude": 73.0297
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1200"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How accurate is the daily horoscope?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our daily horoscope (rashifal today) is highly accurate as it is calculated using traditional Vedic astrology principles based on the Moon sign (Rashi)."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I read my yearly horoscope?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A yearly horoscope gives you a macro-level view of major planetary transits (like Jupiter and Saturn), allowing you to plan significant life events like marriage, investments, or career changes."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.astrologer_in_navimumbai.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Daily Horoscope",
                "item": "https://www.astrologer_in_navimumbai.in/daily-horoscope"
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <AstrologerHero 
                title={<>Accurate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Daily Horoscope</span> & Rashifal</>}
                subtitle="Get your free today horoscope, weekly insights, and yearly predictions to plan your life with cosmic guidance."
                tagText="Vedic Horoscope Forecast"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <HoroscopeSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
