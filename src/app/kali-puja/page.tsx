import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import KaliPujaSEO from "@/components/KaliPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Maa Kali Puja Booking | Powerful Kali Havan & Mantra Jaap",
    description: "Destroy enemies and negative energies with a powerful Maa Kali Puja. Book our expert pandits for an authentic Kali Havan and Kali Mantra Jaap.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/kali-puja",
    },
    openGraph: {
        title: "Kali Puja | Supreme Protection from Negative Energies",
        description: "Overcome legal disputes, enemies, and black magic. Book a highly initiated pandit for an intense Maa Kali Puja and Havan.",
        url: "https://www.astrologer_in_navimumbai.in/kali-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function KaliPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kali Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/kali-puja",
        "url": "https://www.astrologer_in_navimumbai.in/kali-puja",
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
                "name": "What are the benefits of performing a Kali Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Kali Puja is primarily performed to seek ultimate protection against evil forces, black magic, enemies, and to ensure victory in prolonged legal or personal disputes."
                }
            },
            {
                "@type": "Question",
                "name": "Is the Kali Mantra Jaap safe to perform at home?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tantric and intense Vedic Kali mantras are extremely powerful and generate high energy. It is strongly advised to have an initiated, expert pandit perform the jaap on your behalf to ensure the energy is channeled positively."
                }
            },
            {
                "@type": "Question",
                "name": "When is the best time for a Kali Havan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The most potent times for a Kali Havan are during Amavasya (New Moon), midnight hours, or specific astrological muhurats calculated by an expert astrologer."
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
                "name": "Kali Puja",
                "item": "https://www.astrologer_in_navimumbai.in/kali-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Maa Kali Puja</span></>}
                subtitle="Secure absolute protection from negativity and enemies. Book a specialized pandit for an intense Kali Puja and Havan."
                tagText="Fierce Protective Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <KaliPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
