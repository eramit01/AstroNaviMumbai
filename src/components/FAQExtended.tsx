"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const EXTENDED_FAQS = [
    {
        question: "How do I find the best astrologer near me in Mumbai & Navi Mumbai?",
        answer: "To find the best astrologer near you, look for experienced professionals with verified reviews, decades of expertise, and personalized Vedic astrology solutions. Our 30+ years of trusted service make us a top choice."
    },
    {
        question: "Why are you considered the best astrologer in Mumbai and Navi Mumbai?",
        answer: "We are trusted by thousands due to our accurate predictions, high success rate in providing remedies, strict confidentiality, and 30+ years of deep expertise in Vedic astrology."
    },
    {
        question: "Do you offer online astrology consultation services?",
        answer: "Yes! We offer highly accurate online astrology consultations via phone, WhatsApp, and video calls. You can get expert guidance from the comfort of your home, anywhere in the world."
    },
    {
        question: "What is included in an online astrology consultation?",
        answer: "Our online sessions include an in-depth reading of your horoscope, identification of doshas, predictions regarding your specific questions, and practical remedies tailored to your life."
    },
    {
        question: "How accurate is kundli matching for marriage?",
        answer: "Kundli matching, based on traditional Vedic principles, is highly accurate in assessing compatibility, financial stability, and long-term harmony between prospective partners."
    },
    {
        question: "Can astrology provide an accurate marriage prediction?",
        answer: "Yes, by analyzing your 7th house and planetary dasha, we can accurately predict the timing of your marriage, the nature of your future spouse, and potential marital life."
    },
    {
        question: "What details are required for marriage or career predictions?",
        answer: "To generate your birth chart (Kundli), we need your exact Date of Birth, Time of Birth, and Place of Birth. These are essential for precise predictions."
    },
    {
        question: "Can career prediction astrology help me find the right job?",
        answer: "Absolutely. Career prediction astrology analyzes your 10th house to identify suitable professions, peak career growth periods, and remedies for job-related obstacles."
    },
    {
        question: "How do you resolve business problems using astrology?",
        answer: "We analyze your chart for financial blockages and suggest specific gemstones, pujas, or Vastu changes to attract prosperity, improve cash flow, and ensure business success."
    },
    {
        question: "Is Vedic astrology better than other forms of astrology?",
        answer: "Vedic astrology (Jyotish) is highly detailed and uses fixed planetary positions (Sidereal zodiac), making it globally renowned for its accuracy in predicting life events."
    },
    {
        question: "Can I consult an astrologer in Mumbai if I live abroad?",
        answer: "Yes, our online astrology consultation service is designed for international clients. We arrange sessions at mutually convenient times."
    },
    {
        question: "What are the common remedies suggested by the best astrologers?",
        answer: "We suggest practical and effective remedies such as wearing specific gemstones, chanting mantras, performing simple pujas, and making minor Vastu adjustments."
    },
    {
        question: "How long does a typical astrology consultation last?",
        answer: "A standard consultation lasts between 30 to 45 minutes, giving us ample time to analyze your chart and answer all your questions comprehensively."
    },
    {
        question: "Is my online astrology consultation private and confidential?",
        answer: "100%. We maintain strict confidentiality. Your personal details, birth data, and the problems you discuss are never shared with anyone."
    },
    {
        question: "Can Kundli Matching be done online?",
        answer: "Yes, you can share the birth details of both individuals via WhatsApp or email, and we will provide a detailed compatibility report and consultation over a call."
    },
    {
        question: "What should I do if my kundli does not match with my partner's?",
        answer: "If the Guna Milan score is low or there are specific doshas (like Mangal Dosha), we provide powerful astrological remedies and pujas to mitigate negative effects."
    },
    {
        question: "Do you provide guidance for love marriage vs arranged marriage?",
        answer: "Yes, your horoscope clearly indicates the possibility of love or arranged marriage. We help you navigate family obstacles and relationship challenges."
    },
    {
        question: "How soon can I expect results from astrological remedies?",
        answer: "While it depends on the severity of the planetary affliction, most of our clients start observing positive changes within 21 to 45 days of following the remedies sincerely."
    },
    {
        question: "Do you suggest expensive remedies?",
        answer: "No. We believe in accessible astrology. We suggest affordable and practical remedies that easily fit your lifestyle, focusing on mantras, charity, and simple rituals."
    },
    {
        question: "How can I book an appointment with you today?",
        answer: "You can easily book an appointment by calling us directly or messaging us on WhatsApp. Our contact details are available across this website."
    }
];

export default function FAQExtended() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-white relative" id="faq">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 opacity-50"></div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-900 uppercase tracking-wide inline-block border-b-2 border-orange-500 pb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 font-medium mt-2">
                        Answers to your questions about online astrology consultation, marriage, and career predictions.
                    </p>
                </div>

                <div className="space-y-4">
                    {EXTENDED_FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={cn(
                                "border rounded-xl px-5 transition-all duration-300 overflow-hidden",
                                openIndex === index
                                    ? "bg-orange-50 border-orange-300 shadow-md"
                                    : "bg-white border-orange-100 hover:border-orange-300 hover:bg-orange-50/50"
                            )}
                        >
                            <button
                                className="flex w-full items-center justify-between py-4 text-left font-semibold text-gray-800 transition-all"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={cn("text-base md:text-lg pr-4", openIndex === index ? "text-orange-800" : "text-gray-800")}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        "h-6 w-6 shrink-0 text-orange-500 transition-transform duration-300",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden text-sm md:text-base text-gray-600 transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-64 pb-4 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="pt-2 border-t border-orange-200 mt-2 leading-relaxed text-gray-700">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
