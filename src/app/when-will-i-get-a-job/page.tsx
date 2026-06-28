import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import WhenWillIGetAJobSEO from "@/components/WhenWillIGetAJobSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "When Will I Get a Job? | Accurate Career & Job Predictions",
    description: "Tired of job rejections? Find out exactly when will you get a job with precise astrology predictions. Overcome career obstacles with expert Vedic remedies.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/when-will-i-get-a-job",
    },
    openGraph: {
        title: "When Will I Get a Job? | Job Prediction Astrology",
        description: "Unlock your professional destiny. Discover the exact timeframe for your employment and get remedies to clear interview blockages.",
        url: "https://www.astrologer_in_navimumbai.in/when-will-i-get-a-job",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function WhenWillIGetAJobPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Career Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/when-will-i-get-a-job",
        "url": "https://www.astrologer_in_navimumbai.in/when-will-i-get-a-job",
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
            "ratingValue": "4.8",
            "reviewCount": "920"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can an astrologer tell me when I will get a job?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, by analyzing your 10th house, current Dashas, and planetary transits, an expert astrologer can give you a very accurate timeframe for securing a job."
                }
            },
            {
                "@type": "Question",
                "name": "Why am I facing so many interview rejections?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rejections often happen due to negative planetary transits or afflicted houses in your Kundli. Astrological remedies can clear these blockages and align your energy with success."
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
                "name": "When Will I Get A Job",
                "item": "https://www.astrologer_in_navimumbai.in/when-will-i-get-a-job"
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
                title={<>Find Out: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">When Will I Get a Job?</span></>}
                subtitle="Stop stressing over unemployment. Get precise job predictions and powerful remedies to secure your dream career."
                tagText="Career & Job Prediction"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <WhenWillIGetAJobSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
