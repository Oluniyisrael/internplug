import { ArrowRight } from 'lucide-react'

export default function AboutCTA({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#0080ff] opacity-10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                <div className="bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-3xl p-12 lg:p-16 backdrop-blur-sm">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Experience the <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Difference?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust NIWTS for their device repairs. Your perfect engineer is just a few clicks away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#0080ff]/30 hover:shadow-xl hover:shadow-[#0080ff]/40 hover:scale-105 inline-flex items-center justify-center gap-2">
                            Find an Engineer
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-[#0080ff]/50 text-[#0080ff] hover:bg-[#0080ff]/10 font-semibold px-10 py-4 rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm hover:border-[#0080ff] hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}