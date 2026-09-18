import { useState } from 'react'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

export default function LoginForm() {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.info('Backend not connected yet — this is a demo UI.')
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-[#86ab9f] text-xs font-medium mb-2">Email address</label>
                <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                />
            </div>
            <div>
                <label className="block text-[#86ab9f] text-xs font-medium mb-2">Password</label>
                <div className="relative">
                    <input
                        type={show ? 'text' : 'password'}
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        placeholder="••••••••"
                        className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                    />
                    <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86ab9f] hover:text-[#eef3ef]">
                        {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>
                <div className="flex justify-end mt-2">
                    <Link to="/reset-password" className="text-[#35d399] text-xs hover:underline">Forgot password?</Link>
                </div>
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold py-4 rounded-xl hover:bg-[#ffd633] transition-all cursor-pointer">
                Log in <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[#86ab9f] text-sm">
                Don't have an account? <Link to="/signup" className="text-[#35d399] hover:underline font-medium">Sign up free</Link>
            </p>
        </form>
    )
}
