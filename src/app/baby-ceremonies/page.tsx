import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import BabyCeremoniesSEO from "@/components/BabyCeremoniesSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Naamkaran, Annaprashan & Mundan Puja | Expert Pandit Booking",
    description: "Book an expert Vedic pandit for your baby's naming ceremony, Annaprashan, and Mundan Puja. Ensure a bright and protected future for your child.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/baby-ceremonies",
    },
    openGraph: {
        title: "Baby Ceremonies | Naamkaran & Mundan Puja Booking",
        description: "Secure your child's spiritual foundation. Book a highly trained Vedic pandit for Naamkaran, Annaprashan, and Mundan ceremonies.",
        url: "https://www.astrologer_in_navimumbai.in/baby-ceremonies",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function BabyCeremoniesPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Baby Ceremonies Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/baby-ceremonies",
        "url": "https://www.astrologer_in_navimumbai.in/baby-ceremonies",
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
            "reviewCount": "1740"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is the Naamkaran Puja astrologically important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Naamkaran Puja (baby naming ceremony) involves selecting a name based on the child's birth Nakshatra. This ensures that the vibration of their name is in cosmic harmony with their birth chart, attracting lifelong success."
                }
            },
            {
                "@type": "Question",
                "name": "What is the significance of the Annaprashan Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Annaprashan marks the child's first intake of solid food. The puja invokes Goddess Annapurna's blessings to ensure the child enjoys robust health, a strong digestive system, and a prosperous life."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a specialized pandit for the Mundan Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Mundan Puja (Chudakarana) involves specific Vedic rituals to purify the child from past-life karmas. Our specialized baby mundan pandits calculate the exact auspicious muhurat and perform the necessary havan."
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
                "name": "Baby Ceremonies",
                "item": "https://www.astrologer_in_navimumbai.in/baby-ceremonies"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Baby Ceremonies</span></>}
                subtitle="Secure your child's spiritual foundation. Book an authentic Vedic pandit for Naamkaran, Annaprashan, and Mundan Puja."
                tagText="Vedic Samskaras"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <BabyCeremoniesSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
