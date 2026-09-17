// BlogHeader.jsx
export default function BlogHeader({ }) {
    return (
        <div className="relative min-h-[60vh] bg-[radial-gradient(150%_163%_at_50%_90.6%,#0a0712_25.6757%,#100b1d_38.2883%,#21104b_44.1441%,#243c91_50.7848%,#85dbf2_65.8643%)] overflow-hidden">
            {/* Animated gradient overlays */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#0080ff] opacity-20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/3 -left-48 w-[32rem] h-[32rem] bg-[#243c91] opacity-15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20" data-aos="fade-up">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium text-[#0080ff]">NIWTS BLOG</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Repair <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Insights</span> & Tech Tips
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Expert guides, repair tips, and industry insights to help you maintain and fix your devices
                    </p>
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
    )
}