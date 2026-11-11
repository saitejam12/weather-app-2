// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search, Check, ChevronRight, AlertCircle, CheckCircle } = Icons;

const PRODUCT = "weather-app";
const HAIRLINE = "1px solid rgba(255,255,255,0.10)";

const DATA_START = "2015-11-12";
const DATA_END = "2025-11-11";
const MS = 86400000;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// 72 major Indian cities seeded in the test archive (name, state, latitude, longitude)
const CITY_ROWS = [
  ["Mumbai", "Maharashtra", 19.08, 72.88],
  ["Delhi", "Delhi", 28.61, 77.21],
  ["Bengaluru", "Karnataka", 12.97, 77.59],
  ["Hyderabad", "Telangana", 17.39, 78.49],
  ["Ahmedabad", "Gujarat", 23.03, 72.58],
  ["Chennai", "Tamil Nadu", 13.08, 80.27],
  ["Kolkata", "West Bengal", 22.57, 88.36],
  ["Surat", "Gujarat", 21.17, 72.83],
  ["Pune", "Maharashtra", 18.52, 73.86],
  ["Jaipur", "Rajasthan", 26.91, 75.79],
  ["Lucknow", "Uttar Pradesh", 26.85, 80.95],
  ["Kanpur", "Uttar Pradesh", 26.45, 80.33],
  ["Nagpur", "Maharashtra", 21.15, 79.09],
  ["Indore", "Madhya Pradesh", 22.72, 75.86],
  ["Thane", "Maharashtra", 19.22, 72.98],
  ["Bhopal", "Madhya Pradesh", 23.26, 77.41],
  ["Visakhapatnam", "Andhra Pradesh", 17.69, 83.22],
  ["Patna", "Bihar", 25.59, 85.14],
  ["Vadodara", "Gujarat", 22.31, 73.18],
  ["Ghaziabad", "Uttar Pradesh", 28.67, 77.45],
  ["Ludhiana", "Punjab", 30.9, 75.86],
  ["Agra", "Uttar Pradesh", 27.18, 78.01],
  ["Nashik", "Maharashtra", 19.99, 73.79],
  ["Faridabad", "Haryana", 28.41, 77.31],
  ["Meerut", "Uttar Pradesh", 28.98, 77.71],
  ["Rajkot", "Gujarat", 22.3, 70.8],
  ["Varanasi", "Uttar Pradesh", 25.32, 82.97],
  ["Srinagar", "Jammu and Kashmir", 34.08, 74.8],
  ["Chhatrapati Sambhajinagar", "Maharashtra", 19.88, 75.34],
  ["Dhanbad", "Jharkhand", 23.8, 86.43],
  ["Amritsar", "Punjab", 31.63, 74.87],
  ["Navi Mumbai", "Maharashtra", 19.03, 73.03],
  ["Prayagraj", "Uttar Pradesh", 25.44, 81.85],
  ["Ranchi", "Jharkhand", 23.34, 85.31],
  ["Howrah", "West Bengal", 22.59, 88.31],
  ["Coimbatore", "Tamil Nadu", 11.02, 76.96],
  ["Jabalpur", "Madhya Pradesh", 23.18, 79.99],
  ["Gwalior", "Madhya Pradesh", 26.22, 78.18],
  ["Vijayawada", "Andhra Pradesh", 16.51, 80.65],
  ["Jodhpur", "Rajasthan", 26.24, 73.02],
  ["Madurai", "Tamil Nadu", 9.93, 78.12],
  ["Raipur", "Chhattisgarh", 21.25, 81.63],
  ["Kota", "Rajasthan", 25.21, 75.86],
  ["Chandigarh", "Chandigarh", 30.73, 76.78],
  ["Guwahati", "Assam", 26.14, 91.74],
  ["Solapur", "Maharashtra", 17.66, 75.91],
  ["Hubballi", "Karnataka", 15.36, 75.12],
  ["Mysuru", "Karnataka", 12.3, 76.64],
  ["Tiruchirappalli", "Tamil Nadu", 10.79, 78.7],
  ["Bareilly", "Uttar Pradesh", 28.37, 79.43],
  ["Moradabad", "Uttar Pradesh", 28.84, 78.77],
  ["Tiruppur", "Tamil Nadu", 11.11, 77.34],
  ["Gurugram", "Haryana", 28.46, 77.03],
  ["Aligarh", "Uttar Pradesh", 27.9, 78.08],
  ["Jalandhar", "Punjab", 31.33, 75.58],
  ["Bhubaneswar", "Odisha", 20.3, 85.82],
  ["Salem", "Tamil Nadu", 11.66, 78.15],
  ["Warangal", "Telangana", 17.97, 79.59],
  ["Guntur", "Andhra Pradesh", 16.31, 80.44],
  ["Bhiwandi", "Maharashtra", 19.3, 73.06],
  ["Saharanpur", "Uttar Pradesh", 29.97, 77.55],
  ["Gorakhpur", "Uttar Pradesh", 26.76, 83.37],
  ["Bikaner", "Rajasthan", 28.02, 73.31],
  ["Amravati", "Maharashtra", 20.93, 77.78],
  ["Noida", "Uttar Pradesh", 28.54, 77.39],
  ["Jamshedpur", "Jharkhand", 22.8, 86.18],
  ["Bhilai", "Chhattisgarh", 21.21, 81.38],
  ["Cuttack", "Odisha", 20.46, 85.88],
  ["Firozabad", "Uttar Pradesh", 27.15, 78.4],
  ["Kochi", "Kerala", 9.93, 76.27],
  ["Dehradun", "Uttarakhand", 30.32, 78.03],
  ["Muzaffarpur", "Bihar", 26.12, 85.39],
];

const CITIES = CITY_ROWS.map(([name, state, latitude, longitude], i) => ({
  id: i + 1,
  name,
  state,
  latitude,
  longitude,
}));

// Cities named in the agreed wireframe keep their item markers
const WF_CITY_ITEM = {
  Mumbai: "i-2-0-0",
  Mysuru: "i-2-0-1",
  Muzaffarpur: "i-2-0-2",
  Madurai: "i-2-0-3",
};

const METRICS = [
  { key: "temperature_c", label: "Temperature °C", dp: 1, wf: "i-3-0-0" },
  { key: "rainfall_mm", label: "Rainfall mm", dp: 1, wf: "i-3-0-1" },
  { key: "humidity_pct", label: "Humidity %", dp: 0, wf: "i-3-0-2" },
  { key: "wind_kph", label: "Wind kph", dp: 1, wf: "i-3-0-3" },
];

const COLUMNS = [
  { wf: "i-6-0-0", label: "Date", align: "left" },
  { wf: "i-6-0-1", label: "Temperature (°C)", align: "right" },
  { wf: "i-6-0-2", label: "Rainfall (mm)", align: "right" },
  { wf: "i-6-0-3", label: "Humidity (%)", align: "right" },
  { wf: "i-6-0-4", label: "Wind (kph)", align: "right" },
];

const PAGE = 30;

const toDate = (s) => new Date(s + "T00:00:00Z");
const toISO = (d) => d.toISOString().slice(0, 10);
const fmtLong = (s) => {
  if (!s) return "—";
  const d = toDate(s);
  if (Number.isNaN(d.getTime())) return "—";
  return `${String(d.getUTCDate()).padStart(2, "0")} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
};
const daysBetween = (a, b) => Math.floor((toDate(b) - toDate(a)) / MS) + 1;
const noise = (seed) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

// Seeded synthetic archive: plausible daily values, no live feed
const buildRecords = (city, startISO, endISO) => {
  const start = toDate(startISO).getTime();
  const end = toDate(endISO).getTime();
  if (Number.isNaN(start) || Number.isNaN(end) || end < start) return [];
  const wet =
    city.longitude > 88 ? 1.8 : city.longitude < 76.5 && city.latitude < 21.5 ? 1.5 : city.latitude > 24 && city.longitude < 77 ? 0.45 : 1;
  const baseTemp = 33 - (city.latitude - 9) * 0.3;
  const amp = 3 + (city.latitude - 8) * 0.45;
  const coastal = city.longitude < 73.5 || city.longitude > 79.5 ? 2 : 0;
  const out = [];
  let i = 0;
  for (let t = start; t <= end && i < 4200; t += MS, i += 1) {
    const d = new Date(t);
    const doy = Math.floor((t - Date.UTC(d.getUTCFullYear(), 0, 0)) / MS);
    const season = -Math.cos((2 * Math.PI * (doy - 15)) / 365);
    const monsoon = Math.max(0, Math.sin((Math.PI * (doy - 150)) / 150));
    const seed = city.id * 7919 + Math.floor(t / MS);
    const temperature_c = Math.round((baseTemp + amp * season * 0.9 - monsoon * 3.4 + (noise(seed) - 0.5) * 5) * 10) / 10;
    const r = noise(seed + 7);
    const rainfall_mm = Math.round(Math.max(0, Math.pow(r, 5) * 265 * wet * monsoon + (r > 0.97 ? 4 : 0)) * 10) / 10;
    const humidity_pct = Math.max(
      25,
      Math.min(99, Math.round(49 + 33 * monsoon + (wet - 1) * 7 - season * 5 + (noise(seed + 13) - 0.5) * 18))
    );
    const wind_kph = Math.round(Math.max(1, Math.min(50, 7 + 8 * monsoon + noise(seed + 19) * 13 + coastal)) * 10) / 10;
    out.push({
      id: `${city.id}-${toISO(d)}`,
      city_id: city.id,
      record_date: toISO(d),
      temperature_c,
      rainfall_mm,
      humidity_pct,
      wind_kph,
    });
  }
  return out;
};

const summarise = (records, key) => {
  if (!records.length) return null;
  let min = Infinity;
  let max = -Infinity;
  let total = 0;
  for (const r of records) {
    const v = r[key];
    if (v < min) min = v;
    if (v > max) max = v;
    total += v;
  }
  return { min, max, avg: total / records.length };
};

// Keep the time axis legible: group dense ranges into fixed buckets
const bucket = (records, key, maxPoints, mode) => {
  if (!records.length) return { points: [], size: 1, mode };
  const size = Math.max(1, Math.ceil(records.length / maxPoints));
  const long = records.length > 400;
  const points = [];
  for (let i = 0; i < records.length; i += size) {
    const chunk = records.slice(i, i + size);
    const sum = chunk.reduce((a, r) => a + r[key], 0);
    const d = toDate(chunk[0].record_date);
    points.push({
      v: mode === "sum" ? sum : sum / chunk.length,
      label: long
        ? `${MONTHS[d.getUTCMonth()]} ’${String(d.getUTCFullYear()).slice(2)}`
        : `${String(d.getUTCDate()).padStart(2, "0")} ${MONTHS[d.getUTCMonth()]}`,
      from: chunk[0].record_date,
    });
  }
  return { points, size, mode };
};

const Plot = ({ series, kind, dp, title, unit }) => {
  const pts = series.points;
  const w = 600;
  const h = 170;
  const padL = 46;
  const padR = 10;
  const padT = 10;
  const padB = 24;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const vals = pts.map((p) => p.v);
  const rawMax = vals.length ? Math.max(...vals) : 1;
  const rawMin = kind === "bar" ? 0 : vals.length ? Math.min(...vals) : 0;
  const max = rawMax === rawMin ? rawMax + 1 : rawMax;
  const min = rawMax === rawMin ? rawMin - 1 : rawMin;
  const x = (i) => (pts.length === 1 ? padL + innerW / 2 : padL + (i / (pts.length - 1)) * innerW);
  const y = (v) => padT + innerH - ((v - min) / (max - min)) * innerH;
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.v).toFixed(1)}`).join(" ");
  const area = pts.length ? `${line} L${x(pts.length - 1).toFixed(1)},${padT + innerH} L${x(0).toFixed(1)},${padT + innerH} Z` : "";
  const barW = Math.max(1.5, innerW / Math.max(pts.length, 1) - 1.5);
  const axisText = { fill: brand.neutralColor, fontSize: 10, fontVariantNumeric: "tabular-nums" };
  const tickIdx = pts.length > 2 ? [0, Math.floor((pts.length - 1) / 2), pts.length - 1] : pts.map((_, i) => i);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="mt-4 h-44 w-full"
      role="img"
      aria-label={`${title}. ${pts.length} plotted points from ${fmtLong(pts[0] && pts[0].from)} to ${fmtLong(
        pts[pts.length - 1] && pts[pts.length - 1].from
      )}. Lowest ${min.toFixed(dp)} ${unit}, highest ${max.toFixed(dp)} ${unit}. Exact daily values are in the daily records table below.`}
    >
      <line x1={padL} y1={padT} x2={w - padR} y2={padT} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1={padL} y1={padT + innerH} x2={w - padR} y2={padT + innerH} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <text x={padL - 8} y={padT + 4} textAnchor="end" style={axisText}>
        {max.toFixed(dp)}
      </text>
      <text x={padL - 8} y={padT + innerH} textAnchor="end" style={axisText}>
        {min.toFixed(dp)}
      </text>
      {kind === "bar"
        ? pts.map((p, i) => {
            const bh = Math.max(p.v > 0 ? 1 : 0, padT + innerH - y(p.v));
            return (
              <rect
                key={p.from}
                x={padL + (i * innerW) / Math.max(pts.length, 1)}
                y={padT + innerH - bh}
                width={barW}
                height={bh}
                fill={brand.accentColor}
                opacity="0.6"
              />
            );
          })
        : (
          <g>
            <path d={area} fill={brand.accentColor} opacity="0.1" />
            <path d={line} fill="none" stroke={brand.accentColor} strokeWidth="1.6" strokeLinejoin="round" />
          </g>
        )}
      {tickIdx.map((i) => (
        <text
          key={`t-${i}`}
          x={Math.min(Math.max(x(i), padL + 12), w - padR - 12)}
          y={h - 6}
          textAnchor={i === 0 ? "start" : i === pts.length - 1 ? "end" : "middle"}
          style={axisText}
        >
          {pts[i] ? pts[i].label : ""}
        </text>
      ))}
    </svg>
  );
};

export default function Screen() {
  const panel = { backgroundColor: "rgba(255,255,255,0.04)", border: HAIRLINE, borderRadius: brand.radius };
  const label = { color: brand.neutralColor, letterSpacing: "0.18em" };
  const fieldStyle = {
    backgroundColor: "rgba(255,255,255,0.03)",
    border: HAIRLINE,
    borderRadius: brand.radius,
    color: brand.primaryColor,
    colorScheme: "dark",
    width: "100%",
    minHeight: "44px",
  };

  const [query, setQuery] = React.useState("");
  const [draft, setDraft] = React.useState({ start: "2024-01-01", end: "2024-12-31" });
  const [applied, setApplied] = React.useState({ cityId: 1, start: "2024-01-01", end: "2024-12-31" });
  const [pending, setPending] = React.useState(null);
  const [rangeError, setRangeError] = React.useState("");
  const [rangeNote, setRangeNote] = React.useState("");
  const [flash, setFlash] = React.useState("");
  const [visible, setVisible] = React.useState(PAGE);

  React.useEffect(() => {
    if (!pending) return undefined;
    const t = setTimeout(() => {
      setApplied(pending);
      setVisible(PAGE);
      const c = CITIES.find((x) => x.id === pending.cityId);
      setFlash(`${daysBetween(pending.start, pending.end)} days loaded for ${c ? c.name : "this city"}.`);
      setPending(null);
    }, 420);
    return () => clearTimeout(t);
  }, [pending]);

  const city = CITIES.find((c) => c.id === applied.cityId) || CITIES[0];
  const records = React.useMemo(() => buildRecords(city, applied.start, applied.end), [city, applied.start, applied.end]);
  const series = React.useMemo(
    () => ({
      temperature_c: bucket(records, "temperature_c", 90, "avg"),
      rainfall_mm: bucket(records, "rainfall_mm", 60, "sum"),
      humidity_pct: bucket(records, "humidity_pct", 90, "avg"),
      wind_kph: bucket(records, "wind_kph", 90, "avg"),
    }),
    [records]
  );

  const q = query.trim().toLowerCase();
  const matches = q ? CITIES.filter((c) => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)) : CITIES;
  const sorted = [...matches].sort((a, b) => a.name.localeCompare(b.name));
  const loading = pending !== null;

  const selectCity = (c) => {
    setFlash("");
    setPending({ cityId: c.id, start: applied.start, end: applied.end });
  };

  const applyRange = (e) => {
    e.preventDefault();
    setFlash("");
    if (!draft.start || !draft.end) {
      setRangeNote("");
      setRangeError("Both a start date and an end date are needed before the archive can be read.");
      return;
    }
    if (toDate(draft.end) < toDate(draft.start)) {
      setRangeNote("");
      setRangeError(
        `End date ${fmtLong(draft.end)} falls before start date ${fmtLong(draft.start)}. Pick an end date on or after the start date.`
      );
      return;
    }
    const start = draft.start < DATA_START ? DATA_START : draft.start;
    const end = draft.end > DATA_END ? DATA_END : draft.end;
    setRangeError("");
    setRangeNote(
      start !== draft.start || end !== draft.end
        ? `Only ${fmtLong(DATA_START)} – ${fmtLong(DATA_END)} is held in the archive, so the range was trimmed to ${fmtLong(start)} – ${fmtLong(end)}.`
        : ""
    );
    setDraft({ start, end });
    setPending({ cityId: applied.cityId, start, end });
  };

  const totalDays = records.length;
  const shown = Math.min(visible, totalDays);
  const remaining = totalDays - shown;

  const Skeleton = ({ className }) => (
    <div className={`wx-skel ${className}`} style={{ backgroundColor: "rgba(255,255,255,0.07)", borderRadius: brand.radius }} />
  );

  const bucketNote = (s, metric) =>
    s.size === 1
      ? `${s.points.length} daily points plotted.`
      : `${totalDays} days grouped into ${s.points.length} ${s.size}-day ${s.mode === "sum" ? "totals" : "means"} so the axis stays readable.`;

  return (
    <div className="space-y-8" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <style>{`
        .wx-focus:focus-visible { outline: 2px solid ${brand.accentColor}; outline-offset: 2px; }
        .wx-row { animation: wx-fade .3s ease-out both; }
        @keyframes wx-fade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        .wx-skel { animation: wx-pulse 1.6s ease-in-out infinite; }
        @keyframes wx-pulse { 0%, 100% { opacity: .35 } 50% { opacity: .7 } }
        .wx-city:hover { background-color: rgba(255,255,255,0.05); }
        @media (prefers-reduced-motion: reduce) { .wx-row, .wx-skel { animation: none } }
      `}</style>

      <header data-wf="b-0-0">
        <h1 className="text-4xl" style={{ fontFamily: brand.fontHeading }}>
          Historic Weather — {city.name}, {city.state}
        </h1>
        <p className="mt-2 text-xs uppercase" style={label}>
          {PRODUCT} — open archive, no sign-in · seeded snapshot 11 Nov 2025
        </p>
        <div aria-hidden className="mt-4 h-px w-full" style={{ backgroundColor: brand.accentColor, opacity: 0.5 }} />
      </header>

      <form onSubmit={applyRange} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
        <div data-wf="b-1-0" className="md:col-span-4">
          <Label htmlFor="city-search" className="text-xs uppercase" style={label}>
            Search city (e.g. Mumbai)
          </Label>
          <div className="relative mt-2">
            <Search aria-hidden className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: brand.neutralColor }} />
            <Input
              id="city-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Mumbai, Mysuru, Madurai…"
              className="wx-focus pl-9"
              style={fieldStyle}
              aria-describedby="city-search-hint"
            />
          </div>
          <p id="city-search-hint" className="mt-2 text-xs" style={{ color: brand.neutralColor }}>
            Filters the 72 cities below. Pick one to load its archive.
          </p>
        </div>

        <div data-wf="b-1-1" className="md:col-span-3">
          <Label htmlFor="start-date" className="text-xs uppercase" style={label}>
            Start date
          </Label>
          <Input
            id="start-date"
            type="date"
            value={draft.start}
            min={DATA_START}
            max={DATA_END}
            onChange={(e) => setDraft((d) => ({ ...d, start: e.target.value }))}
            className="wx-focus mt-2"
            style={fieldStyle}
          />
          <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
            {fmtLong(draft.start)}
          </p>
        </div>

        <div data-wf="b-1-2" className="md:col-span-3">
          <Label htmlFor="end-date" className="text-xs uppercase" style={label}>
            End date
          </Label>
          <Input
            id="end-date"
            type="date"
            value={draft.end}
            min={DATA_START}
            max={DATA_END}
            onChange={(e) => setDraft((d) => ({ ...d, end: e.target.value }))}
            className="wx-focus mt-2"
            style={fieldStyle}
            aria-invalid={rangeError ? "true" : undefined}
            aria-describedby="range-feedback"
          />
          <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
            {fmtLong(draft.end)}
          </p>
        </div>

        <div className="md:col-span-2">
          <Button
            data-wf="b-1-3"
            type="submit"
            disabled={loading}
            className="wx-focus w-full"
            style={{
              backgroundColor: brand.accentColor,
              color: brand.backgroundColor,
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: brand.radius,
              minHeight: "44px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              opacity: loading ? 0.65 : 1,
            }}
          >
            {loading ? "Reading archive…" : "Apply range"}
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <section data-wf="b-2-0" className="lg:col-span-5" style={panel}>
          <div className="flex items-baseline justify-between gap-4 p-6 pb-3">
            <h2 className="text-lg" style={{ fontFamily: brand.fontHeading }}>
              Matching cities (72 available)
            </h2>
            <span className="text-xs uppercase tabular-nums" style={label}>
              {sorted.length} shown
            </span>
          </div>
          {sorted.length === 0 ? (
            <p className="px-6 pb-6 text-sm" style={{ color: brand.neutralColor }}>
              Nothing in the seeded set matches that search — see the note beside this list.
            </p>
          ) : (
            <ul className="max-h-72 overflow-auto" style={{ borderTop: HAIRLINE }}>
              {sorted.map((c) => {
                const active = c.id === city.id;
                return (
                  <li key={c.id} style={{ borderBottom: HAIRLINE }}>
                    <button
                      type="button"
                      data-wf={WF_CITY_ITEM[c.name]}
                      onClick={() => selectCity(c)}
                      aria-current={active ? "true" : undefined}
                      className="wx-focus wx-city flex w-full items-center justify-between gap-4 px-6 py-3 text-left text-sm"
                      style={{ minHeight: "44px", backgroundColor: active ? "rgba(143,174,139,0.12)" : "transparent" }}
                    >
                      <span>
                        <span style={{ color: brand.primaryColor }}>{c.name}</span>
                        <span className="ml-2" style={{ color: brand.neutralColor }}>
                          — {c.state}
                        </span>
                      </span>
                      {active ? (
                        <span className="flex items-center gap-1 text-xs uppercase" style={{ ...label, color: brand.accentColor }}>
                          <Check aria-hidden className="h-3.5 w-3.5" /> Selected
                        </span>
                      ) : (
                        <ChevronRight aria-hidden className="h-4 w-4" style={{ color: brand.neutralColor }} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section data-wf="b-2-1" className="lg:col-span-4 p-6" style={panel}>
          {sorted.length === 0 ? (
            <div style={{ color: brand.primaryColor }}>
              <Empty
                title={`No city matches “${query.trim()}”`}
                description="Only ~72 major Indian cities are covered. This test archive skips smaller towns — try the nearest big city or its state name."
                action={
                  <Button
                    type="button"
                    onClick={() => setQuery("")}
                    className="wx-focus"
                    style={{
                      backgroundColor: "transparent",
                      color: brand.primaryColor,
                      border: HAIRLINE,
                      borderRadius: brand.radius,
                      minHeight: "44px",
                    }}
                  >
                    Clear search
                  </Button>
                }
              />
            </div>
          ) : (
            <div>
              <h2 className="text-xs uppercase" style={label}>
                Coverage
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: brand.primaryColor }}>
                72 major Indian cities, each with ten years of unbroken daily records. Smaller towns such as Chikhli are not in this test
                archive — search a nearby major city instead.
              </p>
              <p className="mt-3 text-xs" style={{ color: brand.neutralColor }}>
                Synthetic data. No external weather service is called.
              </p>
            </div>
          )}
        </section>

        <section data-wf="b-2-2" className="lg:col-span-3 p-6" style={panel} id="range-feedback">
          <h2 className="text-xs uppercase" style={label}>
            Archive window
          </h2>
          <p className="mt-3 text-sm leading-relaxed tabular-nums" style={{ color: brand.primaryColor }}>
            Data available {fmtLong(DATA_START)} – {fmtLong(DATA_END)}. End date must not be before the start date.
          </p>
          {rangeError ? (
            <p role="alert" className="mt-4 flex gap-2 p-3 text-sm" style={{ border: "1px solid rgba(255,255,255,0.22)", borderRadius: brand.radius }}>
              <AlertCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.accentColor }} />
              <span>
                <span className="font-semibold">Range not applied. </span>
                {rangeError}
              </span>
            </p>
          ) : null}
          {!rangeError && rangeNote ? (
            <p role="status" className="mt-4 flex gap-2 text-sm" style={{ color: brand.neutralColor }}>
              <AlertCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{rangeNote}</span>
            </p>
          ) : null}
          {!rangeError && flash ? (
            <p role="status" className="mt-4 flex gap-2 text-sm tabular-nums" style={{ color: brand.accentColor }}>
              <CheckCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{flash}</span>
            </p>
          ) : null}
        </section>
      </div>

      <section data-wf="b-3-0" aria-busy={loading ? "true" : "false"}>
        <h2 className="text-xs uppercase" style={label}>
          Summary for {fmtLong(applied.start)} – {fmtLong(applied.end)}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => {
            const s = summarise(records, m.key);
            return (
              <article key={m.key} data-wf={m.wf} className="p-5" style={panel}>
                <p className="text-xs uppercase" style={label}>
                  {m.label}
                </p>
                {loading || !s ? (
                  <div className="mt-3 space-y-3">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ) : (
                  <React.Fragment>
                    <p className="mt-2 text-3xl tabular-nums" style={{ fontFamily: brand.fontHeading, color: brand.accentColor }}>
                      {s.avg.toFixed(m.dp)}
                    </p>
                    <p className="mt-1 text-[11px] uppercase" style={label}>
                      average
                    </p>
                    <dl className="mt-4 flex justify-between pt-3 text-sm tabular-nums" style={{ borderTop: HAIRLINE }}>
                      <div>
                        <dt className="text-[11px] uppercase" style={label}>
                          min
                        </dt>
                        <dd>{s.min.toFixed(m.dp)}</dd>
                      </div>
                      <div className="text-right">
                        <dt className="text-[11px] uppercase" style={label}>
                          max
                        </dt>
                        <dd>{s.max.toFixed(m.dp)}</dd>
                      </div>
                    </dl>
                  </React.Fragment>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section data-wf="b-4-0" className="p-6" style={panel}>
          <h2 className="text-xs uppercase" style={label}>
            Temperature (°C) — daily line trend
          </h2>
          {loading ? (
            <Skeleton className="mt-4 h-44 w-full" />
          ) : records.length ? (
            <React.Fragment>
              <Plot series={series.temperature_c} kind="line" dp={1} unit="°C" title="Temperature in °C, daily line trend" />
              <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
                {bucketNote(series.temperature_c)}
              </p>
            </React.Fragment>
          ) : (
            <p className="mt-4 text-sm" style={{ color: brand.neutralColor }}>
              Apply a valid range to plot temperature.
            </p>
          )}
        </section>

        <section data-wf="b-4-1" className="p-6" style={panel}>
          <h2 className="text-xs uppercase" style={label}>
            Rainfall (mm) — daily bar totals
          </h2>
          {loading ? (
            <Skeleton className="mt-4 h-44 w-full" />
          ) : records.length ? (
            <React.Fragment>
              <Plot series={series.rainfall_mm} kind="bar" dp={1} unit="mm" title="Rainfall in mm, bar totals" />
              <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
                {bucketNote(series.rainfall_mm)}
              </p>
            </React.Fragment>
          ) : (
            <p className="mt-4 text-sm" style={{ color: brand.neutralColor }}>
              Apply a valid range to plot rainfall.
            </p>
          )}
        </section>

        <section data-wf="b-5-0" className="p-6" style={panel}>
          <h2 className="text-xs uppercase" style={label}>
            Humidity (%) — daily line trend
          </h2>
          {loading ? (
            <Skeleton className="mt-4 h-44 w-full" />
          ) : records.length ? (
            <React.Fragment>
              <Plot series={series.humidity_pct} kind="line" dp={0} unit="%" title="Relative humidity in percent, daily line trend" />
              <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
                {bucketNote(series.humidity_pct)}
              </p>
            </React.Fragment>
          ) : (
            <p className="mt-4 text-sm" style={{ color: brand.neutralColor }}>
              Apply a valid range to plot humidity.
            </p>
          )}
        </section>

        <section data-wf="b-5-1" className="p-6" style={panel}>
          <h2 className="text-xs uppercase" style={label}>
            Wind (kph) — daily line trend
          </h2>
          {loading ? (
            <Skeleton className="mt-4 h-44 w-full" />
          ) : records.length ? (
            <React.Fragment>
              <Plot series={series.wind_kph} kind="line" dp={1} unit="kph" title="Wind speed in kph, daily line trend" />
              <p className="mt-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
                {bucketNote(series.wind_kph)}
              </p>
            </React.Fragment>
          ) : (
            <p className="mt-4 text-sm" style={{ color: brand.neutralColor }}>
              Apply a valid range to plot wind.
            </p>
          )}
        </section>
      </div>

      <section data-wf="b-6-0" style={panel} aria-busy={loading ? "true" : "false"}>
        <h2 className="p-6 pb-3 text-xs uppercase tabular-nums" style={label}>
          Daily records — {totalDays} days in range
        </h2>
        {loading ? (
          <div className="space-y-2 px-6 pb-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-9 w-full" />
            ))}
            <p className="pt-2 text-xs uppercase" style={label}>
              Reading {city.name} from the seeded archive…
            </p>
          </div>
        ) : records.length === 0 ? (
          <p className="px-6 pb-6 text-sm" style={{ color: brand.neutralColor }}>
            No days to list yet — set a start and end date inside {fmtLong(DATA_START)} – {fmtLong(DATA_END)} and apply the range.
          </p>
        ) : (
          <div className="max-h-[460px] overflow-auto">
            <table className="w-full min-w-[560px] text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
              <caption className="sr-only">
                Daily historic weather for {city.name}, {city.state}, {fmtLong(applied.start)} to {fmtLong(applied.end)}
              </caption>
              <thead>
                <tr>
                  {COLUMNS.map((c) => (
                    <th
                      key={c.wf}
                      data-wf={c.wf}
                      scope="col"
                      className={`sticky top-0 px-6 py-3 text-xs uppercase ${c.align === "right" ? "text-right" : "text-left"}`}
                      style={{ ...label, backgroundColor: brand.backgroundColor, borderBottom: HAIRLINE }}
                    >
                      {c.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.slice(0, shown).map((r, i) => (
                  <tr
                    key={r.id}
                    className={i >= shown - PAGE && shown > PAGE ? "wx-row" : undefined}
                    style={{ borderTop: i === 0 ? "none" : HAIRLINE }}
                  >
                    <td className="px-6 py-3 tabular-nums" style={{ color: brand.accentColor }}>
                      {fmtLong(r.record_date)}
                    </td>
                    <td className="px-6 py-3 text-right tabular-nums">{r.temperature_c.toFixed(1)}</td>
                    <td className="px-6 py-3 text-right tabular-nums" style={r.rainfall_mm === 0 ? { color: brand.neutralColor } : undefined}>
                      {r.rainfall_mm.toFixed(1)}
                    </td>
                    <td className="px-6 py-3 text-right tabular-nums">{r.humidity_pct}</td>
                    <td className="px-6 py-3 text-right tabular-nums">{r.wind_kph.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
        <p data-wf="b-7-0" className="text-sm tabular-nums md:col-span-8" style={{ color: brand.neutralColor }} role="status">
          {totalDays === 0 ? "No days in range yet." : `Showing days 1–${shown} of ${totalDays}.`}
        </p>
        <div className="md:col-span-4 md:text-right">
          <Button
            data-wf="b-7-1"
            type="button"
            disabled={remaining <= 0 || loading}
            onClick={() => setVisible((v) => v + PAGE)}
            className="wx-focus w-full md:w-auto"
            style={{
              backgroundColor: "transparent",
              color: remaining > 0 && !loading ? brand.primaryColor : brand.neutralColor,
              border: HAIRLINE,
              borderRadius: brand.radius,
              minHeight: "44px",
              opacity: remaining > 0 && !loading ? 1 : 0.6,
            }}
          >
            {remaining <= 0
              ? `All ${totalDays} days shown`
              : `Load next ${Math.min(PAGE, remaining)} days`}
          </Button>
        </div>
      </div>
    </div>
  );
}
