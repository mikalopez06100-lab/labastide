"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { pois, catEmojis } from "@/data/pois";
import type { Locale } from "@/i18n/config";

interface MapViewProps {
  filter: string;
  locale: string;
}

function bastideIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="width:36px;height:36px;border-radius:50%;background:#0f1c2e;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:16px;color:#b8935b;border:2px solid #b8935b;box-shadow:0 2px 8px rgba(0,0,0,.3)">B</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
}

function poiIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:28px;height:28px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.25)"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
}

export default function MapView({ filter, locale }: MapViewProps) {
  const filtered =
    filter === "all" ? pois : pois.filter((p) => p.cat === filter);

  return (
    <div className="h-[420px] rounded-[14px] overflow-hidden shadow-[var(--shadow)] border border-[var(--line)]">
      <MapContainer
        center={[43.7081, 7.3256]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
        attributionControl={false}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png" />

        <Marker position={[43.7081, 7.3256]} icon={bastideIcon()}>
          <Popup>
            <strong className="font-serif">La Bastide</strong>
          </Popup>
        </Marker>

        {filtered.map((poi) => (
          <Marker
            key={poi.name}
            position={[poi.lat, poi.lng]}
            icon={poiIcon(poi.color)}
          >
            <Popup>
              <div className="min-w-[160px]">
                <strong className="font-serif text-sm block mb-0.5">
                  {poi.name}
                </strong>
                <span className="text-xs text-gray-500 block mb-2">
                  {poi.meta[locale as Locale] ?? poi.meta.fr}
                </span>
                <a
                  href={poi.gmaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 underline"
                >
                  Google Maps ↗
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
