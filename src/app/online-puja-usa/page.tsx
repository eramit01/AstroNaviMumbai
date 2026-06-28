import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import USAPujaSEO from "@/components/USAPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for USA | Virtual Griha Pravesh & Puja Services",
    description: "Book an authentic Indian pandit for USA online. We offer Virtual Griha Pravesh, Satyanarayan Puja, Rudrabhishek, and Astrology consultations for Indians in America.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-puja-usa",
    },
    openGraph: {
        title: "Online Puja USA | Authentic Hindu Priest Services",
        description: "Connect directly with certified Vedic scholars in India. Book live online pujas and astrology consultations from anywhere in the USA.",
        url: "https://www.astrologer_in_navimumbai.in/online-puja-usa",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function USAPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Online Pandit Services for USA",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-puja-usa",
        "url": "https://www.astrologer_in_navimumbai.in/online-puja-usa",
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
            "reviewCount": "1950"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I perform a Virtual Griha Pravesh in the USA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our expert pandits in India connect with you via a live video call. They guide you through the setup, help you take the Sankalp for your new home in the USA, and chant all the necessary purification mantras while you follow along."
                }
            },
            {
                "@type": "Question",
                "name": "Can I book a Satyanarayan Puja or Rudrabhishek online from America?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We specialize in conducting detailed rituals like Satyanarayan Puja and Rudrabhishek for our NRI clients in the USA, ensuring the exact same spiritual benefits as a physical ceremony."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide astrology consultations for clients in the USA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Alongside puja services, our verified astrologers provide in-depth online astrology consultations tailored to your birth chart, helping you with career, marriage, and muhurat calculations."
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
                "name": "Online Puja USA",
                "item": "https://www.astrologer_in_navimumbai.in/online-puja-usa"
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
                title={<>Online Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Services for USA</span></>}
                subtitle="Bridging the spiritual gap. Book an authentic Indian pandit for Virtual Griha Pravesh, Rudrabhishek, and online pujas across America."
                tagText="USA Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <USAPujaSEO />
            <CTASection area="the USA" />
            <MobileCTABar />
        </div>
    );
}
