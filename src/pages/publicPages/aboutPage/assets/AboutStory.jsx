export default function AboutStory() {
    return (
        <section className="py-16 px-4 md:px-12 lg:px-20 bg-[#071714]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#eef3ef] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Why InternPlug exists
                        </h2>
                        <div className="space-y-4 text-[#86ab9f] leading-relaxed">
                            <p>
                                The internship process in Nigeria is broken in a specific way. Students mass-apply to listings they found on WhatsApp groups or Instagram DMs, with no idea if they're even remotely qualified. Companies get flooded with irrelevant CVs and ghost most applicants. Both sides lose.
                            </p>
                            <p>
                                The root cause is a mismatch problem. Students don't know which roles fit their profile, and companies don't have a structured way to find students who fit their needs. InternPlug fixes both.
                            </p>
                            <p>
                                We built an AI-powered matching layer that reads a student's course, skills, and interests, then ranks available internships by relevance. Students stop guessing. Companies get screened applicants. And we make the whole process — from application to placement — visible to both parties.
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
                        {[
                            { number: "2,400+", label: "Students placed", color: "text-[#35d399]" },
                            { number: "120+", label: "Partner companies", color: "text-[#f5c400]" },
                            { number: "500+", label: "Active listings", color: "text-[#35d399]" },
                            { number: "36", label: "States covered", color: "text-[#f5c400]" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-6">
                                <p className={`text-4xl font-black mb-1 ${stat.color}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.number}</p>
                                <p className="text-[#86ab9f] text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
