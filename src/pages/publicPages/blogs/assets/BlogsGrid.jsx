// BlogGrid.jsx
import { BookOpen,  } from "lucide-react"
import BlogCard from "../../../../components/blogCard/BlogCard"

export default function BlogGrid({ hasSearched, blogs }) {


    const NoBlogs = () => (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <BookOpen size={48} className="mb-4 text-[#0080ff]" />
            <h2 className="text-2xl font-semibold text-white mb-2">No Articles Found</h2>
            <p className="max-w-xs text-gray-400">Try adjusting your search filters or check back later for new content.</p>
        </div>
    )

    const PromptSearch = () => (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <BookOpen size={48} className="mb-4 text-[#0080ff]" />
            <h2 className="text-2xl font-semibold text-white mb-2">Discover Articles</h2>
            <p className="max-w-xs text-gray-400">Search by keyword or filter by category to find repair guides and tech tips.</p>
        </div>
    )

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {hasSearched ? (
                    blogs.length ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NoBlogs />
                    )
                ) : (
                    <PromptSearch />
                )}
            </div>
        </div>
    )
}