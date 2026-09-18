import { useEffect, useRef, useState, useCallback } from 'react'
import { UserCircle, Sparkles, Send, BarChart3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
    {
        icon: UserCircle,
        number: '01',
        title: 'Build your profile',
        description:
            'Add your school, course, skills, interests, and upload your CV. Your profile is what InternPlug uses to find the right fit — not just keywords.',
        accent: 'green',
    },
    {
        icon: Sparkles,
        number: '02',
        title: 'Get matched',
        description:
            'Our matching engine evaluates your profile against every verified listing and ranks opportunities by how well they fit — automatically.',
        accent: 'yellow',
    },
    {
        icon: Send,
        number: '03',
        title: 'Apply in one click',
        description:
            'Save internships you like, then apply directly with your profile and CV pre-attached. No chasing emails or separate portals.',
        accent: 'green',
    },
    {
        icon: BarChart3,
        number: '04',
        title: 'Track everything',
        description:
            'Follow every application from the moment you apply — through shortlisted, interview, accepted, or closed — all in one place.',
        accent: 'yellow',
    },
]

/* ─── SVG path — dots evenly spread at ~60, 400, 800, 1140 ───
 *  Steps 2 & 3 are now ~400px apart instead of 190px.
 *  All cards sit above their dot, horizontally centred.
 * ─────────────────────────────────────────────────────────── */
const CURVE_PATH =
    'M60 300 C 120 340, 200 310, 280 240 S 360 150, 400 160 S 520 190, 600 160 S 700 110, 800 120 S 900 150, 960 120 S 1060 60, 1140 80'

const DOT_POSITIONS = [
    { x: 60,   y: 300 },
    { x: 400,  y: 160 },
    { x: 800,  y: 120 },
    { x: 1140, y: 80  },
]

/* all cards above their dot */
const CARD_BELOW = [false, false, false, false]

const MD_BREAKPOINT = 768

export default function LandingHowItWorks({ howItWorksRef }) {
    const sectionRef   = useRef(null)
    const pathRef      = useRef(null)
    const svgRef       = useRef(null)
    const containerRef = useRef(null)

    const [isMobile,      setIsMobile]      = useState(false)
    const [cardPositions, setCardPositions] = useState([])

    /* ── detect mobile ── */
    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth < MD_BREAKPOINT)
    }, [])

    useEffect(() => {
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [checkMobile])

    /* ── sync HTML card positions to SVG dot screen coords ── */
    useEffect(() => {
        if (isMobile) return

        function sync() {
            const svg       = svgRef.current
            const container = containerRef.current
            if (!svg || !container) return

            const containerRect = container.getBoundingClientRect()

            const positions = DOT_POSITIONS.map((dot) => {
                const pt  = svg.createSVGPoint()
                pt.x = dot.x
                pt.y = dot.y
                const ctm = svg.getScreenCTM()
                if (!ctm) return { left: '0px', top: '0px' }
                const screen = pt.matrixTransform(ctm)
                return {
                    left: `${screen.x - containerRect.left}px`,
                    top:  `${screen.y - containerRect.top -200}px`,
                }
            })

            setCardPositions(positions)
        }

        sync()
        window.addEventListener('resize', sync)
        return () => window.removeEventListener('resize', sync)
    }, [isMobile])

    /* ── GSAP animations ── */
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            if (isMobile) {
                /* ===== MOBILE: simple scroll-driven vertical reveal ===== */
                gsap.set('.hiw-mobile-step', { opacity: 0, y: 40 })
                gsap.set('.hiw-mobile-dot',  { scale: 0.4, opacity: 0 })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 20%',
                        end:   'bottom 80%',
                        scrub: 1,
                    },
                })

                steps.forEach((_, i) => {
                    const offset = i * 0.3
                    tl.to(`.hiw-mobile-dot-${i}`,  { scale: 1, opacity: 1, duration: 0.15, ease: 'back.out(2)' }, offset)
                      .to(`.hiw-mobile-step-${i}`,  { opacity: 1, y: 0,     duration: 0.25, ease: 'power3.out'  }, offset + 0.05)
                })
            } else {
                /* ===== DESKTOP: GSAP pin + path draw ===== */
                const path = pathRef.current
                if (!path) return

                const length = path.getTotalLength()

                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
                gsap.set('.hiw-card', { opacity: 0, y: 30 })
                gsap.set('.hiw-dot',  { scale: 0, opacity: 0, transformOrigin: 'center center' })

                /* fraction along path where each dot sits */
                const fractions = DOT_POSITIONS.map((dot) => {
                    let best = 0, bestDist = Infinity
                    const STEPS = 600
                    for (let i = 0; i <= STEPS; i++) {
                        const t  = (i / STEPS) * length
                        const pt = path.getPointAtLength(t)
                        const d  = Math.hypot(pt.x - dot.x, pt.y - dot.y)
                        if (d < bestDist) { bestDist = d; best = t }
                    }
                    return best / length
                })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start:   'top top',
                        end:     '+=2400',   /* how many px to scroll while pinned */
                        scrub:   1,
                        pin:     true,       /* ← the reference's key technique */
                    },
                })

                /* draw the path */
                tl.to(path, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)

                /* pop in each dot + card at its fraction position */
                fractions.forEach((frac, i) => {
                    tl.to(`.hiw-dot-${i}`,  { scale: 1, opacity: 1, duration: 0.06, ease: 'back.out(2)'  }, frac * 0.95)
                      .to(`.hiw-card-${i}`, { opacity: 1, y: 0,     duration: 0.12, ease: 'power3.out'   }, frac * 0.95)
                })
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [isMobile, cardPositions.length])   // re-run once positions are known

    /* ================================================================ */
    /* RENDER                                                            */
    /* ================================================================ */
    return (
        <section
            ref={(el) => {
                sectionRef.current = el
                // forward the scroll-to ref used by the hero CTA button
                if (howItWorksRef) howItWorksRef.current = el
            }}
            id="how-it-works"
            className="relative bg-[#0b1f1c]"
        >
            {/* ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#35d399] opacity-[0.025] blur-[120px]" />
            </div>

            {/* ================================================================ */}
            {/* MOBILE: stacked vertical steps                                   */}
            {/* ================================================================ */}
            {isMobile && (
                <div className="relative z-10 px-6 py-24">
                    {/* header */}
                    <div className="mb-14 text-center">
                        <p className="mb-2 text-sm font-semibold tracking-wide text-[#35d399]">
                            How InternPlug works
                        </p>
                        <h2 className="text-4xl font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            From profile to placement
                        </h2>
                        <p className="mx-auto mt-3 max-w-sm text-sm text-[#86ab9f]">
                            Four steps between you and an internship that actually makes sense.
                        </p>
                    </div>

                    {/* steps */}
                    <div className="relative pl-10">
                        {/* vertical track */}
                        <div className="absolute bottom-2 left-[18px] top-2 w-[3px] rounded-full bg-[#1f5346]" />

                        {steps.map((step, i) => {
                            const Icon = step.icon
                            const isGreen = step.accent === 'green'
                            return (
                                <div
                                    key={i}
                                    className={`hiw-mobile-step hiw-mobile-step-${i} relative mb-14 last:mb-0`}
                                >
                                    {/* dot on the track */}
                                    <div
                                        className={`hiw-mobile-dot hiw-mobile-dot-${i} absolute -left-10 top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 ${isGreen ? 'border-[#35d399] bg-[#35d399]/15' : 'border-[#f5c400] bg-[#f5c400]/15'}`}
                                    >
                                        <Icon className={`h-4 w-4 ${isGreen ? 'text-[#35d399]' : 'text-[#f5c400]'}`} />
                                    </div>

                                    <span className="absolute -right-2 -top-8 -z-10 font-bold text-[80px] leading-none text-white/[0.04]"
                                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {step.number}
                                    </span>

                                    <h3 className="font-bold text-[#eef3ef]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#86ab9f]">
                                        {step.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* ================================================================ */}
            {/* DESKTOP: GSAP-pinned curved path                                 */}
            {/* ================================================================ */}
            {!isMobile && (
                <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 py-24 md:px-12 lg:px-20">

                    {/* header */}
                    <div className="mb-12 text-center">
                        <p className="mb-2 text-sm font-semibold tracking-wide text-[#35d399]">
                            How InternPlug works
                        </p>
                        <h2 className="text-4xl font-bold text-[#eef3ef] md:text-5xl"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            From profile to placement
                        </h2>
                        <p className="mx-auto mt-3 max-w-md text-sm text-[#86ab9f]">
                            Four steps between you and an internship that actually makes sense for your career.
                        </p>
                    </div>

                    {/* path + cards container */}
                    <div
                        ref={containerRef}
                        className="relative mx-auto w-full max-w-6xl"
                        style={{ height: '58vh' }}
                    >
                        {/* SVG layer */}
                        <svg
                            ref={svgRef}
                            viewBox="0 0 1200 320"
                            className="absolute inset-0 h-full w-full overflow-visible"
                            preserveAspectRatio="xMidYMid meet"
                            fill="none"
                        >
                            {/* faint track */}
                            <path
                                d={CURVE_PATH}
                                stroke="#1f5346"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            {/* animated fill — GSAP drives strokeDashoffset */}
                            <path
                                ref={pathRef}
                                d={CURVE_PATH}
                                stroke="#35d399"
                                strokeWidth="5"
                                strokeLinecap="round"
                                style={{ filter: 'drop-shadow(0 0 6px rgba(53,211,153,0.5))' }}
                            />

                            {/* dots — GSAP drives scale + opacity */}
                            {DOT_POSITIONS.map((dot, i) => (
                                <circle
                                    key={i}
                                    className={`hiw-dot hiw-dot-${i}`}
                                    cx={dot.x}
                                    cy={dot.y}
                                    r="10"
                                    fill="#35d399"
                                    stroke="#0b1f1c"
                                    strokeWidth="3"
                                    style={{ filter: 'drop-shadow(0 0 8px rgba(53,211,153,0.8))' }}
                                />
                            ))}
                        </svg>

                        {/* HTML step cards — positioned to match their dot in screen space */}
                        {cardPositions.length === steps.length &&
                            steps.map((step, i) => {
                                const Icon    = step.icon
                                const isGreen = step.accent === 'green'

                                return (
                                    <div
                                        key={i}
                                        className={`hiw-card hiw-card-${i} absolute z-20 w-[220px] md:w-[240px]`}
                                        style={{
                                            left:      cardPositions[i].left,
                                            top:       cardPositions[i].top,
                                            /* center the card over its dot, always above */
                                            transform: 'translate(-50%, calc(-100% - 22px))',
                                        }}
                                    >
                                        <div className="rounded-2xl border border-[#1f5346] bg-[#143a33] p-5 shadow-2xl transition-colors hover:border-[#35d399]/40">
                                            {/* icon */}
                                            <div className={`mb-3 flex h-8 w-8 items-center justify-center rounded-lg ${isGreen ? 'bg-[#35d399]/15' : 'bg-[#f5c400]/15'}`}>
                                                <Icon className={`h-4 w-4 ${isGreen ? 'text-[#35d399]' : 'text-[#f5c400]'}`} />
                                            </div>

                                            {/* number + title */}
                                            <div className="mb-2 flex items-start justify-between">
                                                <h3 className="pr-2 text-sm font-bold leading-snug text-[#eef3ef]"
                                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {step.title}
                                                </h3>
                                                <span className="flex-shrink-0 text-xl font-black text-[#1f5346]"
                                                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                                    {step.number}
                                                </span>
                                            </div>

                                            <p className="text-xs leading-relaxed text-[#86ab9f]">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                    {/* scroll nudge — fades out once GSAP takes over */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                        <span className="text-xs text-[#86ab9f]">Scroll to explore</span>
                        <div className="h-8 w-px animate-pulse bg-gradient-to-b from-[#35d399]/60 to-transparent" />
                    </div>
                </div>
            )}
        </section>
    )
}