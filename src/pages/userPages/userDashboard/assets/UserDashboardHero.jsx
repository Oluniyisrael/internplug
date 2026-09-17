
export default function UserDashboardHero({user}) {

    return (
        <div className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.firstName}</h1>
                    <p className="text-blue-100">Here's what's happening with your repairs today</p>
                </div>
                <button className="px-6 py-3 bg-white text-[#0080ff] rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                    New Request
                </button>
            </div>
        </div>
    )
}