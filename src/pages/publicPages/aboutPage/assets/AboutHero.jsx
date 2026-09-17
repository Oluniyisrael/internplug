import { Wrench, Users, Shield, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function CountUp({ end, suffix = "", start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime = null;
        const duration = 2000;

        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [start, end]);

    return (
        <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            {count.toLocaleString()}{suffix}
        </div>
    );
}

export default function AboutHero() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const verifiedEngineers = 34;
    const repairedDevices = 1237;
    const satisfactionRate = 86;
    const citiesAvailable = 14;

    return (
        <div ref={ref} className="relative min-h-screen bg-[radial-gradient(150%_163%_at_50%_90.6%,#0a0712_25.6757%,#100b1d_38.2883%,#21104b_44.1441%,#243c91_50.7848%,#85dbf2_65.8643%)] overflow-hidden">
            {/* Animated gradient overlays */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#0080ff] opacity-20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/3 -left-48 w-[32rem] h-[32rem] bg-[#243c91] opacity-15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                {/* Main content */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <Wrench className="w-4 h-4 text-[#0080ff]" />
                        <span className="text-sm font-medium text-[#0080ff]">About NIWTS</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Connecting People with <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Expert Solutions</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to make device repairs accessible, affordable, and trustworthy by connecting customers with verified hardware engineers across the globe.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <CountUp end={verifiedEngineers} /*suffix="+"*/ start={inView} />
                        <p className="text-gray-400">Verified Engineers</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Wrench className="w-8 h-8 text-gray-200" />
                        </div>
                        <CountUp end={repairedDevices} /*suffix="+"*/ start={inView} />
                        <p className="text-gray-400">Devices Repaired</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0080ff] to-[#0066cc] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0080ff]/50">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <CountUp end={satisfactionRate} suffix="%" start={inView} />
                        <p className="text-gray-400">Satisfaction Rate</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#243c91] to-[#1B2B4D] flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Award className="w-8 h-8 text-gray-200" />
                        </div>
                        <CountUp end={citiesAvailable} /*suffix="+"*/ start={inView} />
                        <p className="text-gray-400">Cities Available</p>
                    </div>
                </div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>
    );
}
