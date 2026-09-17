import { Link } from "react-router-dom";
import { Wrench, Plus, Filter, Search, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react'


export default function UserRequestsHero({ }) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">My Repair Requests</h1>
                <p className="text-gray-400">View and manage all your device repair requests</p>
            </div>
            <Link to="/user/requests/create-request">
                <button className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-[#0080ff]/30 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    New Request
                </button>
            </Link>
        </div>

    )
}