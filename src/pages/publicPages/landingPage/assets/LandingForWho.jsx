import { GraduationCap, Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const studentBenefits = [
    "Profile built around your course & skills",
    "AI-matched internships — not random listings",
    "One-click apply with saved CV",
    "Real-time application tracker",
    "CV builder and interview prep tools",
    "Verified companies only",
];

const employerBenefits = [
    "Post listings and reach 10,000+ students",
    "Auto-screened applicants by fit score",
    "Structured shortlisting workflow",
    "Direct messaging with candidates",
    "Internship verification certificates",
    "Dashboard analytics",
];

export default function LandingForWho() {
    return (
        <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#071714]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">Who InternPlug is for</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Built for both sides
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Students card */}
                    <div data-aos="fade-right" className="relative bg-[#143a33] border border-[#1f5346] rounded-3xl p-8 overflow-hidden group hover:border-[#35d399]/40 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#35d399] opacity-[0.06] rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#35d399]/10 rounded-2xl flex items-center justify-center mb-6">
                                <GraduationCap className="w-7 h-7 text-[#35d399]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#eef3ef] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Students</h3>
                            <p className="text-[#86ab9f] text-sm mb-6">You're not just looking for any internship. You want one that counts.</p>
                            <ul className="space-y-3 mb-8">
                                {studentBenefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#eef3ef]">
                                        <div className="w-5 h-5 rounded-full bg-[#35d399]/20 border border-[#35d399]/30 flex items-center justify-center flex-shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#35d399]" />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup">
                                <button className="group flex items-center gap-2 bg-[#35d399] text-[#0b1f1c] font-bold px-6 py-3 rounded-xl hover:bg-[#2bc98a] transition-all">
                                    Start as a student
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Employers card */}
                    <div data-aos="fade-left" className="relative bg-[#143a33] border border-[#1f5346] rounded-3xl p-8 overflow-hidden group hover:border-[#f5c400]/40 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#f5c400] opacity-[0.05] rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#f5c400]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Building2 className="w-7 h-7 text-[#f5c400]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#eef3ef] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Employers</h3>
                            <p className="text-[#86ab9f] text-sm mb-6">Post once. Get matched with the students who actually fit your role.</p>
                            <ul className="space-y-3 mb-8">
                                {employerBenefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#eef3ef]">
                                        <div className="w-5 h-5 rounded-full bg-[#f5c400]/20 border border-[#f5c400]/30 flex items-center justify-center flex-shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#f5c400]" />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup">
                                <button className="group flex items-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold px-6 py-3 rounded-xl hover:bg-[#ffd633] transition-all">
                                    Post an internship
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
