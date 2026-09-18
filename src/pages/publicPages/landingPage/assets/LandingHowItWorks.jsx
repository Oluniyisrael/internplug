import { UserCircle, Search, Send, BarChart3 } from 'lucide-react'

const steps = [
    {
        icon: UserCircle,
        number: "01",
        title: "Build your profile",
        description: "Add your school, course, skills, interests, and upload your CV. Your profile is what InternPlug uses to find the right fit — not just keywords.",
        color: "text-[#35d399]",
        bg: "bg-[#35d399]/10",
        border: "border-[#35d399]/20",
    },
    {
        icon: Search,
        number: "02",
        title: "Get matched",
        description: "Our matching engine evaluates your profile against every verified listing and surfaces the opportunities most relevant to you — automatically.",
        color: "text-[#f5c400]",
        bg: "bg-[#f5c400]/10",
        border: "border-[#f5c400]/20",
    },
    {
        icon: Send,
        number: "03",
        title: "Apply in one click",
        description: "Save internships you like, then apply directly through InternPlug with your profile and CV pre-attached. No chasing emails or portals.",
        color: "text-[#35d399]",
        bg: "bg-[#35d399]/10",
        border: "border-[#35d399]/20",
    },
    {
        icon: BarChart3,
        number: "04",
        title: "Track everything",
        description: "Follow every application from the moment you apply — through shortlisted, interview scheduled, accepted, or closed — all in one place.",
        color: "text-[#f5c400]",
        bg: "bg-[#f5c400]/10",
        border: "border-[#f5c400]/20",
    },
];

export default function LandingHowItWorks({ howItWorksRef }) {
    return (
        <section ref={howItWorksRef} id="how-it-works" className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#0b1f1c]">
            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#35d399] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3 tracking-wide">How InternPlug works</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        From profile to placement
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-[#86ab9f] mt-4 max-w-lg mx-auto">
                        Four steps between you and an internship that actually makes sense for your career.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className={`relative bg-[#143a33] border ${step.border} rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 group hover:-translate-y-1`}
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center`}>
                                        <Icon className={`w-6 h-6 ${step.color}`} />
                                    </div>
                                    <span className="text-3xl font-black text-[#1f5346] group-hover:text-[#2a6b55] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-[#eef3ef] font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h3>
                                <p className="text-[#86ab9f] text-sm leading-relaxed">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
