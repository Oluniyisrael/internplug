// SetNewPassword.jsx
export default function SetNewPassword({ resetFormData, setResetFormData, submitingFormState, setSubmitingFormState }) {
    return (
        <div className="min-w-full grow p-8">
            <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Set New Password</h2>
            <p className="text-sm text-gray-600 mb-6">Create a strong password for your account</p>
            <div className="flex flex-col gap-4">
                <input type="password" value={resetFormData.newPassword} onChange={(e) => setResetFormData((prev) => ({ ...prev, newPassword: e.target.value }))} placeholder="New Password (min 8 characters)" className="border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />
                <input type="password" value={resetFormData.confirmNewPassword} onChange={(e) => setResetFormData((prev) => ({ ...prev, confirmNewPassword: e.target.value }))} placeholder="Confirm New Password" className="border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSubmitingFormState((prev) => ({ ...prev, settingNewPassword: true }))
                    }
                }} />
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, settingNewPassword: true }))} disabled={submitingFormState.settingNewPassword} className="bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {submitingFormState.settingNewPassword ? 'Changing Password...' : 'Change Password'}
                </button>
            </div>
        </div>
    )
}