import { Shield, Clock, MapPin, Award } from 'lucide-react'
import Logo from '../../../../components/logo/Logo';

function SvgPaths() {
    const centerStyle = {
        height: "100%",
        width: "100%",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
        position: "relative",
        padding: 0
    };
    const innerStyle = {
        display: "flex",
        placeContent: "center",
        placeItems: "center",
        backgroundColor: "transparent",
        position: "relative",
        height: "100%",
        width: "100%"
    };
    const pathsData = [
        "M250 200c0-125-250-50-250-200",
        "M250 200c0-125-150-50-150-200",
        "M250 200c0-125-50-50-50-200",
        "M250 200c0-125 50-50 50-200",
        "M250 200c0-125 150-50 150-200",
        "M250 200c0-125 250-50 250-200",
    ];

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl -mt-80">
                {pathsData.map((d, i) => (
                    <div key={i} className="svg-container absolute inset-0">
                        <div style={centerStyle}>
                            <div style={innerStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" style={{ width: "100%", height: "100%" }}>
                                    <path d={d} stroke="#4a5568" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="transparent" />
                                    <path className="animated-path" d={d} stroke="#0080ff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="transparent" strokeDasharray="30 130" pathLength="100" opacity="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




export default function LandingAboutUs({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[transparent] via-[#100b1d] via-[#100b1d] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080ff] opacity-5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#243c91] opacity-5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium text-[#0080ff]">Why Choose NIWTS</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Your Device, Our <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Priority</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        We connect you with certified hardware engineers who understand the value of your devices and deliver repairs you can trust.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Feature 1 */}
                    <div data-aos="fade-up" data-aos-delay="100" className="group relative bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 hover:border-[#0080ff]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mb-4 shadow-lg shadow-[#0080ff]/30 group-hover:shadow-xl group-hover:shadow-[#0080ff]/50 transition-shadow">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Verified Experts</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Every engineer is thoroughly vetted and certified to ensure top-quality repairs
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div data-aos="fade-up" data-aos-delay="200" className="group relative bg-gradient-to-br from-[#243c91]/10 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                            <Clock className="w-7 h-7 text-gray-200" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quick Turnaround</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Get your devices back faster with our network of local hardware specialists
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div data-aos="fade-up" data-aos-delay="300" className="group relative bg-gradient-to-br from-[#0080ff]/10 to-transparent border border-[#0080ff]/20 rounded-2xl p-6 hover:border-[#0080ff]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mb-4 shadow-lg shadow-[#0080ff]/30 group-hover:shadow-xl group-hover:shadow-[#0080ff]/50 transition-shadow">
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Local Engineers</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Find trusted technicians in your area for convenient and fast service
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div data-aos="fade-up" data-aos-delay="400" className="group relative bg-gradient-to-br from-[#243c91]/10 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                            <Award className="w-7 h-7 text-gray-200" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quality Guaranteed</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            All repairs backed by warranty and satisfaction guarantee
                        </p>
                    </div>
                </div>
                <SvgPaths />
                <div className='flex justify-center -mt-100 sm:-mt-80'>
                    <Logo />
                </div>

                {/* Bottom CTA */}
                <div data-aos="fade-up" data-aos-delay="500" className="text-center mt-16">
                    <p className="text-gray-300 mb-6">
                        Ready to get your device fixed by a professional?
                    </p>
                    <button className="group bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#0080ff]/30 hover:shadow-xl hover:shadow-[#0080ff]/40 hover:scale-105 inline-flex items-center gap-2">
                        Get Started Today
                        <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    )
}