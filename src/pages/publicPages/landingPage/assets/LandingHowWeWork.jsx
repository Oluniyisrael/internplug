import { Search, UserCheck, Wrench, CheckCircle } from 'lucide-react'

export default function LandingHowWeWork({ howItWorksRef }) {
    const steps = [
        {
            icon: Search,
            title: "Find Engineers",
            description: "Browse verified hardware engineers in your area specialized in laptop, phone, and PC repairs",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
            delay: 100
        },
        {
            icon: UserCheck,
            title: "Connect & Book",
            description: "Review profiles, ratings, and pricing. Schedule a repair at your convenience",
            image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
            delay: 200
        },
        {
            icon: Wrench,
            title: "Get Repaired",
            description: "Expert technicians fix your device with quality parts and professional service",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
            delay: 300
        },
        {
            icon: CheckCircle,
            title: "All Done",
            description: "Receive your repaired device with warranty coverage and satisfaction guarantee",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
            delay: 400
        }
    ]

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden" ref={howItWorksRef} id='howItWorks'>
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-[#0080ff] opacity-5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-0 w-[40rem] h-[40rem] bg-[#243c91] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-20" data-aos="fade-up" >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <Wrench className="w-4 h-4 text-[#0080ff]" />
                        <span className="text-sm font-medium text-[#0080ff]">How It Works</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get Your Device <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Fixed</span> in 4 Easy Steps
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        From finding the right engineer to getting your device back in perfect condition, we make repairs simple and stress-free.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-24">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isEven = index % 2 === 0
                        
                        return (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Image side */}
                                <div data-aos={isEven ? "fade-right" : "fade-left"} data-aos-delay={step.delay} className={`${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="relative group">
                                        {/* Glow effect */}
                                        <div className="absolute -inset-4 bg-gradient-to-r from-[#0080ff]/20 to-[#243c91]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        
                                        {/* Image container */}
                                        <div className="relative overflow-hidden rounded-2xl border border-[#0080ff]/20 shadow-2xl">
                                            <img src={step.image} alt={step.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                                            
                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0712]/80 via-transparent to-transparent" />
                                            
                                            {/* Step number */}
                                            <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center shadow-lg shadow-[#0080ff]/50">
                                                <span className="text-2xl font-bold text-white">{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div data-aos={isEven ? "fade-left" : "fade-right"} data-aos-delay={step.delay} className={`${!isEven ? 'lg:order-1' : ''}`}>
                                    <div className="space-y-6">
                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 flex items-center justify-center backdrop-blur-sm">
                                            <Icon className="w-8 h-8 text-[#0080ff]" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-lg text-gray-300 leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Progress indicator */}
                                        <div className="flex items-center gap-2 pt-4">
                                            {steps.map((_, i) => (
                                                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i <= index ? 'w-12 bg-gradient-to-r from-[#0080ff] to-[#0066cc]' : 'w-8 bg-white/20'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA Section */}
                <div data-aos="fade-up" data-aos-delay="500" className="mt-24 text-center bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-3xl p-12 backdrop-blur-sm">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Fix Your Device?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                        Join thousands of satisfied customers who trust NIWTS for their device repairs
                    </p>
                    <button className="group bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#0080ff]/30 hover:shadow-xl hover:shadow-[#0080ff]/40 hover:scale-105 inline-flex items-center gap-2">
                        Find an Engineer Now
                        <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    )
}