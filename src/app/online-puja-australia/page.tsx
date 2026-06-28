import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import AustraliaPujaSEO from "@/components/AustraliaPujaSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Online Pandit for Australia | Indian Hindu Priest Online",
    description: "Book an authentic Indian pandit online for Australia. We provide highly trained Vedic scholars for live video call pujas in Sydney, Melbourne, and across Australia.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/online-puja-australia",
    },
    openGraph: {
        title: "Online Puja Australia | Authentic Hindu Priest Services",
        description: "Experience flawless virtual rituals. Book live online pujas and connect with certified Indian priests perfectly synced to Australian timezones.",
        url: "https://www.astrologer_in_navimumbai.in/online-puja-australia",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function AustraliaPujaPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Online Pandit Services for Australia",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/online-puja-australia",
        "url": "https://www.astrologer_in_navimumbai.in/online-puja-australia",
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
            "reviewCount": "1670"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I book an online puja in Sydney or Melbourne?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our platform provides seamless virtual puja services for clients in Sydney, Melbourne, Brisbane, and all across Australia, utilizing high-definition live video links."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle the timezone difference for Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our expert Vedic astrologers calculate the precise auspicious muhurat based strictly on your local Australian time. Our pandits in India then adjust their schedules to perform the ritual at that exact moment for maximum efficacy."
                }
            },
            {
                "@type": "Question",
                "name": "Are the Indian priests fully certified?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. When you book a Hindu priest online for Australia through us, you are guaranteed a highly trained, traditional Vedic scholar who ensures flawless scriptural accuracy in every mantra."
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
                "name": "Online Puja Australia",
                "item": "https://www.astrologer_in_navimumbai.in/online-puja-australia"
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
                title={<>Online Pandit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Services for Australia</span></>}
                subtitle="Stay spiritually connected to your roots. Book an authentic Indian priest online for live virtual pujas perfectly synced to Australian timezones."
                tagText="Australia Virtual Hindu Priest"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <AustraliaPujaSEO />
            <CTASection area="Australia" />
            <MobileCTABar />
        </div>
    );
}
