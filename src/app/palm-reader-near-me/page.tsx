import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import PalmReaderSEO from "@/components/PalmReaderSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Palm Reader Near Me | Expert Hand Reading & Palmistry",
    description: "Looking for a palm reader near you? Get highly accurate hand reading from our palmistry expert. Book a professional palm reading consultation today.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/palm-reader-near-me",
    },
    openGraph: {
        title: "Best Palm Reader Near Me | Palmistry Expert",
        description: "Discover your destiny. Get accurate hand reading and insights into your career, health, and love life from the top palmistry expert near you.",
        url: "https://www.astrologer_in_navimumbai.in/palm-reader-near-me",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function PalmReaderNearMePage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Expert Palm Reader in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/palm-reader-near-me",
        "url": "https://www.astrologer_in_navimumbai.in/palm-reader-near-me",
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
            "ratingValue": "4.9",
            "reviewCount": "810"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How accurate is hand reading?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When performed by a genuine palmistry expert, hand reading is highly accurate. The lines on your palm reflect your psychological state, physical health, and life trajectory."
                }
            },
            {
                "@type": "Question",
                "name": "What can I expect in a palm reading consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A consultation involves a detailed analysis of your major and minor palm lines, mounts, and hand shape, offering precise predictions regarding your career, love life, and health."
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
                "name": "Palm Reader Near Me",
                "item": "https://www.astrologer_in_navimumbai.in/palm-reader-near-me"
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
                title={<>Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Palm Reader</span> Near You</>}
                subtitle="Discover your true destiny. Get highly accurate hand reading and predictions from our certified palmistry expert."
                tagText="Master Palmistry Expert"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <PalmReaderSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
