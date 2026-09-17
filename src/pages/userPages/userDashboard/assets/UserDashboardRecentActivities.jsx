import { Wrench, CheckCircle, DollarSign, MessageSquare, Star, } from 'lucide-react'

export default function UserDashboardRecentActivities({ }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Reviews */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Your Recent Reviews</h3>
                <div className="space-y-4">
                    {[
                        { engineer: "John Smith", rating: 5, comment: "Excellent work! Very professional.", date: "2 days ago" },
                        { engineer: "Sarah Johnson", rating: 4, comment: "Good service, quick turnaround.", date: "1 week ago" },
                    ].map((review, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex justify-between items-start mb-2">
                                <p className="text-white font-medium">{review.engineer}</p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{review.comment}</p>
                            <p className="text-gray-500 text-xs">{review.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {[
                        { action: "Request submitted", detail: "MacBook Pro screen repair", time: "2 hours ago", icon: Wrench },
                        { action: "Engineer assigned", detail: "John Smith accepted your request", time: "5 hours ago", icon: CheckCircle },
                        { action: "Message received", detail: "New message from Sarah Johnson", time: "1 day ago", icon: MessageSquare },
                        { action: "Payment processed", detail: "₦15,000 for iPhone repair", time: "3 days ago", icon: DollarSign },
                    ].map((activity, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#0080ff]/20 flex items-center justify-center flex-shrink-0">
                                <activity.icon className="w-5 h-5 text-[#0080ff]" />
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-medium text-sm">{activity.action}</p>
                                <p className="text-gray-400 text-sm">{activity.detail}</p>
                                <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}