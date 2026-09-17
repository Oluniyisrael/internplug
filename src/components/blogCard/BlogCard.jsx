import { Link } from "react-router-dom"
import { Clock } from "lucide-react"
export default function BlogCard({ blog }) {
    const getImageWithId = (id) => {
        return blog.images.find(image => image.id === id)
    }
    return (
        <Link to={`/blog/${encodeURIComponent(blog.title)}`} className="group">
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#0080ff]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                    <img src={getImageWithId(blog.coverImage)?.src} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0712] via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0080ff]/90 backdrop-blur-sm text-white text-xs font-medium">
                        {blog.category}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#0080ff] transition-colors mb-3 line-clamp-2">
                        {blog.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {blog.summary}
                    </p>

                    <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(blog.createdAt.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}