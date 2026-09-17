import { Target, Eye, Heart } from 'lucide-react'

export default function AboutMissionVision({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-0 w-[40rem] h-[40rem] bg-[#0080ff] opacity-5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-0 w-[40rem] h-[40rem] bg-[#243c91] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        What Drives <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Us</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mb-6 shadow-lg shadow-[#0080ff]/50">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To democratize access to quality device repairs by connecting customers with verified hardware engineers, ensuring fast, affordable, and trustworthy service for everyone, everywhere.
                        </p>
                    </div>

                    {/* Vision */}
                    <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-[#243c91]/20 to-transparent border border-white/20 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mb-6 shadow-lg">
                            <Eye className="w-8 h-8 text-gray-200" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To become the world's most trusted platform for device repairs, where every broken device has access to an expert engineer within minutes, and no repair is too small or too complex.
                        </p>
                    </div>

                    {/* Values */}
                    <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mb-6 shadow-lg shadow-[#0080ff]/50">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Trust, transparency, and excellence guide everything we do. We believe in empowering engineers, protecting customers, and building a community where quality repairs are the standard, not the exception.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}