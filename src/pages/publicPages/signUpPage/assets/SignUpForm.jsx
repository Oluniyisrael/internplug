import { useState } from 'react'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

export default function SignUpForm() {
    const [role, setRole] = useState('student')
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.info('Backend not connected yet — this is a demo UI.')
    }

    return (
        <div className="space-y-5">
            {/* Role selector */}
            <div className="grid grid-cols-2 gap-3">
                {[
                    { value: 'student', label: '🎓 I\'m a student' },
                    { value: 'employer', label: '🏢 I\'m an employer' },
                ].map(opt => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => setRole(opt.value)}
                        className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${role === opt.value ? 'bg-[#35d399]/20 border-[#35d399] text-[#35d399]' : 'border-[#1f5346] text-[#86ab9f] hover:border-[#2a6b55]'}`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-[#86ab9f] text-xs font-medium mb-2">Full name</label>
                    <input
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Adaeze Okonkwo"
                        className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                    />
                </div>
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
                            placeholder="Min. 8 characters"
                            className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                        />
                        <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86ab9f] hover:text-[#eef3ef]">
                            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold py-4 rounded-xl hover:bg-[#ffd633] transition-all cursor-pointer">
                    Create account <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#86ab9f] text-center">
                    By signing up you agree to our <Link to="/terms" className="text-[#35d399] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#35d399] hover:underline">Privacy Policy</Link>.
                </p>
                <p className="text-center text-[#86ab9f] text-sm">
                    Already have an account? <Link to="/login" className="text-[#35d399] hover:underline font-medium">Log in</Link>
                </p>
            </form>
        </div>
    )
}
