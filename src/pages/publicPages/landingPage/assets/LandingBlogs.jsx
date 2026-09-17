import { useState, useEffect } from 'react'
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import BlogCard from "../../../../components/blogCard/BlogCard"
import DemoBlogs from "../../../../demoData/DemoBlogs"

export default function LandingBlogs({ }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(3)

    const blogs = DemoBlogs

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2)
            } else {
                setItemsPerView(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const maxIndex = blogs.length - itemsPerView
                return prev >= maxIndex ? 0 : prev + 1
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [itemsPerView])

    const goToNext = () => {
        setCurrentIndex((prev) => {
            const maxIndex = blogs.length - itemsPerView
            return prev >= maxIndex ? 0 : prev + 1
        })
    }

    const goToPrev = () => {
        setCurrentIndex((prev) => {
            const maxIndex = blogs.length - itemsPerView
            return prev <= 0 ? maxIndex : prev - 1
        })
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-[#0080ff] opacity-5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium text-[#0080ff]">Latest Insights</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        From Our <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Blog</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Expert tips, guides, and insights to help you maintain and repair your devices
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
                            {blogs.map((blog, index) => (
                                <div key={index} className="px-4" style={{ minWidth: `${100 / itemsPerView}%` }}>
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation arrows */}
                    <button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all group z-10">
                        <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#0080ff]" />
                    </button>
                    <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all group z-10">
                        <ChevronRight className="w-6 h-6 text-white group-hover:text-[#0080ff]" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: blogs.length - itemsPerView + 1 }).map((_, index) => (
                            <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-gradient-to-r from-[#0080ff] to-[#0066cc]' : 'w-2 bg-white/20 hover:bg-white/40'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}