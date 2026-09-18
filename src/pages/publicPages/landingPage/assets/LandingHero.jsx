import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LandingHero({ howItWorksRef }) {
    return (
        <>
            {/* Fixed background gradient */}
            <div className="fixed inset-0 bg-[#0b1f1c] pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#35d399] opacity-[0.06] rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f5c400] opacity-[0.04] rounded-full blur-[100px]" />
            </div>

            <div className="relative min-h-screen w-full flex items-center">
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Text */}
                        <div className="space-y-8">
                            <div
                                data-aos="fade-up"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#35d399]/30 bg-[#35d399]/10 w-fit"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-[#35d399]" />
                                <span className="text-sm font-medium text-[#35d399]">AI-powered matching for Nigerian students</span>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="100">
                                <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#eef3ef] leading-[1.08] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    Your internship
                                    <span className="block text-[#35d399]">should find you.</span>
                                </h1>
                            </div>

                            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-[#86ab9f] leading-relaxed max-w-md">
                                InternPlug matches you with verified internships based on your course, skills, and interests — not just keyword searches.
                            </p>

                            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup">
                                    <button className="group bg-[#f5c400] hover:bg-[#ffd633] text-[#0b1f1c] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#f5c400]/20 hover:shadow-xl hover:shadow-[#f5c400]/30 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                        Find my internship
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <button
                                    onClick={() => howItWorksRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                                    className="border border-[#1f5346] text-[#86ab9f] hover:text-[#eef3ef] hover:border-[#35d399] font-semibold px-8 py-4 rounded-xl transition-all duration-300 bg-transparent cursor-pointer"
                                >
                                    How it works
                                </button>
                            </div>

                            {/* Stats */}
                            <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1f5346]">
                                <div>
                                    <p className="text-3xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>500+</p>
                                    <p className="text-xs text-[#86ab9f] mt-1">Verified listings</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2,400+</p>
                                    <p className="text-xs text-[#86ab9f] mt-1">Students placed</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>120+</p>
                                    <p className="text-xs text-[#86ab9f] mt-1">Partner companies</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual cards */}
                        <div data-aos="fade-left" data-aos-delay="200" className="hidden lg:flex items-center justify-center relative h-[520px]">

                            {/* Match card */}
                            <div className="absolute top-4 left-4 w-72 bg-[#143a33] border border-[#1f5346] rounded-2xl p-5 shadow-2xl animate-float hover:scale-105 transition-transform">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-[#86ab9f] font-medium">Match found</span>
                                    <span className="text-xs bg-[#35d399]/20 text-[#35d399] px-2 py-0.5 rounded-full font-bold">92% fit</span>
                                </div>
                                <h4 className="text-[#eef3ef] font-bold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Policy Research Intern</h4>
                                <p className="text-[#86ab9f] text-xs mb-3">Civic Insight Africa · Abuja</p>
                                <div className="flex gap-1 flex-wrap">
                                    {['Research', 'Writing', 'Policy'].map(skill => (
                                        <span key={skill} className="text-[10px] bg-[#0b1f1c] text-[#86ab9f] px-2 py-0.5 rounded-md">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Profile progress */}
                            <div className="absolute top-[30%] right-0 w-64 bg-[#143a33] border border-[#1f5346] rounded-2xl p-5 shadow-2xl animate-float-delayed hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-full bg-[#35d399]/20 border border-[#35d399]/30 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-[#35d399]" />
                                    </div>
                                    <div>
                                        <p className="text-[#eef3ef] font-semibold text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Chidinma O.</p>
                                        <p className="text-[#86ab9f] text-[10px]">Computer Science · 300L</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-[#86ab9f]">Profile strength</span>
                                        <span className="text-[#35d399] font-bold">87%</span>
                                    </div>
                                    <div className="h-1.5 bg-[#0b1f1c] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#35d399] rounded-full w-[87%]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Tracker */}
                            <div className="absolute bottom-6 left-6 w-68 bg-[#143a33] border border-[#1f5346] rounded-2xl p-5 shadow-2xl hover:scale-105 transition-transform">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-4 h-4 text-[#f5c400]" />
                                    <span className="text-[#eef3ef] text-xs font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Application tracker</span>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { company: 'Sterling Bank', status: 'Shortlisted', color: 'text-[#35d399] bg-[#35d399]/20' },
                                        { company: 'Zenith Tech', status: 'Applied', color: 'text-[#f5c400] bg-[#f5c400]/20' },
                                    ].map((item) => (
                                        <div key={item.company} className="flex items-center justify-between">
                                            <span className="text-[#86ab9f] text-[11px]">{item.company}</span>
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>{item.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
