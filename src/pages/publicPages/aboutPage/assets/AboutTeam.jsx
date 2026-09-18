const team = [
    { name: "Oluwaseun Adebayo", role: "Co-Founder & CEO", bio: "Former intern recruiter who saw both sides of the broken process and decided to fix it.", initials: "OA", color: "bg-[#35d399] text-[#0b1f1c]", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&auto=format&fit=crop&q=80" },
    { name: "Chibuike Eze", role: "Co-Founder & CTO", bio: "Built the matching engine. Believes AI should do the work students shouldn't have to do manually.", initials: "CE", color: "bg-[#f5c400] text-[#0b1f1c]", photo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&auto=format&fit=crop&q=80" },
    { name: "Amaka Osei", role: "Head of Partnerships", bio: "Manages every company relationship. Her rule: if a company isn't serious, they don't list.", initials: "AO", color: "bg-[#35d399] text-[#0b1f1c]", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&auto=format&fit=crop&q=80" },
    { name: "Ibrahim Musa", role: "Student Experience Lead", bio: "Runs support and community. Was a NYSC corp member who used an early version of InternPlug himself.", initials: "IM", color: "bg-[#f5c400] text-[#0b1f1c]", photo: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&h=200&auto=format&fit=crop&q=80" },
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
                            <div className="relative w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#1f5346]"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                <div className={`w-16 h-16 rounded-2xl ${member.color} font-black text-xl items-center justify-center absolute inset-0 hidden`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {member.initials}
                                </div>
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
