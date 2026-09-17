import { ArrowRight, Zap, Users, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingHero({ howItWorksRef }) {
    return (
        <>
            <div className="fixed inset-0 bg-[radial-gradient(150%_163%_at_50%_90.6%,#0a0712_25.6757%,#100b1d_38.2883%,#21104b_44.1441%,#243c91_50.7848%,#85dbf2_65.8643%)]">
            </div>
            <div className="relative min-h-screen w-full flex items-center justify-center ">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#0080ff] opacity-20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/3 -left-48 w-[32rem] h-[32rem] bg-[#243c91] opacity-15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-[#85dbf2] opacity-10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm w-fit shadow-lg shadow-[#0080ff]/20">
                                <Wrench className="w-4 h-4 text-[#0080ff]" />
                                <span className="text-sm font-medium text-[#0080ff]">Device Repair Made Easy</span>
                            </div>

                            <div className="space-y-6">
                                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                    Connect with <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Expert</span> Hardware Engineers
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
                                    NIWTS connects you with skilled hardware engineers who can fix your laptop, phone, or any device. Get professional repairs from trusted technicians.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link to={`/user/find-engineers`}>
                                    <button className="group bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#0080ff]/30 hover:shadow-xl hover:shadow-[#0080ff]/40 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer w-full">
                                        Find an Engineer
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <button className="border-2 border-[#0080ff]/50 text-[#0080ff] hover:bg-[#0080ff]/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm hover:border-[#0080ff] hover:scale-105 cursor-pointer" onClick={() => howItWorksRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}>
                                    How It Works
                                </button>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">5K+</p>
                                    <p className="text-sm text-gray-400">Verified Engineers</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">15K+</p>
                                    <p className="text-sm text-gray-400">Devices Repaired</p>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="200" className="hidden lg:flex items-center justify-center">
                            <div className="relative w-full aspect-square max-w-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0080ff]/5 to-transparent rounded-full blur-3xl" />

                                <div data-aos="zoom-in" data-aos-delay="300" className="absolute top-8 left-0 w-72 h-44 bg-gradient-to-br from-[#0080ff]/20 via-[#0080ff]/10 to-transparent border border-[#0080ff]/30 rounded-2xl p-6 shadow-2xl shadow-[#0080ff]/20 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center shadow-lg shadow-[#0080ff]/30">
                                            <Wrench className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-white font-semibold text-lg">Fast Repairs</h3>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Get your devices fixed quickly by certified hardware experts
                                    </p>
                                </div>

                                <div data-aos="zoom-in" data-aos-delay="400" className="absolute bottom-8 right-0 w-72 h-44 bg-gradient-to-br from-[#243c91]/20 via-[#1B2B4D]/10 to-transparent border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center shadow-lg">
                                            <Users className="w-6 h-6 text-gray-200" />
                                        </div>
                                        <h3 className="text-white font-semibold text-lg">Trusted Network</h3>
                                    </div>
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Connect with verified engineers in your area instantly
                                    </p>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-[#0080ff]/50 via-[#0080ff]/20 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>
        </>
    )
}