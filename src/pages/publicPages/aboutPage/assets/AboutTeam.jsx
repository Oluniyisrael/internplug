const team = [
    { name: "Oluwaseun Adebayo", role: "Co-Founder & CEO", bio: "Former intern recruiter who saw both sides of the broken process and decided to fix it.", initials: "OA", color: "bg-[#35d399] text-[#0b1f1c]" },
    { name: "Chibuike Eze", role: "Co-Founder & CTO", bio: "Built the matching engine. Believes AI should do the work students shouldn't have to do manually.", initials: "CE", color: "bg-[#f5c400] text-[#0b1f1c]" },
    { name: "Amaka Osei", role: "Head of Partnerships", bio: "Manages every company relationship. Her rule: if a company isn't serious, they don't list.", initials: "AO", color: "bg-[#35d399] text-[#0b1f1c]" },
    { name: "Ibrahim Musa", role: "Student Experience Lead", bio: "Runs support and community. Was a NYSC corp member who used an early version of InternPlug himself.", initials: "IM", color: "bg-[#f5c400] text-[#0b1f1c]" },
]

export default function AboutTeam() {
    return (
        <section className="py-20 px-4 md:px-12 lg:px-20 bg-[#071714]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-3">The people behind it</p>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Meet the team</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <div key={i} data-aos="fade-up" data-aos-delay={i * 80} className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-6 text-center hover:border-[#2a6b55] transition-all group">
                            <div className={`w-16 h-16 rounded-2xl ${member.color} font-black text-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {member.initials}
                            </div>
                            <h3 className="text-[#eef3ef] font-bold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.name}</h3>
                            <p className="text-[#35d399] text-xs font-medium mb-3">{member.role}</p>
                            <p className="text-[#86ab9f] text-xs leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
