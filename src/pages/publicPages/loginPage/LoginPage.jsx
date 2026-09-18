import LoginForm from './assets/LoginForm'
import { Link } from 'react-router-dom'
import Logo from '../../../components/logo/Logo'

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0b1f1c] flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-6"><Logo /></Link>
                    <h1 className="text-3xl font-bold text-[#eef3ef] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Welcome back</h1>
                    <p className="text-[#86ab9f] text-sm">Log in to your InternPlug account</p>
                </div>
                <div className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-8">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
