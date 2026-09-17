// ContactHero.jsx
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPageHero({ }) {
    return (
        <div className="relative min-h-[70vh] bg-[radial-gradient(150%_163%_at_50%_90.6%,#0a0712_25.6757%,#100b1d_38.2883%,#21104b_44.1441%,#243c91_50.7848%,#85dbf2_65.8643%)] overflow-hidden">
            {/* Animated gradient overlays */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#0080ff] opacity-20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/3 -left-48 w-[32rem] h-[32rem] bg-[#243c91] opacity-15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <Mail className="w-4 h-4 text-[#0080ff]" />
                        <span className="text-sm font-medium text-[#0080ff]">Get In Touch</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Let's <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our platform or need help finding an engineer? We're here to assist you
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 backdrop-blur-sm text-center hover:scale-105 transition-transform">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <Mail className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                        <a href="mailto:support@niwts.com" className="text-gray-400 hover:text-[#0080ff] transition-colors">
                            support@niwts.com
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-[#243c91]/10 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center hover:scale-105 transition-transform">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Phone className="w-7 h-7 text-gray-200" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                        <a href="tel:+2341234567890" className="text-gray-400 hover:text-[#0080ff] transition-colors">
                            +234 123 456 7890
                        </a>
                    </div>

                    <div className="bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 backdrop-blur-sm text-center hover:scale-105 transition-transform">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                        <p className="text-gray-400">
                            Lagos, Nigeria
                        </p>
                    </div>
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
    )
}