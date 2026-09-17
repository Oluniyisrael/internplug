import { Wrench, Plus, Filter, Search, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react'

export default function UserRequestsTable({ filteredRequests }) {
       const getStatusColor = (status) => {
        switch (status) {
            case "In Progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
            case "Pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30"
            default: return "bg-red-500/20 text-red-400 border-red-500/30"
        }
    }
     const getStatusIcon = (status) => {
        switch (status) {
            case "In Progress": return <Clock className="w-4 h-4" />
            case "Pending": return <Calendar className="w-4 h-4" />
            case "Completed": return <CheckCircle className="w-4 h-4" />
            case "Cancelled": return <XCircle className="w-4 h-4" />
            default: return <Clock className="w-4 h-4" />
        }
    }
    return (
        <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Device</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Issue</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Engineer</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Status</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Date</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Est. Completion</th>
                            <th className="text-left p-4 text-gray-400 font-medium text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filteredRequests.length > 0 ? (
                            filteredRequests.map((request) => (
                                <tr key={request.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-[#0080ff]/20 flex items-center justify-center min-w-[40px]">
                                                <Wrench className="w-5 h-5 text-[#0080ff]" />
                                            </div>
                                            <span className="text-white font-medium whitespace-nowrap">{request.device}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        <div className="min-w-[120px]">{request.issue}</div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] flex items-center justify-center text-white text-xs font-bold min-w-[32px]">
                                                {request.avatar}
                                            </div>
                                            <span className="text-white whitespace-nowrap">{request.engineer}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium border inline-flex items-center gap-1.5 ${getStatusColor(request.status)}`}>
                                            {getStatusIcon(request.status)}
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-400 whitespace-nowrap">{request.date}</td>
                                    <td className="p-4 text-gray-400 whitespace-nowrap">{request.estimatedCompletion}</td>
                                    <td className="p-4">
                                        <button className="text-[#0080ff] hover:underline text-sm font-medium whitespace-nowrap">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="p-12 text-center">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-[#0080ff]/20 flex items-center justify-center">
                                            <Search className="w-8 h-8 text-[#0080ff]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium mb-1">No requests found</p>
                                            <p className="text-gray-400 text-sm">Try adjusting your search or filter criteria</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}