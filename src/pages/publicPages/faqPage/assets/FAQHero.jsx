export default function FAQHero() {
    return (
        <section className="relative pt-32 pb-16 px-4 md:px-12 lg:px-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#35d399] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-4">Help centre</p>
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-bold text-[#eef3ef] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Frequently asked questions
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#86ab9f] text-lg">
                    Everything you need to know about InternPlug. Can't find what you're looking for? <a href="/contact" className="text-[#35d399] hover:underline">Message us.</a>
                </p>
            </div>
        </section>
    )
}
