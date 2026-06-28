"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { getWhatsAppMessage } from "@/lib/utils";
import WhatsAppIcon from "./WhatsAppIcon";

const SLIDES = [
    {
        id: 1,
        headline: "Marriage Specialist with 30+ Years of Experience",
        subtext: "Love Marriage • Late Marriage • Kundali Matching",
        image: "/HeroImg/1.png",
        cta1: { text: "Call Now", icon: Phone, href: `tel:${CONTACT_INFO.phone}` },
        cta2: { text: "WhatsApp Consultation", icon: WhatsAppIcon, href: "WA_LINK" }
    },
    {
        id: 2,
        headline: "Child Birth Guidance & Baby Name Suggestion",
        subtext: "Kundli & Numerology Based Guidance",
        image: "/HeroImg/2.png",
        cta1: { text: "Talk to Astrologer", icon: Phone, href: `tel:${CONTACT_INFO.phone}` },
        cta2: { text: "Book Appointment", icon: Calendar, href: "/book-appointment" }
    },
    {
        id: 3,
        headline: "Business Growth & Career Problem Solutions",
        subtext: "Accurate Astrology-Based Guidance",
        image: "/HeroImg/3.png",
        cta1: { text: "Call for Guidance", icon: Phone, href: `tel:${CONTACT_INFO.phone}` },
        cta2: { text: "WhatsApp Now", icon: WhatsAppIcon, href: "WA_LINK" }
    }
];

export default function HeroSlider() {
    const pathname = usePathname();
    const waLink = getWhatsAppMessage(pathname, CONTACT_INFO.whatsapp);

    const dynamicSlides = SLIDES.map(slide => {
        if (slide.cta2 && slide.cta2.href === "WA_LINK") {
            return { ...slide, cta2: { ...slide.cta2, href: waLink } };
        }
        return slide;
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % dynamicSlides.length);
    }, [dynamicSlides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + dynamicSlides.length) % dynamicSlides.length);
    }, [dynamicSlides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Auto-advance slides
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section
            className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] lg:aspect-[24/7] xl:aspect-[3/1] overflow-hidden bg-gray-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {dynamicSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        {/* Note: In a production app ensure these images are in public/ folder. 
                 Using standard img tag here for simplicity if next/image config is strict with artifact paths, 
                 but Next/Image is preferred. We will use a wrapper div for relative sizing. */}
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.headline}
                                fill
                                priority={index === 0}
                                className="object-fill sm:object-cover md:object-contain lg:object-fill"
                                sizes="100vw"
                            />
                            {/* SEO / Accessibility Text */}
                            <div className="sr-only">
                                <h2>{slide.headline}</h2>
                                <p>{slide.subtext}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Overlay - Removed as per request */}
                    {/* <div className="absolute inset-0 z-20 flex items-center"> ... </div> */}
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-30 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-30 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                {dynamicSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'w-8 bg-orange-500'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
