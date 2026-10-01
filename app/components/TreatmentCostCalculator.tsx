"use client";

import { useState } from "react";

const SERVICES = [
  { id: "haircut", label: "Haircut & Styling", price: 500 },
  { id: "blowdry", label: "Blow Dry", price: 400 },
  { id: "hairspa", label: "Hair Spa", price: 1200 },
  { id: "keratin", label: "Keratin Treatment", price: 4000 },
  { id: "facial", label: "Basic Facial", price: 800 },
  { id: "cleanup", label: "Clean-up", price: 500 },
  { id: "bleach", label: "Bleach (face)", price: 400 },
  { id: "wax", label: "Full Body Wax", price: 1500 },
  { id: "threading", label: "Threading (eyebrows)", price: 100 },
  { id: "manicure", label: "Manicure", price: 700 },
  { id: "pedicure", label: "Pedicure", price: 900 },
  { id: "massage", label: "Body Massage (60 min)", price: 1800 },
];

export function TreatmentCostCalculator() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const total = selected.reduce((sum, id) => {
    const service = SERVICES.find((s) => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#e8b4b8]">
        COST CALCULATOR
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Build your treatment package.
      </h3>

      <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition ${
              selected.includes(s.id)
                ? "border-[#e8b4b8] bg-[#e8b4b8]/10 text-[#e8b4b8]"
                : "border-[#241a20] bg-[#1a1318] text-[#f8f4f6] hover:border-[#e8b4b8]/50"
            }`}
          >
            <span>{s.label}</span>
            <span className="font-mono text-xs">₹{s.price}</span>
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/5 p-6 text-center">
        <p className="mb-2 font-mono text-xs tracking-widest text-[#948a91]">
          YOUR TOTAL
        </p>
        <p className="text-4xl font-bold text-[#d4af37]">
          ₹{total.toLocaleString("en-IN")}
        </p>
        <p className="mt-2 text-xs text-[#948a91]">
          {selected.length} service{selected.length !== 1 ? "s" : ""} selected
        </p>
      </div>

      <a
        href="#book"
        className="mt-6 block w-full rounded-full bg-[#e8b4b8] py-3 text-center font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb]"
      >
        BOOK THIS PACKAGE →
      </a>
    </div>
  );
}