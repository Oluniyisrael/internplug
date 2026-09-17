import { Linkedin, Twitter } from 'lucide-react'

export default function AboutTeam({ }) {
    const team = [
        {
            name: "David Martinez",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
            bio: "Former hardware engineer with 10+ years of experience. Founded NIWTS to revolutionize device repair industry.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Oluniyi Israel",
            role: "Chief Technology Officer",
            image: "https://oluniyisrael.vercel.app/assets/me-CatJeSrQ.jpg",
            bio: "Tech innovator passionate about building platforms that connect people and solve real-world problems.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Michael Chen",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            bio: "Operations expert ensuring smooth experiences for both customers and engineers on our platform.",
            linkedin: "#",
            twitter: "#"
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Customer Success",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            bio: "Dedicated to making every customer interaction exceptional and building lasting relationships.",
            linkedin: "#",
            twitter: "#"
        }
    ]

    return (
        <div className="relative bg-gradient-to-b from-[#0a0712] via-[#100b1d] to-[#0a0712] py-20 lg:py-32 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0080ff]/30 bg-[#0080ff]/10 backdrop-blur-sm mb-6">
                        <span className="text-sm font-medium text-[#0080ff]">Leadership Team</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Meet the <span className="bg-gradient-to-r from-[#0080ff] to-[#85dbf2] bg-clip-text text-transparent">Team</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        The passionate people behind NIWTS, working every day to make device repairs better for everyone
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="group">
                            <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#0080ff]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                                {/* Image */}
                                <div className="relative overflow-hidden">
                                    <img src={member.image} alt={member.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0712] via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-[#0080ff] text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                                    {/* Social links */}
                                    <div className="flex gap-3">
                                        <a href={member.linkedin} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all">
                                            <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#0080ff]" />
                                        </a>
                                        <a href={member.twitter} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0080ff]/20 hover:border-[#0080ff]/40 transition-all">
                                            <Twitter className="w-4 h-4 text-gray-400 group-hover:text-[#0080ff]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}