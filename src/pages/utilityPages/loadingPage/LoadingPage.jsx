// LoadingPage.jsx
import { useEffect, useState } from 'react'
import Logo from '../../../components/logo/Logo'

export default function LoadingPage() {
    const [dots, setDots] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.')
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#0a0712] via-[#100b1d] to-[#0a0712] flex items-center justify-center overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0080ff] opacity-20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#85dbf2] opacity-20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#243c91] opacity-10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Logo with animation */}
                <div className="relative">
                    {/* Rotating ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-[#0080ff] border-r-[#0080ff] animate-spin" />
                    </div>
                    
                    {/* Logo container */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="animate-bounce-slow">
                            <Logo className="w-20 h-20" />
                        </div>
                    </div>
                </div>

                {/* Loading text */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-white">
                        Loading NIWTS Portal
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Please wait{dots}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0080ff] via-[#00bfff] to-[#85dbf2] animate-progress" />
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Styles */}
            <style >{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes progress {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }

                .animate-progress {
                    animation: progress 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}