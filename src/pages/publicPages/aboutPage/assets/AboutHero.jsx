const heroImages = [
    { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80", alt: "Students collaborating on laptops" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80", alt: "Students studying together" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&auto=format&fit=crop&q=80", alt: "Student with laptop" },
]

export default function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-12 lg:px-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#35d399] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Left: copy */}
                    <div>
                        <p data-aos="fade-up" className="text-[#35d399] font-semibold text-sm mb-4">Our story</p>
                        <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-6xl font-bold text-[#eef3ef] leading-tight mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Built from the frustration of searching blind
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-[#86ab9f] text-lg leading-relaxed max-w-2xl">
                            InternPlug started because too many Nigerian students were sending applications into the void, no response, no feedback, no transparency. We built the platform we wish had existed.
                        </p>
                    </div>

                    {/* Right: image collage */}
                    <div data-aos="fade-left" data-aos-delay="200" className="hidden lg:grid grid-cols-2 gap-3 h-[420px]">
                        {/* Tall left image */}
                        <div className="relative rounded-2xl overflow-hidden border border-[#1f5346] row-span-2">
                            <img src={heroImages[0].src} alt={heroImages[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071714]/60 to-transparent" />
                        </div>
                        {/* Top right */}
                        <div className="relative rounded-2xl overflow-hidden border border-[#1f5346]">
                            <img src={heroImages[1].src} alt={heroImages[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071714]/60 to-transparent" />
                        </div>
                        {/* Bottom right */}
                        <div className="relative rounded-2xl overflow-hidden border border-[#1f5346]">
                            <img src={heroImages[2].src} alt={heroImages[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071714]/60 to-transparent" />
                            <div className="absolute bottom-3 left-3 bg-[#35d399]/90 text-[#0b1f1c] text-xs font-bold px-3 py-1 rounded-full">
                                2,400+ students placed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
