import { Metadata } from "next";
import AstrologerHero from "@/components/AstrologerHero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasServedDetailed from "@/components/AreasServedDetailed";
import Testimonials from "@/components/Testimonials";
import ConsultationProcess from "@/components/ConsultationProcess";
import FAQExtended from "@/components/FAQExtended";
import JobPredictionSEO from "@/components/JobPredictionSEO";
import CTASection from "@/components/CTASection";
import MobileCTABar from "@/components/MobileCTABar";

export const metadata: Metadata = {
    title: "Accurate Job Prediction Astrology | Government Job Astrology",
    description: "Get precise job prediction astrology insights. Find out when you will get a job and explore your chances with expert government job astrology.",
    alternates: {
        canonical: "https://www.astrologer_in_navimumbai.in/job-prediction",
    },
    openGraph: {
        title: "Job Prediction Astrology | Government Job Chances",
        description: "Unemployed or facing career issues? Find out exactly when you will get a job with highly accurate job prediction and government job astrology.",
        url: "https://www.astrologer_in_navimumbai.in/job-prediction",
        siteName: "Astrologer in Navi Mumbai",
        locale: "en_IN",
        type: "website",
    },
};

export default function JobPredictionPage() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Job Prediction Astrologer in Navi Mumbai",
        "image": "https://www.astrologer_in_navimumbai.in/Logos/Fav.png",
        "@id": "https://www.astrologer_in_navimumbai.in/job-prediction",
        "url": "https://www.astrologer_in_navimumbai.in/job-prediction",
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
            "reviewCount": "1040"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "When will I get a job according to astrology?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By analyzing the transits of Jupiter and Saturn, along with your current Dasha, an astrologer can predict the exact timeframe when you will land a job."
                }
            },
            {
                "@type": "Question",
                "name": "Can astrology predict if I will get a government job?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, government job astrology examines the strength of the Sun, Mars, and the 10th house in your Kundli to predict your chances of securing a government role."
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
                "name": "Job Prediction",
                "item": "https://www.astrologer_in_navimumbai.in/job-prediction"
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
                title={<>Accurate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 inline-block">Job Prediction</span> Astrology</>}
                subtitle="Wondering when you will get a job? Get precise predictions and expert guidance for private and government job astrology."
                tagText="Job & Career Prediction"
            />
            <AboutSection />
            <Services />
            <WhyChooseUs />
            <AreasServedDetailed />
            <Testimonials />
            <ConsultationProcess />
            <FAQExtended />
            <JobPredictionSEO />
            <CTASection />
            <MobileCTABar />
        </div>
    );
}
