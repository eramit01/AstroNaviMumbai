import { CalendarPlus, ClipboardList, Video, Star } from "lucide-react";

const PROCESS_STEPS = [
    {
        icon: <CalendarPlus className="w-8 h-8 text-orange-500" />,
        title: "Book Appointment",
        description: "Choose a convenient time slot and book your session online or via call."
    },
    {
        icon: <ClipboardList className="w-8 h-8 text-orange-500" />,
        title: "Share Details",
        description: "Provide your birth details (date, time, and place) and specific questions."
    },
    {
        icon: <Video className="w-8 h-8 text-orange-500" />,
        title: "Consultation Session",
        description: "Connect via phone, video call, or in-person for an in-depth reading."
    },
    {
        icon: <Star className="w-8 h-8 text-orange-500" />,
        title: "Receive Guidance",
        description: "Get accurate predictions and practical, easy-to-follow remedies."
    }
];

export default function ConsultationProcess() {
    return (
        <section className="py-16 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-900 uppercase tracking-wide border-b-2 border-orange-500 inline-block pb-2">
                        Our Consultation Process
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium mt-4">
                        A simple and transparent process to get accurate astrological guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROCESS_STEPS.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (visible on lg screens) */}
                            {index < PROCESS_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-orange-200" />
                            )}
                            
                            <div className="flex flex-col items-center text-center relative z-10">
                                <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center mb-6 shadow-md border-4 border-white group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
