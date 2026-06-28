import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import NumerologistSEO from "@/components/NumerologistSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Best Numerologist Near Me | Expert Numerology Consultation",
    description: "Looking for the best numerologist near you? Get an expert numerology consultation to align your numbers for success in career, health, and relationships.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/numerologist-near-me",
    },
    openGraph: {
        title: "Best Numerologist Near Me | Numerology Consultation",
        description: "Unlock your true potential. Consult the top numerologist near you for deep insights into your life path, destiny, and lucky numbers.",
        url: "https://www.astrologer_in_navimumbai.in/numerologist-near-me",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function NumerologistNearMePage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Best Numerologist in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/numerologist-near-me",
        "url": "https://www.astrologer_in_navimumbai.in/numerologist-near-me",
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
            "reviewCount": "890"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I find the best numerologist near me?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for an experienced numerologist with a strong track record of successful client transformations. Our expert provides highly accurate numerology consultations based on Chaldean and Pythagorean systems."
                }
            },
            {
                "@type": "Question",
                "name": "What happens during a numerology consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "During a numerology consultation, the expert calculates your core numbers (Life Path, Destiny, Soul Urge) to reveal your strengths and prescribes actionable remedies to overcome life's obstacles."
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
                "name": "Numerologist Near Me",
                "item": "https://www.astrologer_in_navimumbai.in/numerologist-near-me"
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
                title={<>Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Numerologist</span> Near You</>}
                subtitle="Book a professional numerology consultation to align your numbers with success, health, and prosperity."
                tagText="Expert Numerologist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <NumerologistSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
