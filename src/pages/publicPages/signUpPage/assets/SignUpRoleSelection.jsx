// SignupRoleSelection.jsx
import { User, Wrench, X } from 'lucide-react'

export default function SignUpRoleSelection({ onSelectRole, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#0a0712] mb-2">Join NIWTS</h2>
                    <p className="text-gray-600">Choose how you want to sign up</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Signup */}
                    <button onClick={() => onSelectRole('user')} className="group relative bg-gradient-to-br from-[#0080ff]/10 to-[#85dbf2]/10 border-2 border-[#0080ff]/30 rounded-2xl p-8 hover:border-[#0080ff] transition-all hover:scale-105">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0a0712] mb-2">I Need Repairs</h3>
                        <p className="text-gray-600 text-sm">Find trusted engineers to fix my devices</p>
                    </button>

                    {/* Engineer Signup */}
                    <button onClick={() => onSelectRole('engineer')} className="group relative bg-gradient-to-br from-[#243c91]/10 to-[#1B2B4D]/10 border-2 border-[#243c91]/30 rounded-2xl p-8 hover:border-[#0080ff] transition-all hover:scale-105">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Wrench className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0a0712] mb-2">I'm an Engineer</h3>
                        <p className="text-gray-600 text-sm">Offer my repair services to customers</p>
                    </button>
                </div>
            </div>
        </div>
    )
}