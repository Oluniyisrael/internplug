import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', type: 'student' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill in all required fields.')
            return
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
            toast.success('Message sent! We\'ll reply within one business day.')
        }, 1400)
    }

    if (submitted) {
        return (
            <div className="bg-[#143a33] border border-[#35d399]/30 rounded-2xl p-12 text-center">
                <CheckCircle className="w-12 h-12 text-[#35d399] mx-auto mb-4" />
                <h3 className="text-[#eef3ef] font-bold text-xl mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Message received</h3>
                <p className="text-[#86ab9f] text-sm">We'll get back to you at <span className="text-[#eef3ef]">{form.email}</span> within one business day.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-8 space-y-5">
            {/* Type selector */}
            <div className="flex gap-2">
                {['student', 'employer', 'other'].map(type => (
                    <button
                        key={type}
                        type="button"
                        onClick={() => setForm({ ...form, type })}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all capitalize ${form.type === type ? 'bg-[#35d399] text-[#0b1f1c] border-[#35d399]' : 'border-[#1f5346] text-[#86ab9f] hover:border-[#35d399]'}`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-[#86ab9f] text-xs font-medium mb-2">Full name *</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Adaeze Okonkwo"
                        className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-[#86ab9f] text-xs font-medium mb-2">Email address *</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="adaeze@email.com"
                        className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-[#86ab9f] text-xs font-medium mb-2">Subject</label>
                <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors"
                >
                    <option value="">Select a topic</option>
                    <option value="account">Account or profile issue</option>
                    <option value="application">Application tracker problem</option>
                    <option value="matching">Matching & listings</option>
                    <option value="employer">Employer / listing enquiry</option>
                    <option value="partnership">Partnership or press</option>
                    <option value="other">Something else</option>
                </select>
            </div>

            <div>
                <label className="block text-[#86ab9f] text-xs font-medium mb-2">Message *</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="w-full bg-[#0b1f1c] border border-[#1f5346] text-[#eef3ef] placeholder-[#3a5a52] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#35d399] transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#f5c400] text-[#0b1f1c] font-bold py-4 rounded-xl hover:bg-[#ffd633] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
                {loading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                    </span>
                ) : (
                    <>Send message <Send className="w-4 h-4" /></>
                )}
            </button>
        </form>
    )
}
