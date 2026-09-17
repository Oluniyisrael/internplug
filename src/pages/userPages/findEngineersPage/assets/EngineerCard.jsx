import { Star, Clock, Zap, CheckCircle, XCircle } from "lucide-react";

export default function EngineerCard({ engineer, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl p-4 border transition-all duration-200 
        ${isSelected
          ? "border-[#0080ff] bg-[#0080ff]/10 shadow-lg shadow-[#0080ff]/10"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }
      `}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ backgroundColor: engineer.avatarColor }}
        >
          {engineer.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[#f0edfa] font-semibold text-sm truncate">
              {engineer.name}
            </p>
            <span
              className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                engineer.available
                  ? "bg-green-500/15 text-green-400"
                  : "bg-white/10 text-[#9c9c9c]"
              }`}
            >
              {engineer.available ? (
                <CheckCircle size={10} />
              ) : (
                <XCircle size={10} />
              )}
              {engineer.available ? "Available" : "Busy"}
            </span>
          </div>

          <p className="text-[#9c9c9c] text-xs mt-0.5">{engineer.specialty}</p>

          <div className="flex items-center gap-3 mt-2">
            <span className="flex items-center gap-1 text-xs text-yellow-400">
              <Star size={11} fill="currentColor" />
              {engineer.rating}
              <span className="text-[#9c9c9c]">({engineer.reviews})</span>
            </span>
            <span className="flex items-center gap-1 text-xs text-[#9c9c9c]">
              <Clock size={11} />
              {engineer.responseTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#0080ff]">
              <Zap size={11} />
              {engineer.distance}
            </span>
          </div>
        </div>
      </div>

      {/* Skills tags — only show when selected */}
      {isSelected && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
          {engineer.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-full bg-[#0080ff]/15 text-[#0080ff] border border-[#0080ff]/20"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
