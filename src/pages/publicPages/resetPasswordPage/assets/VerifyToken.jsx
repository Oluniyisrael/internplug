// VerifyToken.jsx
export default function VerifyToken({ resetFormData, setResetFormData, submitingFormState, setSubmitingFormState }) {
    return (
        <div className="min-w-full grow p-8">
            <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Verify Token</h2>
            <p className="text-sm text-gray-600 mb-6">Enter the 6-digit code sent to {resetFormData.email}. Check spam folder if you don't find it in inbox</p>
            <div className="flex flex-col gap-4">
                <input type="text" value={resetFormData.token} onChange={(e) => setResetFormData((prev) => ({ ...prev, token: e.target.value.replace(/[^0-9]/g, "").slice(0, 6) }))} maxLength={6} placeholder="6-Digit Code" className="border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors text-center text-2xl tracking-widest" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSubmitingFormState((prev) => ({ ...prev, confirmingCodeFromEmail: true }))
                    }
                }} />
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, confirmingCodeFromEmail: true }))} disabled={submitingFormState.confirmingCodeFromEmail} className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {submitingFormState.confirmingCodeFromEmail ? 'Verifying...' : 'Verify Code'}
                </button>
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, sendingCodeToEmail: true }))} className="text-sm text-[#0080ff] hover:underline">
                    Resend Code
                </button>
            </div>
        </div>
    )
}