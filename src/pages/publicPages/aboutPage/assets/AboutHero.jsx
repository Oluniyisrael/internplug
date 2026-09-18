export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-12 lg:px-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#35d399] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-4xl mx-auto relative z-10">
                <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-4">Our story</p>
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-bold text-[#eef3ef] leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Built from the frustration of searching blind
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#86ab9f] text-lg leading-relaxed max-w-2xl">
                    InternPlug started because too many Nigerian students were sending applications into the void — no response, no feedback, no transparency. We built the platform we wish had existed.
                </p>
            </div>
        </section>
    )
}
