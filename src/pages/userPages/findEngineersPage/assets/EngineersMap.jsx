import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

// ─── Leaflet + ESRI Satellite, 100% free, no API key needed ─────────────────

let leafletLoaded = false;
let leafletLoading = false;
const leafletCallbacks = [];

function loadLeaflet() {
  return new Promise((resolve) => {
    if (leafletLoaded) return resolve(window.L);
    leafletCallbacks.push(resolve);
    if (leafletLoading) return;
    leafletLoading = true;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      leafletLoaded = true;
      leafletCallbacks.forEach((cb) => cb(window.L));
      leafletCallbacks.length = 0;
    };
    document.head.appendChild(script);
  });
}

function makeEngineerIcon(L, eng, isSelected) {
  const size = isSelected ? 44 : 36;
  const border = isSelected ? "3px solid #ffffff" : "2px solid rgba(255,255,255,0.5)";
  const shadow = isSelected
    ? `0 0 0 3px ${eng.avatarColor}66, 0 4px 12px rgba(0,0,0,0.5)`
    : "0 2px 8px rgba(0,0,0,0.4)";

  return L.divIcon({
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${eng.avatarColor};border:${border};box-shadow:${shadow};
      display:flex;align-items:center;justify-content:center;
      font-size:${isSelected ? 13 : 11}px;font-weight:700;color:#fff;
      font-family:system-ui,sans-serif;cursor:pointer;
    ">${eng.avatar}</div>`,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function makeUserIcon(L) {
  return L.divIcon({
    html: `
      <div style="position:relative;width:28px;height:28px;">
        <style>
          @keyframes rpl{0%{transform:translate(-50%,-50%) scale(0.5);opacity:0.8;}100%{transform:translate(-50%,-50%) scale(4.5);opacity:0;}}
          .rpl{position:absolute;top:50%;left:50%;width:24px;height:24px;border-radius:50%;border:2px solid #0080ff;animation:rpl 2.4s ease-out infinite;}
          .rpl:nth-child(2){animation-delay:.8s;}
          .rpl:nth-child(3){animation-delay:1.6s;}
        </style>
        <div class="rpl"></div><div class="rpl"></div><div class="rpl"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
          width:20px;height:20px;border-radius:50%;background:#0080ff;
          border:2.5px solid #fff;box-shadow:0 0 0 3px rgba(0,128,255,.3),0 4px 12px rgba(0,0,0,.5);
          display:flex;align-items:center;justify-content:center;z-index:2;">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><polygon points="12,2 19,21 12,17 5,21"/></svg>
        </div>
      </div>`,
    className: "",
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export default function EngineersMap({ engineers, selectedId, onSelectEngineer, userLocation }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const userMarkerRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Init map once
  useEffect(() => {
    let destroyed = false;
    loadLeaflet().then((L) => {
      if (destroyed || !mapRef.current || mapInstanceRef.current) return;
      delete L.Icon.Default.prototype._getIconUrl;

      const map = L.map(mapRef.current, {
        center: [userLocation.lat, userLocation.lng],
        zoom: 14,
        zoomControl: false,
        attributionControl: true,
      });

      // ESRI satellite tiles, free, no key
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Tiles © Esri", maxZoom: 19 }
      ).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], {
        icon: makeUserIcon(L),
        zIndexOffset: 1000,
      }).addTo(map);

      engineers.forEach((eng) => {
        const marker = L.marker([eng.lat, eng.lng], {
          icon: makeEngineerIcon(L, eng, false),
          zIndexOffset: 100,
        })
          .addTo(map)
          .on("click", () => onSelectEngineer(eng));
        markersRef.current[eng.id] = marker;
      });

      mapInstanceRef.current = map;
      setReady(true);
    });

    return () => {
      destroyed = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = {};
        userMarkerRef.current = null;
        setReady(false);
      }
    };
  }, []);

  // Update user marker on location change
  useEffect(() => {
    if (!ready || !userMarkerRef.current) return;
    userMarkerRef.current.setLatLng([userLocation.lat, userLocation.lng]);
  }, [userLocation, ready]);

  // Update marker icons on selection change
  useEffect(() => {
    if (!ready || !window.L) return;
    const L = window.L;
    engineers.forEach((eng) => {
      const marker = markersRef.current[eng.id];
      if (marker) marker.setIcon(makeEngineerIcon(L, eng, eng.id === selectedId));
    });
    if (selectedId) {
      const eng = engineers.find((e) => e.id === selectedId);
      if (eng && mapInstanceRef.current) {
        mapInstanceRef.current.panTo([eng.lat, eng.lng], { animate: true, duration: 0.5 });
      }
    }
  }, [selectedId, engineers, ready]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" />
      {!ready && (
        <div className="absolute inset-0 bg-[#0a0712] flex items-center justify-center z-10">
          <Loader2 size={28} className="animate-spin text-[#0080ff]" />
        </div>
      )}
    </div>
  );
}
