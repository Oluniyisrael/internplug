import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Adaeze Okonkwo",
        role: "Economics · University of Lagos",
        text: "I applied to 12 places on my own and got nothing. InternPlug matched me with a policy research role at a think tank in Abuja in two weeks. The fit was so obvious, I don't know why I didn't find it myself.",
        outcome: "Now at Stears Business",
        initials: "AO",
        color: "bg-[#35d399] text-[#0b1f1c]",
    },
    {
        name: "Emeka Uche",
        role: "Computer Science · University of Nigeria",
        text: "The application tracker alone is worth it. I used to lose track of where I stood with companies. Now I know exactly what stage every application is at, and the companies can't ghost me silently.",
        outcome: "Interned at Flutterwave",
        initials: "EU",
        color: "bg-[#f5c400] text-[#0b1f1c]",
    },
    {
        name: "Fatima Al-Hassan",
        role: "Law · ABU Zaria",
        text: "I was worried there'd be no legal internships on a platform like this. There were five listings that matched my profile — including one at a top Lagos firm. I'm there now.",
        outcome: "Now at Okafor & Bello LLP",
        initials: "FA",
        color: "bg-[#35d399] text-[#0b1f1c]",
    },
    {
        name: "Tunde Bankole",
        role: "Mass Communication · UNILAG",
        text: "The match score system is honest. When it said 94% fit for a PR internship, it meant the role description actually lined up with what I do. No more applying blind.",
        outcome: "Interned at Ogilvy Nigeria",
        initials: "TB",
        color: "bg-[#f5c400] text-[#0b1f1c]",
    },
];

export default function LandingTestimonials() {
    return (
        <section className="relative py-24 px-4 md:px-12 lg:px-20 bg-[#0b1f1c] overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#35d399] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">What students say</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Real placements, real stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                            className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-7 hover:border-[#2a6b55] transition-all duration-300 group"
                        >
                            <Quote className="w-6 h-6 text-[#1f5346] group-hover:text-[#35d399]/40 transition-colors mb-4" />
                            <p className="text-[#eef3ef] text-sm leading-relaxed mb-6">"{t.text}"</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full ${t.color} font-bold text-sm flex items-center justify-center flex-shrink-0`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="text-[#eef3ef] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</p>
                                        <p className="text-[#86ab9f] text-xs">{t.role}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] bg-[#35d399]/10 text-[#35d399] border border-[#35d399]/20 px-2.5 py-1 rounded-full font-medium hidden sm:block">
                                    {t.outcome}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
