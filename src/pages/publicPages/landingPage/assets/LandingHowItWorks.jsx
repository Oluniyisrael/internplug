import { useEffect, useRef, useState } from 'react'
import { UserCircle, Sparkles, Send, BarChart3 } from 'lucide-react'

const steps = [
    {
        icon: UserCircle,
        number: "01",
        title: "Build your profile",
        description: "Add your school, course, skills, interests, and upload your CV. Your profile is what InternPlug uses to find the right fit — not just keywords.",
    },
    {
        icon: Sparkles,
        number: "02",
        title: "Get matched",
        description: "Our matching engine evaluates your profile against every verified listing and ranks opportunities by how well they fit — automatically.",
    },
    {
        icon: Send,
        number: "03",
        title: "Apply in one click",
        description: "Save internships you like, then apply directly with your profile and CV pre-attached. No chasing emails or separate portals.",
    },
    {
        icon: BarChart3,
        number: "04",
        title: "Track everything",
        description: "Follow every application from the moment you apply — through shortlisted, interview, accepted, or closed — all in one place.",
    },
]

const PATH =
    "M60 260 C 130 300, 210 280, 280 200 S 390 100, 530 120 S 650 170, 720 100 S 840 20, 960 50 S 1070 120, 1140 80"

const DOTS = [
    { cx: 60,   cy: 260 },
    { cx: 530,  cy: 120 },
    { cx: 720,  cy: 100 },
    { cx: 1140, cy: 80  },
]

const CARD_X_PCT  = [0.05, 0.44, 0.60, 0.95]
const CARD_BELOW  = [true, false, true, false]

export default function LandingHowItWorks({ howItWorksRef }) {
    const sectionRef = useRef(null)
    const pathRef    = useRef(null)

    const [progress, setProgress] = useState(0)
    const [pathLen,  setPathLen]  = useState(0)

    /* Measure SVG path once mounted */
    useEffect(() => {
        if (pathRef.current) {
            setPathLen(pathRef.current.getTotalLength())
        }
    }, [])

    /* Scroll driver */
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        let ticking = false

        const update = () => {
            const rect             = section.getBoundingClientRect()
            const distanceScrolled = Math.max(0, -rect.top)
            const animationDistance = section.offsetHeight - window.innerHeight

            if (animationDistance <= 0) { setProgress(0); return }

            setProgress(Math.min(Math.max(distanceScrolled / animationDistance, 0), 1))
            ticking = false
        }

        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(update)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', update)
        update()

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', update)
        }
    }, [])

    const ease = (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2

    const dashOffset = pathLen * (1 - progress)

    const getCardAnimation = (index) => {
        const start = index * 0.25
        const end   = start + 0.16

        if (progress < start)  return { visible: false, progress: 0 }
        if (progress >= end)   return { visible: true,  progress: 1 }

        return {
            visible:  true,
            progress: ease(Math.min(Math.max((progress - start) / (end - start), 0), 1)),
        }
    }

    return (
        /*
         * KEY FIX: the section itself must NOT have overflow:hidden.
         * Sticky only works when no ancestor between the sticky element
         * and the scroll container has overflow set to hidden or auto.
         *
         * The sticky child uses inline style — Tailwind's `sticky` class
         * is fine, but we also guard with position:sticky explicitly.
         */
        <section
            ref={sectionRef}
            id="how-it-works"
            /* ⚠️ NO overflow class here — that kills sticky */
            className="relative bg-[#0b1f1c]"
            style={{ height: '400vh' }}
        >
            {/* ── STICKY VIEWPORT ── */}
            <div
                className="w-full"
                style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    /* forward the external scroll-to ref onto this element */
                    ...(howItWorksRef ? {} : {}),
                }}
                ref={howItWorksRef}
            >
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#35d399] opacity-[0.025] rounded-full blur-[120px] pointer-events-none" />

                {/* ── CONTENT ── */}
                <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 lg:px-20">

                    {/* Header */}
                    <div className="text-center mb-6">
                        <p className="text-[#35d399] font-semibold text-sm mb-2 tracking-wide">
                            How InternPlug works
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#eef3ef]"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            From profile to placement
                        </h2>
                        <p className="text-[#86ab9f] mt-3 max-w-md mx-auto text-sm">
                            Four steps between you and an internship that actually makes sense for your career.
                        </p>
                    </div>

                    {/* ── PATH + CARDS ── */}
                    <div
                        className="relative w-full max-w-6xl mx-auto"
                        style={{ height: '58vh' }}
                    >
                        {/* SVG */}
                        <svg
                            viewBox="0 0 1200 320"
                            className="absolute inset-0 w-full h-full overflow-visible"
                            preserveAspectRatio="xMidYMid meet"
                            fill="none"
                        >
                            {/* Faint track */}
                            <path
                                d={PATH}
                                stroke="#1f5346"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* Animated fill */}
                            <path
                                ref={pathRef}
                                d={PATH}
                                stroke="#35d399"
                                strokeWidth="5"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray:  pathLen || 9999,
                                    strokeDashoffset: pathLen ? dashOffset : 9999,
                                    filter: 'drop-shadow(0 0 6px rgba(53,211,153,0.5))',
                                }}
                            />

                            {/* Step dots */}
                            {DOTS.map((dot, i) => {
                                const card = getCardAnimation(i)
                                return (
                                    <circle
                                        key={i}
                                        cx={dot.cx}
                                        cy={dot.cy}
                                        r="10"
                                        fill={card.progress >= 1 ? '#35d399' : '#143a33'}
                                        stroke={card.progress >= 1 ? '#35d399' : '#1f5346'}
                                        strokeWidth="3"
                                        style={{
                                            filter: card.progress >= 1
                                                ? 'drop-shadow(0 0 8px rgba(53,211,153,0.8))'
                                                : 'none',
                                        }}
                                    />
                                )
                            })}
                        </svg>

                        {/* Step cards */}
                        {steps.map((step, i) => {
                            const Icon  = step.icon
                            const card  = getCardAnimation(i)
                            const isBelow = CARD_BELOW[i]
                            const x     = CARD_X_PCT[i] * 100

                            const rotation  = (isBelow ? 7 : -7) * (1 - card.progress)
                            const translateY = (isBelow ? 45 : -45) * (1 - card.progress)

                            return (
                                <div
                                    key={i}
                                    className="absolute w-[220px] md:w-[240px]"
                                    style={{
                                        left:      `${x}%`,
                                        top:       isBelow ? '52%' : '8%',
                                        transform: `translateX(-50%) translateY(${translateY}px) rotate(${rotation}deg)`,
                                        opacity:   card.visible ? Math.min(1, card.progress * 3) : 0,
                                        pointerEvents: card.visible ? 'auto' : 'none',
                                        zIndex: 20,
                                        willChange: 'transform, opacity',
                                    }}
                                >
                                    <div className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-5 shadow-2xl hover:border-[#35d399]/40 transition-colors">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${i % 2 === 0 ? 'bg-[#35d399]/15' : 'bg-[#f5c400]/15'}`}>
                                            <Icon className={`w-4 h-4 ${i % 2 === 0 ? 'text-[#35d399]' : 'text-[#f5c400]'}`} />
                                        </div>
                                        <div className="flex items-start justify-between mb-2">
                                            <h3
                                                className="text-[#eef3ef] font-bold text-sm leading-snug pr-2"
                                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                            >
                                                {step.title}
                                            </h3>
                                            <span
                                                className="text-[#1f5346] font-black text-xl flex-shrink-0"
                                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                            >
                                                {step.number}
                                            </span>
                                        </div>
                                        <p className="text-[#86ab9f] text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    style={{ opacity: progress >= 0.95 ? 0 : 0.7, transition: 'opacity 0.3s' }}
                >
                    <span className="text-[#86ab9f] text-xs">Scroll to explore</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-[#35d399]/60 to-transparent animate-pulse" />
                </div>
            </div>
        </section>
    )
}