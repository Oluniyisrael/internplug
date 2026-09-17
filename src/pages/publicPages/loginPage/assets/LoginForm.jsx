// LoginForm.jsx
import { Link } from 'react-router-dom'

export default function LoginForm({ loginData, setLoginData, submitingFormState, setSubmitingFormState }) {
    return (
        <div className="min-h-screen flex items-center px-4 sm:px-0">
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Welcome Back</h2>
                    <p className="text-sm text-gray-600 mb-6">Sign in to your NIWTS account</p>

                    <div className="flex flex-col gap-4">
                        <input type="email" value={loginData.email} onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email Address" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

                        <input type="password" value={loginData.password} onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))} placeholder="Password" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" onKeyDown={(e) => { if (e.key === "Enter") setSubmitingFormState((prev) => ({ ...prev, loggingIn: true })) }} />

                        <div className="flex gap-2 sm:gap-0 flex-col sm:flex-row items-center sm:justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 text-[#0080ff] rounded" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <Link to="/reset-password" className="text-[#0080ff] hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, loggingIn: true }))} disabled={submitingFormState.loggingIn} className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                            {submitingFormState.loggingIn ? 'Signing In...' : 'Sign In'}
                        </button>

                        <p className="text-center text-sm text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-[#0080ff] hover:underline font-semibold">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}