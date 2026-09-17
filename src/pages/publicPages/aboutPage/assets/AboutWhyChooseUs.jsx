import { Shield, Clock, DollarSign, Award, Users, Zap } from 'lucide-react'

export default function AboutWhyChooseUs({ }) {
    const features = [
        {
            icon: Shield,
            title: "Verified Experts",
            description: "Every engineer undergoes thorough background checks and certification verification before joining our platform."
        },
        {
            icon: DollarSign,
            title: "Transparent Pricing",
            description: "No hidden fees. See upfront quotes and compare prices from multiple engineers before booking."
        },
        {
            icon: Clock,
            title: "Fast Response",
            description: "Get connected with available engineers in minutes, not days. Most repairs completed within 24-48 hours."
        },
        {
            icon: Award,
            title: "Quality Guarantee",
            description: "All repairs come with warranty coverage. If you're not satisfied, we make it right."
        },
        {
            icon: Users,
            title: "Customer First",
            description: "24/7 customer support ready to help with any questions or concerns about your repair."
        },
        {
            icon: Zap,
            title: "Easy Process",
            description: "Book repairs in just a few clicks. Track progress in real-time and communicate directly with your engineer."
        }
    ]

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0080ff] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why Choose <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">NIWTS</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We're not just another repair platform. Here's what makes us different
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} data-aos="fade-up" data-aos-delay={index * 50} className="bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-8 hover:border-[#0080ff]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7 text-[#0080ff]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}