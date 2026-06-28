import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import DurgaPujaSEO from "@/components/DurgaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Durga Puja & Chandi Path | Book Expert Vedic Pandit",
    description: "Book a specialized Vedic pandit for Durga Puja, Navratri Puja, and Chandi Path. Invoke the supreme protection of Goddess Durga to defeat negativity and enemies.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/durga-puja",
    },
    openGraph: {
        title: "Durga Puja & Chandi Path | Powerful Protection Rituals",
        description: "Overcome black magic, enemies, and obstacles. Book an expert pandit for Durga Saptashati Path, Chandi Path, and Navratri Puja.",
        url: "https://www.astrologer_in_navimumbai.in/durga-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function DurgaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Durga Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/durga-puja",
        "url": "https://www.astrologer_in_navimumbai.in/durga-puja",
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
            "reviewCount": "1120"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is the Chandi Path performed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Chandi Path is the most powerful Vedic ritual to invoke Goddess Durga's fierce form. It is performed to destroy enemies, remove black magic, and clear severe karmic obstacles."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Durga Saptashati Path?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Durga Saptashati is a sacred text consisting of 700 verses describing the Goddess's victory over demons. Reciting this text invokes supreme protective energy for the household."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book a pandit for Navratri Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Navratri is the most auspicious time for worshipping Goddess Durga. We highly recommend booking our specialized pandits well in advance for Navratri Puja and Durga Havan."
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
                "name": "Durga Puja",
                "item": "https://www.astrologer_in_navimumbai.in/durga-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Durga Puja</span></>}
                subtitle="Invoke supreme divine protection. Book an expert Vedic pandit for Navratri Puja, Chandi Path, and Durga Havan."
                tagText="Shakti Worship Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <DurgaPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
