import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const points = [
    "Free for students, always",
    "Set up your profile in under 5 minutes",
    "Start seeing matches immediately",
];

export default function LandingCTA() {
    return (
        <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#0b1f1c] overflow-hidden">
            <div data-aos="zoom-in" data-aos-duration="1000" className="relative max-w-5xl mx-auto bg-[#143a33] border border-[#1f5346] rounded-3xl p-10 md:p-16 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#35d399] opacity-[0.08] rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#f5c400] opacity-[0.05] rounded-full blur-[60px]" />

                {/* SVG wave decoration */}
                <div className="absolute bottom-0 left-0 right-0 opacity-10">
                    <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none" className="w-full h-20">
                        <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" fill="#35d399" />
                    </svg>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#eef3ef] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Ready to find your fit?
                        </h2>
                        <p className="text-[#86ab9f] mb-8 leading-relaxed">
                            Thousands of Nigerian students are already getting matched with internships that make sense. Join them.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-[#eef3ef]">
                                    <CheckCircle className="w-4 h-4 text-[#35d399] flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/signup">
                                <button className="group flex items-center justify-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold px-8 py-4 rounded-xl hover:bg-[#ffd633] transition-all shadow-lg shadow-[#f5c400]/20 hover:shadow-xl hover:scale-105 cursor-pointer w-full sm:w-auto">
                                    Create my profile
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="flex items-center justify-center border border-[#1f5346] text-[#86ab9f] hover:text-[#eef3ef] hover:border-[#35d399] font-semibold px-8 py-4 rounded-xl transition-all cursor-pointer w-full sm:w-auto">
                                    Learn more about us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side decoration */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                            <div className="w-48 h-48 rounded-full bg-[#35d399]/10 border border-[#35d399]/20 flex items-center justify-center animate-morph">
                                <div className="text-center">
                                    <p className="text-6xl font-black text-[#35d399]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>92%</p>
                                    <p className="text-[#86ab9f] text-xs mt-1">average match score</p>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#f5c400]/10 border border-[#f5c400]/20 flex items-center justify-center animate-spin-slow">
                                <div className="text-center">
                                    <p className="text-lg font-black text-[#f5c400]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>500+</p>
                                    <p className="text-[#86ab9f] text-[9px]">listings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
