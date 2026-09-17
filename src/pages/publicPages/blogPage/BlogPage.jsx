// BlogPage.jsx
import { useParams } from "react-router-dom"
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import { useEffect, useState } from "react"
import DemoBlogs from "../../../demoData/DemoBlogs"
import { Clock, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function BlogPage({ }) {
    const { str } = useParams()
    const [blog, setBlog] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const foundBlog = DemoBlogs.find((blog) => blog.title === decodeURIComponent(str))
        setBlog(foundBlog || undefined)
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [str])

    const getImageWithId = (id) => {
        return blog?.images.find(image => image.id === id)
    }

    const processBodyContent = (content) => {
        let processedContent = content
        blog?.images.forEach((image) => {
            const imageRegex = new RegExp(`{imageId:${image.id}}`, "g")
            processedContent = processedContent.replace(imageRegex, image.src)
        })
        return processedContent
    }

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-[#0a0712] flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        )
    }

    if (!blog) {
        return (
            <div className="w-full min-h-screen bg-[#0a0712]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <Link to="/blogs" className="text-[#0080ff] hover:underline">← Back to Blog</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full overflow-hidden bg-[#0a0712]">

            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-[#100b1d] to-[#0a0712] py-20 overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-[#0080ff] hover:text-[#0066cc] mb-8 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Blog
                        </Link>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080ff]/20 border border-[#0080ff]/30 mb-6">
                            <span className="text-sm font-medium text-[#0080ff]">{blog.category}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        {blog.summary}
                    </p>

                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>{new Date(blog.createdAt.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cover Image */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img src={getImageWithId(blog.coverImage)?.src} alt={blog.title} className="w-full h-[500px] object-cover" />
                </div>
            </div>
            {/* Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {blog.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-400 border border-white/10">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Body */}
                <div className="prose prose-lg prose-invert max-w-none">
                    {blog.body.map((section, index) => (
                        <div key={index} className="mb-8" dangerouslySetInnerHTML={{ __html: processBodyContent(section) }} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-[#0080ff]/20 to-transparent border border-[#0080ff]/30 rounded-2xl backdrop-blur-sm text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Need Professional Help?</h3>
                    <p className="text-gray-300 mb-6">Connect with verified hardware engineers on NIWTS today</p>
                    <Link to="/user/find-engineers" className="inline-block px-8 py-4 bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white font-semibold rounded-full hover:scale-105 transition-transform">
                        Find an Engineer
                    </Link>
                </div>
            </article>
        </div>
    )
}