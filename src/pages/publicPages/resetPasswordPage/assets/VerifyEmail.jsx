// VerifyEmail.jsx
export default function VerifyEmail({ resetFormData, setResetFormData, submitingFormState, setSubmitingFormState }) {
    return (
        <div className="min-w-full grow p-8">
            <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Reset Password</h2>
            <p className="text-sm text-gray-600 mb-6">Enter the email you used to register</p>
            <div className="flex flex-col gap-4">
                <input type="email" value={resetFormData.email} onChange={(e) => setResetFormData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email Address" className="border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSubmitingFormState((prev) => ({ ...prev, sendingCodeToEmail: true }))
                    }
                }} />
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, sendingCodeToEmail: true }))} disabled={submitingFormState.sendingCodeToEmail} className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {submitingFormState.sendingCodeToEmail ? 'Sending...' : 'Send Reset Code'}
                </button>
            </div>
        </div>
    )
}