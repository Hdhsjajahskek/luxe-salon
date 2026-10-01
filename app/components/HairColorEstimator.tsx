"use client";

import { useState, useMemo } from "react";

const LENGTHS = [
  { id: "short", label: "Short (above shoulders)", mult: 1 },
  { id: "medium", label: "Medium (shoulder length)", mult: 1.4 },
  { id: "long", label: "Long (below shoulders)", mult: 1.9 },
  { id: "verylong", label: "Very Long (waist+)", mult: 2.4 },
];

const SERVICES = [
  { id: "root", label: "Root Touch-up", base: 1200 },
  { id: "global", label: "Global Color", base: 2500 },
  { id: "highlights", label: "Highlights / Balayage", base: 3500 },
  { id: "fashion", label: "Fashion Color (pink/blue/etc)", base: 4500 },
  { id: "keratin", label: "Keratin Treatment", base: 4000 },
];

export function HairColorEstimator() {
  const [lengthId, setLengthId] = useState("medium");
  const [serviceId, setServiceId] = useState("global");

  const selectedLength = LENGTHS.find((l) => l.id === lengthId)!;
  const selectedService = SERVICES.find((s) => s.id === serviceId)!;

  const { min, max } = useMemo(() => {
    const base = selectedService.base * selectedLength.mult;
    return {
      min: Math.round((base * 0.9) / 100) * 100,
      max: Math.round((base * 1.15) / 100) * 100,
    };
  }, [selectedLength, selectedService]);

  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#e8b4b8]">
        HAIR COLOR ESTIMATOR
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Know the cost before you book.
      </h3>

      <div className="space-y-6">
        <div>
          <label className="mb-3 block font-mono text-xs tracking-widest text-[#948a91]">
            HAIR LENGTH
          </label>
          <select
            value={lengthId}
            onChange={(e) => setLengthId(e.target.value)}
            className="input-field"
          >
            {LENGTHS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-3 block font-mono text-xs tracking-widest text-[#948a91]">
            SERVICE
          </label>
          <select
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="input-field"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-[#e8b4b8]/40 bg-[#e8b4b8]/5 p-6 text-center">
          <p className="mb-2 font-mono text-xs tracking-widest text-[#948a91]">
            ESTIMATED COST
          </p>
          <p className="text-3xl font-bold text-[#e8b4b8]">
            ₹{min.toLocaleString("en-IN")} – ₹{max.toLocaleString("en-IN")}
          </p>
          <p className="mt-3 text-xs text-[#948a91]">
            Final price depends on hair condition and product used.
          </p>
        </div>

        <a
          href="#book"
          className="block w-full rounded-full bg-[#e8b4b8] py-3 text-center font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb]"
        >
          BOOK THIS SERVICE →
        </a>
      </div>
    </div>
  );
}