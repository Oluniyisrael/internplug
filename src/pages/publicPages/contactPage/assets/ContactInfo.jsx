import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const info = [
    { icon: Mail, label: "Email", value: "hello@internplug.ng", note: "We reply within one business day" },
    { icon: MapPin, label: "Location", value: "Abuja, Nigeria", note: "Serving students nationwide" },
    { icon: Clock, label: "Response time", value: "Within 24 hours", note: "Mon – Fri, 9am – 6pm WAT" },
    { icon: MessageCircle, label: "Social", value: "@internplug", note: "Twitter / X and Instagram" },
]

export default function ContactInfo() {
    return (
        <div className="space-y-4">
            {info.map((item, i) => {
                const Icon = item.icon
                return (
                    <div key={i} data-aos="fade-up" data-aos-delay={i * 80} className="bg-[#143a33] border border-[#1f5346] rounded-2xl p-5 flex items-start gap-4 hover:border-[#2a6b55] transition-all">
                        <div className="w-10 h-10 bg-[#35d399]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[#35d399]" />
                        </div>
                        <div>
                            <p className="text-[#86ab9f] text-xs font-medium mb-0.5">{item.label}</p>
                            <p className="text-[#eef3ef] font-semibold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.value}</p>
                            <p className="text-[#86ab9f] text-xs mt-0.5">{item.note}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
