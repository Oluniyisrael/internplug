import { useState } from "react";
import {
  Navigation, Search, SlidersHorizontal,
  MapPin, X, CheckCircle, ChevronLeft, ChevronRight,
} from "lucide-react";
import { DEMO_ENGINEERS, USER_LOCATION } from "../../../demoData/DemoEngineers";
import EngineerCard from "./assets/EngineerCard";
import EngineersMap from "./assets/EngineersMap";

const SPECIALTIES = ["All", "Electrical & Solar", "HVAC & Plumbing", "General Maintenance", "Industrial Electrical", "Civil & Structural", "Air Conditioning"];

export default function FindEngineersPage() {
  const [selectedEngineer, setSelectedEngineer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("All");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [userLocation, setUserLocation] = useState(USER_LOCATION);
  const [locationStatus, setLocationStatus] = useState("default");

  const filtered = DEMO_ENGINEERS.filter((eng) => {
    const matchSearch =
      eng.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      eng.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSpecialty = filterSpecialty === "All" || eng.specialty === filterSpecialty;
    const matchAvailable = !showAvailableOnly || eng.available;
    return matchSearch && matchSpecialty && matchAvailable;
  });

  const requestLocation = () => {
    if (!navigator.geolocation) return;
    setLocationStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, label: "Your Location" });
        setLocationStatus("live");
      },
      () => setLocationStatus("default")
    );
  };

  const handleSelect = (eng) =>
    setSelectedEngineer((prev) => (prev?.id === eng.id ? null : eng));

  // Break out of UserPageLayout's padded/scrollable/max-w container
  // by using a negative margin trick that exactly undoes the layout's padding
  return (
    <div
      className="flex overflow-hidden bg-[#0a0712]"
      style={{
        // Pull out of the layout's p-4 lg:p-8 and fill the full main area
        margin: "-1rem -1rem",
        height: "calc(100vh - 80px)", // 80px = header height
      }}
    >
      {/* ── MAP ──────────────────────────────────────────────────────────── */}
      <div className="flex-1 relative">
        <EngineersMap
          engineers={filtered}
          selectedId={selectedEngineer?.id ?? null}
          onSelectEngineer={handleSelect}
          userLocation={userLocation}
        />

        {/* Location button — floats over map */}
        <button
          onClick={requestLocation}
          className={`absolute top-4 left-4 z-[500] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border backdrop-blur-sm transition-all ${
            locationStatus === "live"
              ? "border-green-500/40 bg-green-500/10 text-green-400"
              : "border-[#0080ff]/40 bg-black/50 text-[#0080ff] hover:bg-black/70"
          }`}
        >
          <Navigation size={13} className={locationStatus === "locating" ? "animate-pulse" : ""} />
          {locationStatus === "live" ? "Live location" : locationStatus === "locating" ? "Locating…" : "Use my location"}
        </button>

        {/* Count badge */}
        <div className="absolute bottom-6 left-4 z-[500] bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 text-xs text-[#9c9c9c]">
          <span className="text-white font-semibold">{filtered.length}</span> engineer{filtered.length !== 1 ? "s" : ""} nearby
        </div>

        {/* Panel toggle tab — sticks to right edge of map */}
        <button
          onClick={() => setPanelOpen((o) => !o)}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-[500] w-5 h-14 bg-[#0d1120] border border-white/10 border-r-0 rounded-l-lg flex items-center justify-center text-[#9c9c9c] hover:text-white hover:bg-[#1a2640] transition-all"
        >
          {panelOpen ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
        </button>
      </div>

      {/* ── SIDE PANEL ───────────────────────────────────────────────────── */}
      <div
        className={`flex-shrink-0 flex flex-col bg-[#0d1120] border-l border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          panelOpen ? "w-80 xl:w-96" : "w-0"
        }`}
      >
        <div className="w-80 xl:w-96 h-full flex flex-col">

          {/* Header */}
          <div className="px-4 pt-5 pb-4 border-b border-white/8 flex-shrink-0">
            <h2 className="text-[#f0edfa] font-bold text-lg">Find Engineers</h2>
            <p className="text-[#9c9c9c] text-xs mt-0.5">Tap a card to highlight on map</p>
          </div>

          {/* Search + filter toggle */}
          <div className="px-4 pt-4 flex gap-2 flex-shrink-0">
            <div className="flex-1 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9c9c9c]" />
              <input
                type="text"
                placeholder="Search engineers or skills…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-[#f0edfa] placeholder:text-[#9c9c9c]/50 outline-none focus:border-[#0080ff]/50 transition-colors"
              />
            </div>
            <button
              onClick={() => setFilterOpen((o) => !o)}
              className={`px-3 rounded-xl border transition-colors flex-shrink-0 ${
                filterOpen
                  ? "border-[#0080ff]/50 bg-[#0080ff]/10 text-[#0080ff]"
                  : "border-white/10 bg-white/5 text-[#9c9c9c] hover:text-white hover:border-white/20"
              }`}
            >
              <SlidersHorizontal size={15} />
            </button>
          </div>

          {/* Filters */}
          {filterOpen && (
            <div className="mx-4 mt-3 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3 flex-shrink-0">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-[#cecece]">Available only</span>
                <div
                  onClick={() => setShowAvailableOnly((v) => !v)}
                  className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer ${showAvailableOnly ? "bg-[#0080ff]" : "bg-white/15"}`}
                >
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-200 ${showAvailableOnly ? "left-5" : "left-0.5"}`} />
                </div>
              </label>
              <div>
                <p className="text-xs text-[#9c9c9c] mb-2">Specialty</p>
                <div className="flex flex-wrap gap-1.5">
                  {SPECIALTIES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterSpecialty(s)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        filterSpecialty === s
                          ? "border-[#0080ff] bg-[#0080ff]/15 text-[#0080ff]"
                          : "border-white/15 text-[#9c9c9c] hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Scrollable cards — ONLY this scrolls */}
          <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 flex flex-col gap-2 custom-scrollbar min-h-0">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-[#9c9c9c] text-sm">
                <MapPin size={28} className="mx-auto mb-2 opacity-30" />
                No engineers match your filters
              </div>
            ) : (
              filtered.map((eng) => (
                <EngineerCard
                  key={eng.id}
                  engineer={eng}
                  isSelected={selectedEngineer?.id === eng.id}
                  onClick={() => handleSelect(eng)}
                />
              ))
            )}
          </div>

          {/* Selected engineer footer */}
          {selectedEngineer && (
            <div className="flex-shrink-0 px-4 py-4 border-t border-white/10 bg-[#0a0e1a]">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: selectedEngineer.avatarColor }}
                >
                  {selectedEngineer.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f0edfa] text-sm font-semibold truncate">{selectedEngineer.name}</p>
                  <p className="text-[#9c9c9c] text-xs">{selectedEngineer.specialty}</p>
                </div>
                <button onClick={() => setSelectedEngineer(null)} className="text-[#9c9c9c] hover:text-white">
                  <X size={15} />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#0080ff] text-white text-sm font-medium py-2 rounded-xl hover:bg-[#0066cc] transition-colors">
                  Book Now
                </button>
                <button className="flex-1 border border-white/15 text-[#cecece] text-sm font-medium py-2 rounded-xl hover:border-white/30 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
