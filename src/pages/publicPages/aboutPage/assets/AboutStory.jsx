export default function AboutStory({ }) {
    return (
        <div className="relative bg-gradient-to-b from-[transparent]  via-[#0a0712] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            {/* <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#85dbf2]/80 via-[#243c91]/40 to-transparent pointer-events-none" /> */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Image */}
                    <div data-aos="fade-right" className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#0080ff]/20 to-[#243c91]/20 rounded-3xl blur-2xl" />
                        <div className="relative overflow-hidden rounded-2xl border border-[#0080ff]/20 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop" alt="Team collaboration" className="w-full h-[500px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0712]/80 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div data-aos="fade-left" className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm">
                            <span className="text-sm font-medium text-[#0080ff]">Our Story</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white">
                            Built from <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Frustration</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                NIWTS was born from a simple yet frustrating experience. Our founder's laptop broke down right before an important presentation, and finding a trustworthy repair technician became an odyssey of unreliable recommendations and inflated prices.
                            </p>
                            <p>
                                We realized that millions of people face this same challenge every day. There had to be a better way to connect people who need repairs with skilled engineers who could help.
                            </p>
                            <p>
                                That's when NIWTS was created - a platform that verifies engineers, ensures transparent pricing, and makes device repairs as easy as ordering a ride or booking a hotel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}