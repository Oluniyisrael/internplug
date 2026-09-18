export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-12 px-4 md:px-12 lg:px-20">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f5c400] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-4">Get in touch</p>
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-bold text-[#eef3ef] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Talk to us
                </h1>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#86ab9f] text-lg">
                    Whether you're a student with a question, a company that wants to partner, or a developer who wants to contribute, we're listening.
                </p>
            </div>
        </section>
    )
}
