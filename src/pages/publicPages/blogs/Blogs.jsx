// Blogs.jsx (main page)
import Navbar from "../../../components/navbar/Navbar"
import BlogsHeader from "./assets/BlogsHeader"
import Footer from "../../../components/footer/Footer"
import BlogsSearchBar from "./assets/BlogsSearchBar"
import BlogsGrid from "./assets/BlogsGrid"
import { useEffect, useState } from "react"
import DemoBlogCategories from "../../../demoData/DemoBlogCategories"
import DemoTags from "../../../demoData/DemoTags"
import DemoBlogs from "../../../demoData/DemoBlogs"

export default function Blogs({ }) {
    const [blogs, setBlogs] = useState([])
    const [hasSearched, setHasSearched] = useState(false)
    const [searchData, setSearchData] = useState({
        name: "",
        category: "",
        tags: []
    })
    const [pagination, setPagination] = useState({
        page: 1,
        itemsPerPage: 6,
        totalItems: 1
    })
    const [isSearching, setIsSearching] = useState(true)

    const searchBlogs = (page) => {
        const filteredBlogs = DemoBlogs.filter(blog =>
            (searchData.name === "" || blog.title.toLowerCase().includes(searchData.name.toLowerCase())) &&
            (searchData.category === "" || blog.category === searchData.category) &&
            (searchData.tags.length === 0 || searchData.tags.every(tag => blog.tags.includes(tag)))
        )

        setPagination(prev => ({ ...prev, totalItems: filteredBlogs.length, page }))
        const start = (page - 1) * pagination.itemsPerPage
        const end = start + pagination.itemsPerPage
        setBlogs(filteredBlogs.slice(start, end))
    }

    useEffect(() => {
        if (isSearching) {
            setTimeout(() => {
                setIsSearching(false)
                setHasSearched(true)
                searchBlogs(1)
            }, 500)
        }
    }, [isSearching])

    return (
        <div className="w-full overflow-hidden bg-[#0a0712]">
            {/* <Navbar /> */}
            <BlogsHeader />
            {/* <FeaturedArticle /> */}
            <BlogsSearchBar {...{ searchData, setSearchData, isSearching, setIsSearching, setPagination, categories: DemoBlogCategories, tags: DemoTags }} />
            <BlogsGrid {...{ hasSearched, blogs }} />
            
            {/* Pagination */}
            {blogs.length > 0 && hasSearched && (
                <div className="flex items-center justify-center gap-4 py-12">
                    <button onClick={() => searchBlogs(pagination.page - 1)} disabled={pagination.page === 1} className={`px-6 py-3 rounded-lg font-semibold transition-all ${pagination.page === 1 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-[#0080ff] border border-white/20'}`}>
                        Previous
                    </button>
                    <span className="text-white">
                        Page <strong>{pagination.page}</strong> of <strong>{Math.ceil(pagination.totalItems / pagination.itemsPerPage)}</strong>
                    </span>
                    <button onClick={() => searchBlogs(pagination.page + 1)} disabled={pagination.page === Math.ceil(pagination.totalItems / pagination.itemsPerPage)} className={`px-6 py-3 rounded-lg font-semibold transition-all ${pagination.page === Math.ceil(pagination.totalItems / pagination.itemsPerPage) ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-[#0080ff] border border-white/20'}`}>
                        Next
                    </button>
                </div>
            )}
            
            {/* <Footer /> */}
        </div>
    )
}