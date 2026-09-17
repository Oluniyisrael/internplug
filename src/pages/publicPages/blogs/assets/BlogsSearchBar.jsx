import { Search, Layers, Tag } from "lucide-react"
import { useState } from "react"
import Select2 from "../../../../components/select/Select2"

export default function BlogSearchBar({ searchData, setSearchData, isSearching, setIsSearching, setPagination, categories = [], tags = [] }) {
    const [focusField, setFocusField] = useState(null)
    return (
        <>
            <div className="relative bg-gradient-to-b from-[#0a0712] to-[#0a0712] py-12 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                            {/* Search by name */}
                            <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-3 transition-all ${focusField === "name" ? 'border-[#0080ff] bg-white/10' : 'border-white/10'}`}>
                                <Search className={`w-5 h-5 ${focusField === "name" ? 'text-[#0080ff]' : 'text-gray-400'}`} />
                                <input type="text" placeholder="Search articles..." value={searchData.name} onChange={(e) => setSearchData((prev) => ({ ...prev, name: e.target.value }))} onFocus={() => setFocusField("name")} onBlur={() => setFocusField(null)} className="w-full bg-transparent outline-none text-white placeholder-gray-500" onKeyDown={(e) => { if (e.key === "Enter") { setPagination(prev => ({ ...prev, page: 1 })); setIsSearching(true) } }} />
                            </div>

                            {/* Category using Select2 */}
                            <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-2 transition-all ${focusField === "category" ? 'border-[#0080ff] bg-white/10' : 'border-white/10'}`}>
                                <Layers className={`w-5 h-5 ${focusField === "category" ? 'text-[#0080ff]' : 'text-gray-400'}`} />

                                <div className="flex-1">
                                    <Select2
                                        name="category"
                                        value={searchData.category}
                                        options={[{ label: "All Categories", value: "" }, ...categories.map((item) => ({ label: item.name, value: item.name }))]}
                                        onChange={(e) => setSearchData((prev) => ({ ...prev, category: e.target.value }))}
                                        onFocus={() => setFocusField("category")}
                                        onBlur={() => setFocusField(null)}
                                        style={{ color: "#FFFFFF", dropdownBgColor: "#1a1a2e", optionColor: "#004179" }}
                                        className="w-full"
                                        onKeyDown={(e) => { if (e.key === "Enter") { setPagination(prev => ({ ...prev, page: 1 })); setIsSearching(true) } }}
                                    />
                                </div>
                            </div>

                            {/* Tags using Select2 */}
                            <div className="md:col-span-2   ">
                                <div className={`flex items-center gap-3 bg-white/5 border rounded-xl px-4 py-2 transition-all min-h-[52px] ${focusField === "tags" ? 'border-[#0080ff] bg-white/10' : 'border-white/10'}`}>
                                    <Tag className={`w-5 h-5 mt-1 flex-shrink-0 ${focusField === "tags" ? 'text-[#0080ff]' : 'text-gray-400'}`} />

                                    <div className="flex-1">
                                        <Select2
                                            name="tags"
                                            isMulti={true}
                                            value={searchData.tags}
                                            options={tags.map((item) => ({ label: item.name, value: item.name }))}
                                            onChange={(e) => setSearchData((prev) => ({ ...prev, tags: e.target.value }))}
                                            onFocus={() => setFocusField("tags")}
                                            onBlur={() => setFocusField(null)}
                                            style={{ color: "#FFFFFF", dropdownBgColor: "#1a1a2e", optionColor: "#004179" }}
                                            className="w-full"
                                        />

                                        {/* Selected Tags */}
                                        {/* <div className="flex flex-wrap gap-2 mt-2">
                                            {searchData.tags.map((tag) => (
                                                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0080ff]/20 border border-[#0080ff]/30 text-sm text-[#0080ff] whitespace-nowrap">
                                                    {tag}
                                                    <button onClick={() => setSearchData((prev) => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))} className="hover:text-white">×</button>
                                                </span>
                                            ))}
                                        </div> */} {/* interesting concept */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Search Button */}
                        <button onClick={() => { setPagination(prev => ({ ...prev, page: 1 })); setIsSearching(true) }} disabled={isSearching} className="w-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                            {isSearching ? 'Searching...' : 'Search Articles'}
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
