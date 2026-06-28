import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import NavgrahaPujaSEO from "@/components/NavgrahaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Navgraha Shanti Puja | Expert Navgraha Pandit Booking",
    description: "Neutralize negative planetary effects with an authentic Navgraha Shanti Puja. Book an expert Navgraha pandit for dosh nivaran and Navgraha havan.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/navgraha-puja",
    },
    openGraph: {
        title: "Navgraha Puja | Planetary Dosh Nivaran",
        description: "Facing sudden obstacles? Book an experienced pandit for a powerful Navgraha Shanti Puja and Havan to appease all nine planets.",
        url: "https://www.astrologer_in_navimumbai.in/navgraha-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function NavgrahaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Navgraha Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/navgraha-puja",
        "url": "https://www.astrologer_in_navimumbai.in/navgraha-puja",
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
            "reviewCount": "1080"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the purpose of Navgraha Shanti Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Navgraha Shanti Puja is performed to pacify malefic planetary influences in your birth chart, thereby removing obstacles in career, health, and marriage."
                }
            },
            {
                "@type": "Question",
                "name": "Is the Navgraha Havan necessary?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a Navgraha Havan is a critical component of dosh nivaran. It ensures that the specific offerings for each of the nine planets reach the cosmic deities through the sacred fire."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need an expert pandit for this puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Appeasing nine different planetary deities requires precise Vedic mantras and specific samagri that only a highly trained Navgraha Pandit can accurately provide."
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
                "name": "Navgraha Puja",
                "item": "https://www.astrologer_in_navimumbai.in/navgraha-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Navgraha Puja</span></>}
                subtitle="Remove planetary obstacles from your life. Book a learned Vedic pandit for Navgraha Shanti, Dosh Nivaran, and Havan."
                tagText="Astrological Remedy Specialist"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <NavgrahaPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
