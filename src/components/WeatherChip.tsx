"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const wmoEmoji: Record<number, string> = {
  0: "☀️", 1: "🌤", 2: "⛅", 3: "☁️",
  45: "🌫", 48: "🌫",
  51: "🌦", 53: "🌦", 55: "🌧",
  56: "🌨", 57: "🌨",
  61: "🌧", 63: "🌧", 65: "🌧",
  66: "🌨", 67: "🌨",
  71: "❄️", 73: "❄️", 75: "❄️", 77: "❄️",
  80: "🌦", 81: "🌧", 82: "🌧",
  85: "🌨", 86: "🌨",
  95: "⛈", 96: "⛈", 99: "⛈",
};

export default function WeatherChip() {
  const t = useTranslations("weather");
  const [temp, setTemp] = useState(22);
  const [emoji, setEmoji] = useState("☀️");

  useEffect(() => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=43.7081&longitude=7.3256&current=temperature_2m,weather_code&timezone=Europe/Paris";

    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (d?.current) {
          setTemp(Math.round(d.current.temperature_2m));
          setEmoji(wmoEmoji[d.current.weather_code] ?? "☀️");
        }
      })
      .catch(() => {});
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-sm font-medium">
      {emoji} {temp}° · {t("city")}
    </span>
  );
}
