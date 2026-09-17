import { Clock, Calendar, CheckCircle, XCircle } from 'lucide-react'

export default function UserRequestsStats({ statusCounts, setFilter, filter }) {
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4" >
            {
                [
                    { label: 'All', value: statusCounts.all, color: 'from-gray-500 to-gray-600', key: 'all' },
                    { label: 'Pending', value: statusCounts.pending, color: 'from-yellow-500 to-yellow-600', key: 'pending' },
                    { label: 'In Progress', value: statusCounts['in-progress'], color: 'from-blue-500 to-blue-600', key: 'in-progress' },
                    { label: 'Completed', value: statusCounts.completed, color: 'from-green-500 to-green-600', key: 'completed' },
                    { label: 'Cancelled', value: statusCounts.cancelled, color: 'from-red-500 to-red-600', key: 'cancelled' },
                ].map((stat) => (
                    <button key={stat.key} onClick={() => setFilter(stat.key)} className={`bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border rounded-2xl p-4 transition-all ${filter === stat.key ? 'border-[#0080ff] scale-105' : 'border-white/10 hover:border-white/20'}`
                    }>
                        <p className="text-gray-400 text-sm mb-1" > {stat.label} </p>
                        < p className="text-3xl font-bold text-white" > {stat.value} </p>
                    </button>
                ))}
        </div>
    )
}