import UserDashboardHero from './assets/UserDashboardHero'
import { useOutletContext } from 'react-router-dom'
import UserDashboardStats from './assets/UserDashboardStats'
import UserDashboardQuickActions from './assets/UserDashboardQuickActions'
import UserDashboardRecentRequests from './assets/UserDashboardRecentRequests'
import UserDashboardRecentActivities from './assets/UserDashboardRecentActivities.jsx'

export default function UserDashboard({ }) {
    const { user } = useOutletContext()
    console.log(user)
    return (
        <div className="space-y-8">
            <UserDashboardHero {...{ user }} />
            <UserDashboardStats />
            <UserDashboardQuickActions />
            <UserDashboardRecentRequests/>
            <UserDashboardRecentActivities/>
        </div>
    )
}