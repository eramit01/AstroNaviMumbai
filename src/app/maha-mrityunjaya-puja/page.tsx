import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import MahaMrityunjayaSEO from "@/components/MahaMrityunjayaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Maha Mrityunjaya Puja & Jaap | Book Expert Vedic Pandit",
    description: "Book an expert Vedic pandit for Maha Mrityunjaya Puja, Jaap, and Havan. Seek Lord Shiva's divine protection for longevity, healing, and overcoming severe illnesses.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/maha-mrityunjaya-puja",
    },
    openGraph: {
        title: "Maha Mrityunjaya Puja | Divine Healing Ritual",
        description: "Avert health crises and accidents. Book our highly trained pandits for an authentic Maha Mrityunjaya Jaap and Havan today.",
        url: "https://www.astrologer_in_navimumbai.in/maha-mrityunjaya-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function MahaMrityunjayaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Maha Mrityunjaya Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/maha-mrityunjaya-puja",
        "url": "https://www.astrologer_in_navimumbai.in/maha-mrityunjaya-puja",
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
            "reviewCount": "980"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the Maha Mrityunjaya Puja performed for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is an extremely powerful healing ritual dedicated to Lord Shiva, performed to cure chronic illnesses, avert untimely accidents, and secure longevity."
                }
            },
            {
                "@type": "Question",
                "name": "How is the Mrityunjaya Mantra Jaap conducted?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Jaap involves the continuous chanting of the Maha Mrityunjaya mantra by specialized Vedic scholars over a predetermined number of days to generate protective vibrations."
                }
            },
            {
                "@type": "Question",
                "name": "Is the Mrityunjaya Havan included in the booking?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, every complete Maha Mrityunjaya Jaap culminates in a Havan. Our expert pandit performs this fire ceremony to seal the energetic benefits of the Jaap."
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
                "name": "Maha Mrityunjaya Puja",
                "item": "https://www.astrologer_in_navimumbai.in/maha-mrityunjaya-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Maha Mrityunjaya Puja</span></>}
                subtitle="Seek the ultimate divine protection. Book our expert Vedic pandits for an authentic Maha Mrityunjaya Jaap and Havan."
                tagText="Divine Healing Ritual"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <MahaMrityunjayaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
