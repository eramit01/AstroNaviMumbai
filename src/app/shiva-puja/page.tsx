import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import ShivaPujaSEO from "@/components/ShivaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Shiv Puja Booking | Book Pandit for Shiv Abhishek",
    description: "Book an expert Vedic pandit for Shiv Puja, Shiv Abhishek, and Sawan Shiv Puja. Attain supreme spiritual peace and overcome karmic doshas.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/shiva-puja",
    },
    openGraph: {
        title: "Shiv Puja | Authentic Pradosh & Sawan Puja Booking",
        description: "Experience divine grace and remove life's obstacles. Book a highly trained pandit for a powerful Shiv Abhishek and Pradosh Puja.",
        url: "https://www.astrologer_in_navimumbai.in/shiva-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function ShivaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Shiv Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/shiva-puja",
        "url": "https://www.astrologer_in_navimumbai.in/shiva-puja",
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
            "reviewCount": "1460"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the spiritual benefits of a Shiv Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Performing a Shiv Puja removes karmic debts, grants deep mental peace, cures physical ailments, and helps the devotee attain higher spiritual consciousness (Moksha)."
                }
            },
            {
                "@type": "Question",
                "name": "Why is the Pradosh Puja highly recommended?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Pradosh Kaal (twilight of the 13th lunar day) is considered the most auspicious time for Lord Shiva's worship. Pujas performed during this window yield immediate and magnified results."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide specialized pandits for Sawan Shiv Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, during the holy month of Shravan, we provide expert Vedic pandits specifically trained to conduct extensive Shiv Abhishek and Pujas with strict adherence to traditional scriptures."
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
                "name": "Shiva Puja",
                "item": "https://www.astrologer_in_navimumbai.in/shiva-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Shiv Puja</span></>}
                subtitle="Experience supreme peace and spiritual liberation. Book an authentic Vedic pandit for Shiv Abhishek, Pradosh Puja, and Sawan rituals."
                tagText="Divine Shiva Worship"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <ShivaPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
