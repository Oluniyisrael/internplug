import { useState, useEffect } from 'react'
import UserRequestsHero from './assets/UserRequestsHero'
import UserRequestsStats from './assets/UserRequestsStats'
import UserRequestsSearchBar from './assets/UserRequestsSearchBar'
import UserRequestsTable from './assets/UserRequestsTable'
export default function UserRequests() {
    const [filter, setFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [pagination, setPagination] = useState({
        page: 1,
        itemsPerPage: 5

    })
    const allRequests = [
        { id: 1, device: "MacBook Pro", issue: "Screen replacement", engineer: "John Smith", status: "In Progress", date: "Feb 14, 2026", avatar: "JS", priority: "High", estimatedCompletion: "Feb 16, 2026" },
        { id: 2, device: "iPhone 14", issue: "Battery replacement", engineer: "Sarah Johnson", status: "Pending", date: "Feb 13, 2026", avatar: "SJ", priority: "Medium", estimatedCompletion: "Feb 18, 2026" },
        { id: 3, device: "Dell XPS", issue: "Water damage repair", engineer: "Mike Chen", status: "Completed", date: "Feb 10, 2026", avatar: "MC", priority: "High", estimatedCompletion: "Feb 12, 2026" },
        { id: 4, device: "Samsung S23", issue: "Cracked screen", engineer: "Emily Davis", status: "Cancelled", date: "Feb 8, 2026", avatar: "ED", priority: "Low", estimatedCompletion: "N/A" },
        { id: 5, device: "HP Pavilion", issue: "Hard drive replacement", engineer: "Alex Brown", status: "In Progress", date: "Feb 12, 2026", avatar: "AB", priority: "Medium", estimatedCompletion: "Feb 15, 2026" },
        { id: 6, device: "iPad Pro", issue: "Charging port repair", engineer: "Lisa Wang", status: "Completed", date: "Feb 5, 2026", avatar: "LW", priority: "Low", estimatedCompletion: "Feb 7, 2026" },
        { id: 7, device: "Gaming PC", issue: "Graphics card upgrade", engineer: "David Lee", status: "Pending", date: "Feb 15, 2026", avatar: "DL", priority: "High", estimatedCompletion: "Feb 20, 2026" },
        { id: 8, device: "MacBook Air", issue: "Keyboard replacement", engineer: "John Smith", status: "Completed", date: "Feb 3, 2026", avatar: "JS", priority: "Medium", estimatedCompletion: "Feb 5, 2026" },

    ]
    const statusCounts = {
        all: allRequests.length,
        pending: allRequests.filter(r => r.status === "Pending").length,
        'in-progress': allRequests.filter(r => r.status === "In Progress").length,
        completed: allRequests.filter(r => r.status === "Completed").length,
        cancelled: allRequests.filter(r => r.status === "Cancelled").length,

    }
    const filteredRequests = allRequests.filter(request => {
        const matchesFilter = filter === 'all' || request.status.toLowerCase().replace(' ', '-') === filter
        const matchesSearch =
            request.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
            request.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
            request.engineer.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesFilter && matchesSearch

    })
    const totalPages = Math.ceil(filteredRequests.length / pagination.itemsPerPage)
    const start = (pagination.page - 1) * pagination.itemsPerPage
    const end = start + pagination.itemsPerPage
    const paginatedRequests = filteredRequests.slice(start, end)
    const changePage = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return
        setPagination(prev => ({ ...prev, page: newPage }))
    }
    useEffect(() => {
        setPagination(prev => ({ ...prev, page: 1 }))
    }, [searchQuery, filter])
    return (
        <div className="space-y-6">
            <UserRequestsHero />
            <UserRequestsStats {...{ statusCounts, setFilter, filter }} />
            <UserRequestsSearchBar {...{ searchQuery, setSearchQuery, filter, setFilter }} />
            <UserRequestsTable filteredRequests={paginatedRequests} />
            {filteredRequests.length > 0 && (
                <div className="flex justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        Showing {start + 1} - {Math.min(end, filteredRequests.length)} of {filteredRequests.length} requests
                    </p>
                    <div className="flex gap-2">
                        <button onClick={() => changePage(pagination.page - 1)} disabled={pagination.page === 1} className="px-4 py-2 bg-[#1a1a2e]/80 border border-white/10 rounded-lg text-white hover:border-[#0080ff]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Previous
                        </button>
                        <span className="px-4 py-2 bg-gradient-to-r from-[#0080ff] to-[#0066cc] rounded-lg text-white font-medium">
                            {pagination.page}
                        </span>
                        <button onClick={() => changePage(pagination.page + 1)} disabled={pagination.page === totalPages} className="px-4 py-2 bg-[#1a1a2e]/80 border border-white/10 rounded-lg text-white hover:border-[#0080ff]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
