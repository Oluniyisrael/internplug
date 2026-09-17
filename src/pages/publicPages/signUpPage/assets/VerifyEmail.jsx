// VerifyEmail.jsx (for signup)
export default function VerifyEmail({ signupData, submitingFormState, setSubmitingFormState, emailOTP, setEmailOTP }) {
    return (
        <div className="min-w-full grow p-8 bg-white rounded-3xl">
            <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Verify Your Email</h2>
            <p className="text-sm text-gray-600 mb-6">We've sent a verification code to {signupData.email}</p>

            <div className="flex flex-col gap-4">
                <input type="text" maxLength={6} placeholder="Enter 6-digit code" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors text-center text-2xl tracking-widest" onKeyDown={(e) => { if (e.key === "Enter") setSubmitingFormState((prev) => ({ ...prev, verifyingEmail: true })) }} onChange={(e) => { setEmailOTP(e.target.value) }} value={emailOTP} />

                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, verifyingEmail: true }))} disabled={submitingFormState.verifyingEmail} className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50">
                    {submitingFormState.verifyingEmail ? 'Verifying...' : 'Verify Email'}
                </button>

                <button className="text-sm text-[#0080ff] hover:underline">
                    Resend Code
                </button>
            </div>
        </div>
    )
}