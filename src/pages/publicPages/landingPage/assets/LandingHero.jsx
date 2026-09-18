import { ArrowRight, Sparkles, TrendingUp, Users, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import studentImage from "../images/image.png"

// const studentImage =
//     "https://upload.wikimedia.org/wikipedia/commons/5/5c/African_student_studying_at_dormitory_from_tablet_computer%2C.jpg"

export default function LandingHero({ howItWorksRef }) {
    return (
        <>
            {/* Page background */}
            <div className="fixed inset-0 bg-[#0b1f1c] pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#35d399] opacity-[0.055] rounded-full blur-[140px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#f5c400] opacity-[0.035] rounded-full blur-[100px]" />
            </div>

            <div className="relative min-h-screen w-full flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-24 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                        {/* ── LEFT: copy ── */}
                        <div className="space-y-8">
                            <div
                                data-aos="fade-up"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#35d399]/30 bg-[#35d399]/10 w-fit"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-[#35d399]" />
                                <span className="text-sm font-medium text-[#35d399]">
                                    Smart matching for Nigerian students
                                </span>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="100">
                                <h1
                                    className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#eef3ef] leading-[1.08] tracking-tight"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    Your internship
                                    <span className="block text-[#35d399]">should find you.</span>
                                </h1>
                            </div>

                            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-[#86ab9f] leading-relaxed max-w-md">
                                InternPlug matches Nigerian students with verified internships based on
                                their course, skills, and goals, not just keyword searches.
                            </p>

                            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup">
                                    <button className="group bg-[#f5c400] hover:bg-[#ffd633] text-[#0b1f1c] font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#f5c400]/20 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                        Find my internship
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <button
                                    onClick={() => howItWorksRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    className="border border-[#1f5346] text-[#86ab9f] hover:text-[#eef3ef] hover:border-[#35d399] font-semibold px-8 py-4 rounded-xl transition-all duration-300 bg-transparent cursor-pointer"
                                >
                                    How it works
                                </button>
                            </div>

                            {/* Stats */}
                            <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1f5346]">
                                {[
                                    { value: "500+",   label: "Verified listings" },
                                    { value: "2,400+", label: "Students placed" },
                                    { value: "120+",   label: "Partner companies" },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-3xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-[#86ab9f] mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: student image + floating cards ── */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="hidden lg:block relative h-[600px]"
                        >
                            {/* Background glow */}
                            <div className="absolute w-[460px] h-[460px] rounded-full bg-[#35d399] opacity-[0.06] blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            {/* Decorative rings */}
                            <div className="absolute w-[470px] h-[470px] rounded-full border border-[#35d399]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute w-[390px] h-[390px] rounded-full border border-[#35d399]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            {/* Student image */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[470px] rounded-[2rem] overflow-hidden border border-[#35d399]/20 shadow-[0_30px_100px_rgba(0,0,0,0.45)] rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                                <img
                                    src={studentImage}
                                    alt="University student studying"
                                    className="w-full h-full object-cover object-center scale-[1.08]"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#071714]/90 via-[#071714]/10 to-transparent" />
                                {/* Label */}
                                <div className="absolute left-5 bottom-5 right-5">
                                    <p className="text-[#35d399] text-xs font-semibold mb-1">STUDENT PROFILE</p>
                                    <p className="text-white text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        Built around your goals.
                                    </p>
                                    <p className="text-white/60 text-xs mt-1">Course · Skills · Interests · CV</p>
                                </div>
                            </div>

                            {/* Floating match card, top left */}
                            <div className="absolute top-10 left-0 w-[225px] bg-[#143a33]/95 backdrop-blur-xl border border-[#1f5346] rounded-2xl p-4 shadow-2xl animate-float hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-[#35d399]/15 border border-[#35d399]/20 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-[#35d399]" />
                                    </div>
                                    <div>
                                        <p className="text-[#eef3ef] text-xs font-semibold">Perfect match</p>
                                        <p className="text-[#86ab9f] text-[10px]">Based on your profile</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#86ab9f] text-[10px]">Policy Research Intern</span>
                                    <span className="text-[9px] bg-[#35d399]/20 text-[#35d399] px-2 py-1 rounded-full font-bold">94% fit</span>
                                </div>
                            </div>

                            {/* Location card, mid right */}
                            <div className="absolute top-[170px] right-[-15px] w-[150px] bg-[#143a33]/95 backdrop-blur-xl border border-[#1f5346] rounded-2xl p-4 shadow-2xl animate-float-delayed">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-4 h-4 text-[#f5c400]" />
                                    <span className="text-[#eef3ef] text-xs font-semibold">Opportunities</span>
                                </div>
                                <p className="text-[#86ab9f] text-[10px] leading-relaxed">
                                    Find internships near you or anywhere in Nigeria.
                                </p>
                            </div>

                            {/* Application tracker card, bottom right */}
                            <div className="absolute bottom-8 right-[-10px] w-[220px] bg-[#143a33]/95 backdrop-blur-xl border border-[#1f5346] rounded-2xl p-4 shadow-2xl animate-float-delayed">
                                <div className="flex items-center gap-2 mb-3">
                                    {/* FIX 1: was missing closing " on className */}
                                    <TrendingUp className="w-4 h-4 text-[#f5c400]" />
                                    <span className="text-[#eef3ef] text-xs font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        Applications
                                    </span>
                                </div>
                                {[
                                    { company: "Sterling Bank", status: "Shortlisted", dot: "bg-[#35d399]" },
                                    { company: "MTN Nigeria",   status: "Interview",   dot: "bg-[#f5c400]" },
                                    { company: "Zenith Tech",   status: "Applied",     dot: "bg-[#86ab9f]" },
                                ].map((item) => (
                                    <div key={item.company} className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                                            <span className="text-[#86ab9f] text-[10px]">{item.company}</span>
                                        </div>
                                        <span className="text-[9px] text-[#eef3ef] font-medium">{item.status}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Verified badge, bottom left */}
                            <div className="absolute bottom-[180px] left-[-15px] flex items-center gap-2 px-3 py-2 rounded-full bg-[#143a33]/95 backdrop-blur-xl border border-[#35d399]/20 shadow-xl animate-float">
                                {/* FIX 2: was self-closing with /> before closing the className string */}
                                <div className="w-2 h-2 rounded-full bg-[#35d399] shadow-[0_0_10px_#35d399]" />
                                <span className="text-[#eef3ef] text-[10px] font-semibold">Verified opportunities</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Image attribution */}
            <div className="absolute bottom-2 right-3 z-20 text-[8px] text-[#86ab9f]/40 pointer-events-none">
                Photo: Tinsae Belay / Wikimedia Commons · CC BY-SA 4.0
            </div>
        </>
    )
}