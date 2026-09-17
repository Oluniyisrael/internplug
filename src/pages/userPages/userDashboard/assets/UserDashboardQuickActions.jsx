import { Wrench, MessageSquare, TrendingUp, Calendar, User } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function UserDashboardQuickActions({ }) {
    const quickActions = [
        { label: "Find Engineer", icon: Wrench, link: "/user/find-engineers", color: "from-[#0080ff] to-[#0066cc]" },
        { label: "Track Repair", icon: TrendingUp, link: "/user/requests", color: "from-[#243c91] to-[#1B2B4D]" },
        { label: "Messages", icon: MessageSquare, link: "/user/messages", color: "from-[#0080ff] to-[#0066cc]" },
        { label: "Profile", icon: User, link: "/user/profile", color: "from-[#243c91] to-[#1B2B4D]" },
    ]
    return (
        <div>
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                    <Link to={action.link}>
                        <button key={index} className={`bg-gradient-to-r ${action.color} w-full cursor-pointer p-6 rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-xl`}>
                            <action.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                            <p className="text-white font-semibold text-sm">{action.label}</p>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}