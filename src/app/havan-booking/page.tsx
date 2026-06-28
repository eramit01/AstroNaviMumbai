import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import HavanSEO from "@/components/HavanSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Havan Booking Online | Expert Pandits for Home & Online Havan",
    description: "Book expert Vedic pandits for Home Havan, Vastu Havan, Navgraha Havan, and Sudarshan Havan. We also offer highly authentic Online Havan services.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/havan-booking",
    },
    openGraph: {
        title: "Havan Booking | Authentic Fire Ceremonies",
        description: "Purify your space and clear karmic doshas. Book a highly trained pandit for Durga Havan, Shanti Havan, and Ganesh Havan today.",
        url: "https://www.astrologer_in_navimumbai.in/havan-booking",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function HavanBookingPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Havan Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/havan-booking",
        "url": "https://www.astrologer_in_navimumbai.in/havan-booking",
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
            "reviewCount": "1890"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of a Home Havan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Home Havan purifies the environment by burning sacred herbs and woods. The smoke eliminates negative energies, bacteria, and stagnant vibrations, replacing them with profound spiritual peace and positivity."
                }
            },
            {
                "@type": "Question",
                "name": "How does an Online Havan work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For clients unable to host a physical ceremony, our expert pandits perform the complete Havan on your behalf via a live video link. You participate by chanting along and taking sankalp (vows) from your own location."
                }
            },
            {
                "@type": "Question",
                "name": "When should I perform a Sudarshan or Durga Havan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "These are fierce, highly protective rituals. They are specifically recommended when you are facing intense sudden obstacles, severe legal disputes, hidden enemies, or the effects of black magic."
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
                "name": "Havan Booking",
                "item": "https://www.astrologer_in_navimumbai.in/havan-booking"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Havan Rituals</span></>}
                subtitle="Purify your space and conquer obstacles. Book an authentic Vedic pandit for Home Havan, Navgraha Havan, and Sudarshan Havan."
                tagText="Sacred Fire Ceremonies"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <HavanSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
