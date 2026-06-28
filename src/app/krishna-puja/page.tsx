import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import KrishnaPujaSEO from "@/components/KrishnaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Krishna Puja Booking | Expert Pandit for Bal Gopal & Janmashtami Puja",
    description: "Book an expert Vedic pandit for Krishna Puja, Bal Gopal Puja for progeny, and auspicious Janmashtami Puja. Bring divine joy and peace to your family.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/krishna-puja",
    },
    openGraph: {
        title: "Krishna Puja | Authentic Bal Gopal & Janmashtami Rituals",
        description: "Seek blessings for a happy marriage and children. Book a highly trained pandit for a traditional Krishna and Bal Gopal Puja.",
        url: "https://www.astrologer_in_navimumbai.in/krishna-puja",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function KrishnaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Krishna Puja Pandit in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/krishna-puja",
        "url": "https://www.astrologer_in_navimumbai.in/krishna-puja",
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
            "reviewCount": "1090"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the benefits of performing a Krishna Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Krishna Puja brings immense peace, resolves marital and family disputes, and invites joy and prosperity into the household."
                }
            },
            {
                "@type": "Question",
                "name": "Why is the Bal Gopal Puja performed?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Bal Gopal Puja (worshipping the infant form of Lord Krishna) is specifically performed by couples seeking the blessings of a healthy, intelligent child and to overcome obstacles related to progeny."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide pandits for midnight Janmashtami Puja?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide highly trained Vedic pandits who specialize in the strict rituals required for the auspicious midnight Janmashtami Puja."
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
                "name": "Krishna Puja",
                "item": "https://www.astrologer_in_navimumbai.in/krishna-puja"
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
                title={<>Book Pandit for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Krishna Puja</span></>}
                subtitle="Invite divine love and joy. Book an authentic Vedic pandit for Krishna Puja, Janmashtami, and Bal Gopal Puja for progeny."
                tagText="Divine Peace & Progeny Rituals"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <KrishnaPujaSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
