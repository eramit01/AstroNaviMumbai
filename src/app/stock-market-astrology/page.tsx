import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import StockMarketAstrologySEO from "@/components/StockMarketAstrologySEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Stock Market Astrology | Speculative Trading & Investments",
    description: "Maximize your speculative gains with expert stock market astrology. Get precise timing for trading, investments, and commodity markets from top astrologers.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/stock-market-astrology",
    },
    openGraph: {
        title: "Stock Market Astrology | Trading & Investment Predictions",
        description: "Avoid trading losses. Use stock market astrology to understand market trends and time your investments perfectly for maximum financial gains.",
        url: "https://www.astrologer_in_navimumbai.in/stock-market-astrology",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function StockMarketAstrologyPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Stock Market Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/stock-market-astrology",
        "url": "https://www.astrologer_in_navimumbai.in/stock-market-astrology",
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
            "ratingValue": "4.7",
            "reviewCount": "640"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does stock market astrology work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stock market astrology analyzes the 5th and 8th houses in your Kundli, along with planetary transits, to predict whether speculative trading will bring you profits or losses."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology predict share market trends?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, financial astrologers use mundane astrology and planetary movements (like Jupiter and Saturn transits) to forecast broader market trends, bullish runs, and bearish corrections."
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
                "name": "Stock Market Astrology",
                "item": "https://www.astrologer_in_navimumbai.in/stock-market-astrology"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Stock Market</span> Astrology</>}
                subtitle="Time your investments and maximize your trading gains with precise stock market astrology predictions."
                tagText="Market Prediction Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <StockMarketAstrologySEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
