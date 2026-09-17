import { Wrench, Clock, CheckCircle, DollarSign, MessageSquare, Star, TrendingUp, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function UserDashboardRecentRequests({  }) {
    const recentRequests = [
        { id: 1, device: "MacBook Pro", issue: "Screen replacement", engineer: "John Smith", status: "In Progress", date: "Feb 14, 2026", avatar: "JS" },
        { id: 2, device: "iPhone 14", issue: "Battery replacement", engineer: "Sarah Johnson", status: "Pending", date: "Feb 13, 2026", avatar: "SJ" },
        { id: 3, device: "Dell XPS", issue: "Water damage repair", engineer: "Mike Chen", status: "Completed", date: "Feb 10, 2026", avatar: "MC" },
    ]
    const getStatusColor = (status) => {
        switch (status) {
            case "In Progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
            case "Pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30"
            default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
        }
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Recent Requests</h2>
                <Link to={"/user/requests"} className=''>
                    <button className="text-[#0080ff] hover:underline text-sm font-medium cursor-pointer">View All</button>
                </Link>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="text-left p-3 text-gray-400 font-medium text-sm">Device</th>
                                <th className="text-left p-3 text-gray-400 font-medium text-sm">Issue</th>
                                <th className="text-left p-3 text-gray-400 font-medium text-sm">Engineer</th>
                                <th className="text-left p-3 text-gray-400 font-medium text-sm">Status</th>
                                <th className="text-left p-3 text-gray-400 font-medium text-sm">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {recentRequests.map((request) => (
                                <tr key={request.id} className="hover:bg-white/5 transition-colors min-w-50">
                                    <td className="p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#0080ff]/20 flex items-center justify-center min-w-10">
                                                <Wrench className="w-5 h-5 text-[#0080ff]" />
                                            </div>
                                            <span className="text-white font-medium min-w-30">{request.device}</span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-gray-400">
                                        <div className='min-w-30 '>
                                            {request.issue}
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] flex items-center justify-center text-white text-xs font-bold min-w-8">
                                                {request.avatar}
                                            </div>
                                            <span className="text-white min-w-20">{request.engineer}</span>
                                        </div>
                                    </td>
                                    <td className="p-3">
                                        <div className='min-w-25'>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border min-w-35 ${getStatusColor(request.status)}`}>
                                                {request.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-3 text-gray-400">
                                        <div className='min-w-30 '>
                                            {request.date}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}