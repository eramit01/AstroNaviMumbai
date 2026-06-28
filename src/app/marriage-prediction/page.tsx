import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import MarriagePredictionSEO from "@/components/MarriagePredictionSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Accurate Marriage Prediction Astrology | When Will I Get Married?",
    description: "Discover your marriage timing with expert marriage prediction astrology. Get insights into love and arranged marriage prediction from top astrologers.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/marriage-prediction",
    },
    openGraph: {
        title: "Marriage Prediction Astrology | Love & Arranged Marriage",
        description: "Find out when you will get married. Get highly accurate arranged and love marriage prediction from Mumbai's top astrologer.",
        url: "https://www.astrologer_in_navimumbai.in/marriage-prediction",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function MarriagePredictionPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Marriage Prediction Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/marriage-prediction",
        "url": "https://www.astrologer_in_navimumbai.in/marriage-prediction",
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
            "reviewCount": "1120"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When will I get married according to astrology?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timing of marriage is determined by analyzing the 7th house, planetary dashas, and transits (Gochara) of Jupiter and Venus in your kundli."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology predict if I will have a love or arranged marriage?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by studying the connection between the 5th house (love) and the 7th house (marriage), an expert astrologer can predict the likelihood of love vs. arranged marriage."
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
                "name": "Marriage Prediction",
                "item": "https://www.astrologer_in_navimumbai.in/marriage-prediction"
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
                title={<>Accurate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Marriage Prediction</span> Astrology</>}
                subtitle="Find out when you will get married. Get expert insights into love and arranged marriage prediction."
                tagText="Marriage Prediction Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <MarriagePredictionSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
