import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function FAQContact({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#0080ff] opacity-10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Still Have <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Questions?</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our support team is here to help
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Live Chat */}
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                        <p className="text-gray-400 mb-6">Get instant answers from our support team</p>
                        <button className="px-6 py-3 bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white rounded-full font-semibold hover:scale-105 transition-transform">
                            Start Chat
                        </button>
                    </div>

                    {/* Email */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-[#243c91]/20 to-transparent border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Mail className="w-8 h-8 text-gray-200" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-6">We'll respond within 2 hours</p>
                        <a href="mailto:support@niwts.com" className="inline-block px-6 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                            Send Email
                        </a>
                    </div>

                    {/* Phone */}
                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                        <p className="text-gray-400 mb-6">Available 24/7 for urgent issues</p>
                        <a href="tel:+1234567890" className="inline-block px-6 py-3 bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white rounded-full font-semibold hover:scale-105 transition-transform">
                            +1 (234) 567-890
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}