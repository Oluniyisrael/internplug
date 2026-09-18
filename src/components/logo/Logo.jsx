export default function Logo({ size = "md" }) {
    const sizes = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl",
    }
    return (
        <div className={`flex items-center gap-2 ${sizes[size]} font-bold`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <div className="relative">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="#35d399" />
                    <path d="M8 22 L16 10 L24 22" stroke="#0b1f1c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16" cy="22" r="3" fill="#f5c400" />
                    <circle cx="10" cy="16" r="1.5" fill="#0b1f1c" />
                    <circle cx="22" cy="16" r="1.5" fill="#0b1f1c" />
                </svg>
            </div>
            <span className="text-[#eef3ef]">
                Intern<span className="text-[#f5c400]">Plug</span>
            </span>
        </div>
    )
}
