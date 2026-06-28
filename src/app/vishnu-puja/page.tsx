import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import VishnuPujaSEO from "@/components/VishnuPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Vishnu Puja Booking | Expert Pandit for Vishnu Sahasranama",
    description: "Book an expert Vedic pandit for Vishnu Puja, Narayan Puja, and Vishnu Sahasranama Path. Sustain wealth, ensure family peace, and overcome planetary doshas.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/vishnu-puja",
    },
    openGraph: {
        title: "Vishnu Puja & Narayan Puja | Vedic Pandit Booking",
        description: "Invite harmony, wealth, and spiritual peace. Book a specialized pandit for an authentic Vishnu Sahasranama Path and Narayan Puja.",
        url: "https://www.astrologer_in_navimumbai.in/vishnu-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function VishnuPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Vishnu Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/vishnu-puja",
        "url": "https://www.astrologer_in_navimumbai.in/vishnu-puja",
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
            "reviewCount": "1040"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of a Vishnu Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Performing a Vishnu Puja or Narayan Puja secures the blessings of the Sustainer of the Universe. It preserves your wealth, resolves family disputes, and brings deep spiritual peace."
                }
            },
            {
                "@type": "Question",
                "name": "Why is the Vishnu Sahasranama Path so powerful?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chanting the 1,000 names of Lord Vishnu elevates the spiritual vibration of any environment. It is also one of the most effective astrological remedies to strengthen a weak Mercury (Budh) in your birth chart."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a specialized pandit for the Sahasranama Path?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The power of the Vishnu Sahasranama lies entirely in the exact pronunciation (Swara) of the Sanskrit verses. Our Vedic pandits are highly trained to perform this recitation flawlessly."
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
                "name": "Vishnu Puja",
                "item": "https://www.astrologer_in_navimumbai.in/vishnu-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Vishnu Puja</span></>}
                subtitle="Sustain wealth, peace, and harmony. Book a specialized Vedic pandit for Narayan Puja and Vishnu Sahasranama Path."
                tagText="Divine Sustenance Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <VishnuPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
