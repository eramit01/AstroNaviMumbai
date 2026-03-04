import { Star, Award, Users, CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Best Astrologer in Navi Mumbai",
    description: "Learn more about the best astrologer in Navi Mumbai with over 30 years of experience in Vedic Astrology, Vastu Shastra, and Kundli Matching.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center justify-center p-3 bg-orange-100/50 rounded-full mb-6">
                        <Sparkles className="h-6 w-6 text-orange-500 mr-2" />
                        <span className="text-orange-900 font-semibold tracking-wide uppercase text-sm">Trusted by Thousands</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-orange-950 tracking-tight leading-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                        With over 30 years of dedicated practice, we successfully guide individuals through life's challenges using the ancient wisdom of Vedic Astrology.
                    </p>
                </div>
            </section>

            {/* Stats / Key Features Section */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-orange-100 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)] transition-all duration-300 text-center group">
                            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                <Award className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Expert Guidance</h3>
                            <p className="text-gray-600 leading-relaxed">Certified astrologer with deep knowledge of planets, transit movements, and horoscopes.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-orange-100 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)] transition-all duration-300 text-center group">
                            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                <Users className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">5000+ Clients</h3>
                            <p className="text-gray-600 leading-relaxed">Trusted by families across Navi Mumbai and Maharashtra for generation-spanning advice.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-orange-100 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)] transition-all duration-300 text-center group">
                            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                                <HeartHandshake className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Genuine Remedies</h3>
                            <p className="text-gray-600 leading-relaxed">Practical and highly effective solutions without the burden of unnecessary or costly rituals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-orange-900">Our Mission</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Our mission is to bring peace, clarity, and direction to people's lives. We believe that astrology is not just about prediction, but about proactive guidance. By understanding the planetary influences unique to your chart, we empower you to make informed decisions for your career, relationships, and personal growth journey.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-orange-900 text-center">Why Navi Mumbai Chooses Us</h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>
                    
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-orange-100">
                        <ul className="space-y-6">
                            {[
                                "Detailed and completely accurate Horoscope Analysis.",
                                "Specific, tailored solutions for Job stability and Business growth.",
                                <span key="match">Expertise in <Link href="/services#kundli-matching" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold border-b border-orange-200 hover:border-orange-500">Match Making and Marriage Consultation</Link></span>,
                                <span key="vastu"><Link href="/services#vastu-specialist" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold border-b border-orange-200 hover:border-orange-500">Vastu Shastra Consultation</Link> for Homes and Offices</span>,
                                "100% complete confidentiality and privacy guaranteed for every client."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-lg text-gray-700">
                                    <div className="mr-4 mt-1 bg-orange-100 p-1 rounded-full shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
