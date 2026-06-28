import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import UKPujaSEO from "@/components/UKPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for UK | Book Indian Hindu Priest Online",
    description: "Book an authentic Indian pandit online for the UK. We provide live video call pujas, including Satyanarayan Puja and Griha Pravesh for NRIs in London and across the UK.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-puja-uk",
    },
    openGraph: {
        title: "Online Puja UK | Authentic Hindu Priest Services",
        description: "Connect with certified Vedic scholars from India. Book live online pujas, Satyanarayan Kathas, and virtual rituals anywhere in the UK.",
        url: "https://www.astrologer_in_navimumbai.in/online-puja-uk",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function UKPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Online Pandit Services for UK",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-puja-uk",
        "url": "https://www.astrologer_in_navimumbai.in/online-puja-uk",
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
            "reviewCount": "1430"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I book an Indian pandit online in the UK?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Booking is simple. Through our platform, you can schedule a certified Vedic scholar based in India who will conduct your rituals via a seamless live video call to your home in the UK."
                }
            },
            {
                "@type": "Question",
                "name": "Do you perform Satyanarayan Puja online for UK residents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the Satyanarayan Puja is one of our most requested online services for UK clients. Our pandits guide you through the entire Vrat Katha interactively."
                }
            },
            {
                "@type": "Question",
                "name": "Can you arrange an online puja in London?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Since our services are completely virtual, we cater to clients in London, Birmingham, Manchester, and anywhere else across the UK, matching the rituals to your local timezone."
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
                "name": "Online Puja UK",
                "item": "https://www.astrologer_in_navimumbai.in/online-puja-uk"
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
                title={<>Online Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Services for UK</span></>}
                subtitle="Preserve your spiritual heritage. Book an authentic Indian priest online for Satyanarayan Puja and virtual rituals anywhere in the UK."
                tagText="UK Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <UKPujaSEO />
            <CTASection area="the UK" />
            <MobileCTABar />
        </div>
    );
}
