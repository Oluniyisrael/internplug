import { Wrench, Clock, CheckCircle, DollarSign, MessageSquare, Star, TrendingUp, Calendar } from 'lucide-react'

export default function UserDashboardStats({ }) {
    const stats = [
        { label: "Active Requests", value: "3", icon: Clock, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10", textColor: "text-blue-500" },
        { label: "Completed Repairs", value: "12", icon: CheckCircle, color: "from-green-500 to-green-600", bgColor: "bg-green-500/10", textColor: "text-green-500" },
        { label: "Total Spent", value: "₦45,600", icon: DollarSign, color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10", textColor: "text-purple-500" },
        { label: "Unread Messages", value: "5", icon: MessageSquare, color: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/10", textColor: "text-orange-500" },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                            <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    )
}