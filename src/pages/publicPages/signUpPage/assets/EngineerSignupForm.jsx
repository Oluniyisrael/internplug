// EngineerSignupForm.jsx
import { Upload, MapPin, Award, Briefcase } from 'lucide-react'
import Select2 from "../../../../components/select/Select2"
import NumberCodes from '../../../../components/numberCodes/NumberCodes'
import { useRef } from 'react'

export default function EngineerSignupForm({ signupData, setSignupData, submitingFormState, setSubmitingFormState, currentStep, setCurrentStep }) {
    const specializations = [
        "Laptop Repair",
        "Mobile Repair",
        "Laptop and Mobile Repair",
    ]
    const workTypes = ["On-site", "Remote", "Pickup & Delivery"]

    const handleFileUpload = (e, field) => {
        const file = e.target.files[0]
        if (file) {
            setSignupData((prev) => ({ ...prev, [field]: file }))
        }
    }
    const containerRef = useRef(null)

    const renderStep1 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0a0712] mb-4">Basic Information</h3>

            <input type="text" value={signupData.fullName} onChange={(e) => setSignupData((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Full Legal Name" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

            <input type="text" value={signupData.businessName} onChange={(e) => setSignupData((prev) => ({ ...prev, businessName: e.target.value }))} placeholder="Business Name" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

            <input type="email" value={signupData.email} onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email Address" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

            <div className="flex gap-3 flex-col sm:flex-row">
                <Select2 value={signupData.phone.code} onChange={(e) => setSignupData((prev) => ({ ...prev, phone: { ...prev.phone, code: e.target.value } }))} className="border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 rounded-xl transition-colors sm:flex-4" options={NumberCodes} />
                <input type="tel" value={signupData.phone.number} onChange={(e) => setSignupData((prev) => ({ ...prev, phone: { ...prev.phone, number: e.target.value.replace(/[^0-9]/g, "").slice(0, 11) } }))} placeholder="Phone Number" maxLength={11} className="sm:flex-6 border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />
            </div>

            <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={signupData.location} onChange={(e) => setSignupData((prev) => ({ ...prev, location: e.target.value }))} placeholder="City, State" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 pl-12 pr-4 rounded-xl transition-colors" />
            </div>
            <button onClick={() => { setCurrentStep(2); containerRef.current.scrollTo({ top: 0, behavior: "smooth" }) }} className="w-full bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105">
                Next Step
            </button>
        </div>
    )

    // Step 2: Professional Info
    const renderStep2 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0a0712] mb-4">Professional Information</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Specialization</label>
                <Select2 value={signupData.specialization} name="specialization" onChange={(e) => setSignupData((prev) => ({ ...prev, specialization: e.target.value }))} className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" options={specializations.map((spec) => ({ label: spec, value: spec }))} />

            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <input type="number" value={signupData.yearsExperience} onChange={(e) => setSignupData((prev) => ({ ...prev, yearsExperience: e.target.value }))} placeholder="e.g., 5" min="0" max="50" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
                <div className="flex flex-wrap gap-3">
                    {workTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={signupData.workTypes.includes(type)} onChange={(e) => {
                                if (e.target.checked) {
                                    setSignupData((prev) => ({ ...prev, workTypes: [...prev.workTypes, type] }))
                                } else {
                                    setSignupData((prev) => ({ ...prev, workTypes: prev.workTypes.filter(t => t !== type) }))
                                }
                            }} className="w-4 h-4 text-[#0080ff] rounded" />
                            <span className="text-sm text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <textarea value={signupData.bio} onChange={(e) => setSignupData((prev) => ({ ...prev, bio: e.target.value.slice(0, 500) }))} placeholder="Brief bio about your experience and services..." rows={4} maxLength={500} className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none px-4 py-3 rounded-xl transition-colors resize-none" />
            <div className="text-right text-sm text-gray-500">{signupData.bio.length}/500</div>

            <div className="flex gap-3">
                <button onClick={() => { setCurrentStep(1); containerRef.current.scrollTo({ top: 0, behavior: "smooth" }) }} className="flex-1 border-2 border-gray-300 text-gray-700 h-12 rounded-xl font-semibold transition-all hover:bg-gray-50">
                    Back
                </button>
                <button onClick={() => { setCurrentStep(3); containerRef.current.scrollTo({ top: 0, behavior: "smooth" }) }} className="flex-1 bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105">
                    Next Step
                </button>
            </div>
        </div>
    )

    // Step 3: Verification Documents
    const renderStep3 = () => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#0a0712] mb-4">Verification Documents</h3>
            <p className="text-sm text-gray-600 mb-4">Upload required documents for verification</p>

            {/* Profile Photo */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#0080ff] transition-colors">
                <label className="flex flex-col items-center cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Profile Photo</span>
                    <span className="text-xs text-gray-500 mt-1">Clear face image (Required)</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'profilePhoto')} className="hidden" />
                    {signupData.profilePhoto && (
                        <span className="mt-2 text-xs text-[#0080ff]">✓ {signupData.profilePhoto.name}</span>
                    )}
                </label>
            </div>

            {/* Government ID */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#0080ff] transition-colors">
                <label className="flex flex-col items-center cursor-pointer">
                    <Award className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Government ID</span>
                    <span className="text-xs text-gray-500 mt-1">Driver's license, National ID, or Passport (Required)</span>
                    <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'governmentId')} className="hidden" />
                    {signupData.governmentId && (
                        <span className="mt-2 text-xs text-[#0080ff]">✓ {signupData.governmentId.name}</span>
                    )}
                </label>
            </div>

            {/* Certifications (Optional) */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#0080ff] transition-colors">
                <label className="flex flex-col items-center cursor-pointer">
                    <Briefcase className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">Certifications</span>
                    <span className="text-xs text-gray-500 mt-1">Technical certifications (Optional)</span>
                    <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, 'certifications')} className="hidden" />
                    {signupData.certifications && (
                        <span className="mt-2 text-xs text-[#0080ff]">✓ {signupData.certifications.name}</span>
                    )}
                </label>
            </div>

            {/* Password */}
            <input type="password" value={signupData.password} onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))} placeholder="Password (min 8 characters)" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

            <input type="password" value={signupData.confirmPassword} onChange={(e) => setSignupData((prev) => ({ ...prev, confirmPassword: e.target.value }))} placeholder="Confirm Password" className="w-full border-2 border-gray-300 focus:border-[#0080ff] outline-none h-12 px-4 rounded-xl transition-colors" />

            <div className="flex gap-3">
                <button onClick={() => { setCurrentStep(2); containerRef.current.scrollTo({ top: 0, behavior: "smooth" }) }} className="flex-1 border-2 border-gray-300 text-gray-700 h-12 rounded-xl font-semibold transition-all hover:bg-gray-50">
                    Back
                </button>
                <button onClick={() => setSubmitingFormState((prev) => ({ ...prev, creatingAccount: true }))} disabled={submitingFormState.creatingAccount} className="flex-1 bg-gradient-to-r from-[#0080ff] to-[#0066cc] text-white h-12 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                    {submitingFormState.creatingAccount ? 'Creating Account...' : 'Complete Signup'}
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-w-full grow p-8 bg-white rounded-3xl max-h-[calc(100vh-224px)] overflow-y-auto custom-scrollbar" ref={containerRef}>
            <h2 className="text-3xl font-bold mb-2 text-[#0a0712]">Engineer Registration</h2>
            <p className="text-sm text-gray-600 mb-6">Step {currentStep} of 3</p>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex gap-2">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className={`flex-1 h-2 rounded-full ${step <= currentStep ? 'bg-gradient-to-r from-[#0080ff] to-[#0066cc]' : 'bg-gray-200'}`} />
                    ))}
                </div>
            </div>

            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
        </div>
    )
}