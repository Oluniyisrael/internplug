import { Filter, Search } from "lucide-react"

export default function UserRequestsSearchBar({ searchQuery, setSearchQuery, filter, setFilter }) {

    const statuses = [
        { label: "All", value: "all" },
        { label: "Pending", value: "pending" },
        { label: "In Progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" }
    ]

    return (
        <div className="flex flex-col sm:flex-row gap-4">

            <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Search by device, issue, or engineer..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-[#1a1a2e]/80 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0080ff]/50 transition-colors" />
            </div>

            <div className="relative">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="appearance-none bg-[#1a1a2e]/80 border border-white/10 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-[#0080ff]/50 transition-colors pr-10">
                    {statuses.map(status => (
                        <option key={status.value} value={status.value} className="bg-[#1a1a2e]">
                            {status.label}
                        </option>
                    ))}
                </select>

                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

        </div>
    )
}
