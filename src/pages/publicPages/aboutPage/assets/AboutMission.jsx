import { Target, Eye, Heart } from 'lucide-react'

const pillars = [
    {
        icon: Target,
        title: "Mission",
        text: "To give every Nigerian student access to internship opportunities that match their actual profile, removing the guesswork, the ghosting, and the broken process.",
        color: "text-[#35d399]",
        bg: "bg-[#35d399]/10",
    },
    {
        icon: Eye,
        title: "Vision",
        text: "A Nigeria where no student has to settle for an internship that doesn't serve their career, and no company misses the right candidate because of process friction.",
        color: "text-[#f5c400]",
        bg: "bg-[#f5c400]/10",
    },
    {
        icon: Heart,
        title: "Values",
        text: "Transparency in every application status. Honesty in every match score. Accessibility for students regardless of school or state. And speed, because opportunities shouldn't wait.",
        color: "text-[#35d399]",
        bg: "bg-[#35d399]/10",
    },
]

export default function AboutMission() {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-20 bg-[#0b1f1c]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">What we stand for</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Mission, vision, values
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-7 hover:border-[#2a6b55] transition-all">
                                <div className={`w-12 h-12 ${pillar.bg} rounded-xl flex items-center justify-center mb-5`}>
                                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                                </div>
                                <h3 className="text-[#eef3ef] font-bold text-xl mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{pillar.title}</h3>
                                <p className="text-[#86ab9f] text-sm leading-relaxed">{pillar.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
