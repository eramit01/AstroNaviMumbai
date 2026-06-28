import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import RudrabhishekSEO from "@/components/RudrabhishekSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Rudrabhishek Puja Booking | Expert Rudrabhishek Pandit",
    description: "Book an expert Vedic pandit for Rudrabhishek Puja and Maha Rudrabhishek. Experience the divine Shiv Abhishek Puja for health, peace, and spiritual growth.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/rudrabhishek-puja",
    },
    openGraph: {
        title: "Rudrabhishek Puja | Authentic Shiv Abhishek Booking",
        description: "Wash away life's obstacles and karmic doshas. Book an authentic pandit for a powerful Rudrabhishek Puja today.",
        url: "https://www.astrologer_in_navimumbai.in/rudrabhishek-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function RudrabhishekPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Rudrabhishek Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/rudrabhishek-puja",
        "url": "https://www.astrologer_in_navimumbai.in/rudrabhishek-puja",
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
            "reviewCount": "1340"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of Rudrabhishek Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Performing a Rudrabhishek Puja removes negative energy, cures chronic health issues, neutralizes planetary doshas, and brings immense spiritual peace and material prosperity."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between a standard Rudrabhishek and Maha Rudrabhishek?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A standard Rudrabhishek involves chanting the Rudra Suktam, whereas a Maha Rudrabhishek is an intensive ritual involving continuous, multiple recitations of the Namakam and Chamakam by several priests."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a special pandit for this puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, reciting the Rudra Suktam requires flawless Sanskrit pronunciation. Our Rudrabhishek pandits are highly trained Vedic scholars specifically qualified for this profound ritual."
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
                "name": "Rudrabhishek Puja",
                "item": "https://www.astrologer_in_navimumbai.in/rudrabhishek-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Rudrabhishek Puja</span></>}
                subtitle="Eradicate doshas and seek Lord Shiva's blessings. Book a highly trained Vedic pandit for an authentic Maha Rudrabhishek."
                tagText="Divine Shiva Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <RudrabhishekSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
