// UserSignupForm.jsx
import { MapPin } from 'lucide-react'
import NumberCodes from "../../../../components/numberCodes/NumberCodes"
import Select2 from "../../../../components/select/Select2"

export default function UserSignupForm({ signupData, setSignupData, submitingFormState, setSubmitingFormState }) {

    return (
        <div className="min-w-full grow p-8 bg-white rounded-3xl max-h-[calc(100vh-224px)] overflow-y-auto relative flex flex-col">
            <div className="flex-1 pb-20">
                <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Create Account</h2>
                <p className="text-sm text-gray-600 mb-6">Sign up as a customer</p>

                <div className="flex flex-col gap-4">
                    {/* Full Name */}
                    <input type="text" value={signupData.fullName} onChange={(e) => setSignupData((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Full Name" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

                    {/* Email */}
                    <input type="email" value={signupData.email} onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email Address" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

                    {/* Phone */}
                    <div className="flex gap-3 flex-col sm:flex-row">
                        <Select2 value={signupData.phone.code} onChange={(e) => setSignupData((prev) => ({ ...prev, phone: { code: e.target.value, number: prev.phone.number } }))} className="w-full border-2 border-gray-300 sm:flex-4 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" name={`Code`}
                            options={NumberCodes}
                        />
                        <input type="tel" value={signupData.phone.number} onChange={(e) => setSignupData((prev) => ({ ...prev, phone: { ...prev.phone, number: e.target.value.replace(/[^0-9]/g, "").slice(0, 11) } }))} placeholder="Phone Number" maxLength={11} className="w-full sm:flex-6 border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />
                    </div>

                    {/* Location */}
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" value={signupData.location} onChange={(e) => setSignupData((prev) => ({ ...prev, location: e.target.value }))} placeholder="City, State" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 pl-12 pr-4 rounded-xl transition-colors" />
                    </div>

                    {/* Password */}
                    <input type="password" value={signupData.password} onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))} placeholder="Password (min 8 characters)" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

                    {/* Confirm Password */}
                    <input type="password" value={signupData.confirmPassword} onChange={(e) => setSignupData((prev) => ({ ...prev, confirmPassword: e.target.value }))} placeholder="Confirm Password" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" onKeyDown={(e) => { if (e.key === "Enter") setSubmitingFormState((prev) => ({ ...prev, creatingAccount: true })) }} />
                </div>
            </div>

            {/* Fixed Submit Button */}
            <div className="sticky -bottom-10 left-0 right-0 bg-white pt-4 pb-8 border-t border-gray-200 -mt-12 ">
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, creatingAccount: true }))} disabled={submitingFormState.creatingAccount} className="w-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] hover:from-[#0066cc] hover:to-[#0080ff] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {submitingFormState.creatingAccount ? 'Creating Account...' : 'Create Account'}
                </button>
            </div>
        </div>
    )
}