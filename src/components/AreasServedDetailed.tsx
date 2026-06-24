import Link from "next/link";
import { MapPin } from "lucide-react";

const MUMBAI_AREAS = [
    { name: "Mumbai", slug: "mumbai" },
    { name: "Andheri", slug: "andheri" },
    { name: "Bandra", slug: "bandra" },
    { name: "Borivali", slug: "borivali" },
    { name: "Dadar", slug: "dadar" },
    { name: "Thane", slug: "thane" }
];

const NAVI_MUMBAI_AREAS = [
    { name: "Navi Mumbai", slug: "navi-mumbai" },
    { name: "Vashi", slug: "vashi" },
    { name: "Nerul", slug: "nerul" },
    { name: "Belapur", slug: "belapur" },
    { name: "Airoli", slug: "airoli" },
    { name: "Panvel", slug: "panvel" }
];

export default function AreasServedDetailed() {
    return (
        <section className="py-16 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        Areas We Serve
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium mt-2">
                        Find the best astrologer near you in Mumbai & Navi Mumbai
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Mumbai */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
                            <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                            Mumbai Region
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {MUMBAI_AREAS.map((area) => (
                                <Link
                                    key={area.slug}
                                    href={`/astrologer-in-${area.slug}`}
                                    className="text-gray-700 hover:text-orange-600 font-medium text-sm md:text-base flex items-center group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 group-hover:scale-150 transition-transform" />
                                    {area.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navi Mumbai */}
                    <div className="bg-white rounded-xl shadow-md p-6 border border-orange-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center border-b pb-3">
                            <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                            Navi Mumbai Region
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {NAVI_MUMBAI_AREAS.map((area) => (
                                <Link
                                    key={area.slug}
                                    href={`/astrologer-in-${area.slug}`}
                                    className="text-gray-700 hover:text-orange-600 font-medium text-sm md:text-base flex items-center group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2 group-hover:scale-150 transition-transform" />
                                    {area.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
