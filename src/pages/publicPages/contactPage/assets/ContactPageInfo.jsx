// ContactInfo.jsx
import { Clock, Mail, Phone, MessageCircle } from 'lucide-react'

export default function ContactInfo({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-[#0080ff] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Other Ways to <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Reach Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-[#0080ff]/20 flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-[#0080ff]" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                        <p className="text-gray-400 text-sm">Monday - Friday</p>
                        <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM WAT</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-[#243c91]/10 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-[#243c91]/20 flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-[#85dbf2]" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                        <p className="text-gray-400 text-sm">Chat with our support</p>
                        <p className="text-gray-400 text-sm">Available 24/7</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-[#0080ff]/20 flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-[#0080ff]" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                        <p className="text-gray-400 text-sm">Response within 2 hours</p>
                        <p className="text-gray-400 text-sm">support@niwts.com</p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" className="bg-gradient-to-br from-[#243c91]/10 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-[#243c91]/20 flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6 text-[#85dbf2]" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                        <p className="text-gray-400 text-sm">For urgent issues</p>
                        <p className="text-gray-400 text-sm">+234 123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}