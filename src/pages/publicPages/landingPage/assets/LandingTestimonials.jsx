import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LandingTestimonials({ }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "Small Business Owner",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            rating: 5,
            text: "My laptop screen was completely shattered and I thought I'd have to buy a new one. Found an amazing engineer through NIWTS who fixed it in 2 hours at half the price I expected. Absolutely recommend!",
            device: "MacBook Pro"
        },
        {
            name: "James Rodriguez",
            role: "Graphic Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 5,
            text: "Water damage repair on my phone seemed impossible, but the engineer I connected with through NIWTS saved all my data and had it working perfectly within 24 hours. Professional and trustworthy service.",
            device: "iPhone 14 Pro"
        },
        {
            name: "Emily Chen",
            role: "Content Creator",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            rating: 5,
            text: "Gaming PC wasn't booting up and I was panicking. The engineer diagnosed the issue quickly, replaced the faulty components, and even upgraded my cooling system. Best repair experience ever!",
            device: "Custom PC"
        },
        {
            name: "Michael Thompson",
            role: "Student",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            rating: 5,
            text: "Cracked my tablet screen right before finals. NIWTS connected me with a local engineer who came to campus and fixed it the same day. Saved my semester! Highly professional and affordable.",
            device: "iPad Air"
        },
        {
            name: "Lisa Anderson",
            role: "Freelance Writer",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
            rating: 5,
            text: "Battery replacement on my aging laptop gave it new life. The engineer was transparent about pricing, showed me what needed to be done, and finished ahead of schedule. Will definitely use again!",
            device: "Dell XPS 15"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative bg-gradient-to-b from-[#85dbf2] via-[#00bfff] to-[#0080ff] py-20 lg:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white opacity-10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#0a0712] opacity-10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0a0712]/20 bg-white/20 backdrop-blur-sm mb-6">
                        <Star className="w-4 h-4 text-[#0a0712] fill-[#0a0712]" />
                        <span className="text-sm font-medium text-[#0a0712]">Trusted by Thousands</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a0712] mb-6">
                        What Our <span className="bg-gradient-to-r from-[#0a0712] to-[#1a1a2e] bg-clip-text text-transparent">Customers</span> Say
                    </h2>
                    <p className="text-lg text-[#0a0712]/80 max-w-2xl mx-auto">
                        Real stories from real people who got their devices repaired through NIWTS
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="min-w-full px-4">
                                    <div className="bg-[#0a0712] border border-[#0a0712]/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm shadow-2xl">
                                        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                                            {/* Image */}
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0080ff] to-[#0066cc] rounded-full blur opacity-75" />
                                                    <img src={testimonial.image} alt={testimonial.name} className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 text-center lg:text-left">
                                                {/* Stars */}
                                                <div className="flex gap-1 justify-center lg:justify-start mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-[#0080ff] fill-[#0080ff]" />
                                                    ))}
                                                </div>

                                                {/* Text */}
                                                <p className="text-[white] text-lg leading-relaxed mb-6 italic">
                                                    "{testimonial.text}"
                                                </p>

                                                {/* Author info */}
                                                <div className="space-y-1">
                                                    <h4 className="text-[#ffffff] font-bold text-xl">{testimonial.name}</h4>
                                                    <p className="text-[#ffffff]/70">{testimonial.role}</p>
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0080ff]/10 border border-[#0080ff]/30 mt-2">
                                                        <span className="text-sm text-[#0080ff] font-medium">{testimonial.device}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#0a0712]/20 flex items-center justify-center hover:bg-white hover:border-[#0080ff]/60 transition-all group shadow-lg">
                        <ChevronLeft className="w-6 h-6 text-[#0a0712] group-hover:text-[#0080ff]" />
                    </button>
                    <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[#0a0712]/20 flex items-center justify-center hover:bg-white hover:border-[#0080ff]/60 transition-all group shadow-lg">
                        <ChevronRight className="w-6 h-6 text-[#0a0712] group-hover:text-[#0080ff]" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-[#0a0712]' : 'w-2 bg-[#0a0712]/30 hover:bg-[#0a0712]/50'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}