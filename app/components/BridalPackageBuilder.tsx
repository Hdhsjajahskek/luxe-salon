"use client";

import { useState } from "react";

const BRIDAL_ITEMS = [
  { id: "facial", label: "Pre-Bridal Facial Package (3 sessions)", price: 4500 },
  { id: "cleanup", label: "Monthly Clean-up (3 months)", price: 1200 },
  { id: "wax", label: "Full Body Wax Package", price: 2500 },
  { id: "hairspa", label: "Hair Spa Package (3 sessions)", price: 3000 },
  { id: "haircut", label: "Haircut & Styling", price: 800 },
  { id: "haircolor", label: "Hair Color / Highlights", price: 4000 },
  { id: "mehndi", label: "Bridal Mehndi", price: 5000 },
  { id: "makeup", label: "Wedding Day Makeup", price: 15000 },
  { id: "hairdo", label: "Wedding Day Hair Styling", price: 3000 },
  { id: "nail", label: "Bridal Nail Art", price: 1500 },
];

export function BridalPackageBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const subtotal = selected.reduce((sum, id) => {
    const item = BRIDAL_ITEMS.find((s) => s.id === id);
    return sum + (item?.price || 0);
  }, 0);

  // 15% discount for bridal packages over ₹20,000
  const discount = subtotal >= 20000 ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - discount;

  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#e8b4b8]">
        BRIDAL PACKAGE BUILDER
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Design your dream bridal package.
      </h3>

      <div className="mb-6 space-y-2">
        {BRIDAL_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition ${
              selected.includes(item.id)
                ? "border-[#e8b4b8] bg-[#e8b4b8]/10 text-[#e8b4b8]"
                : "border-[#241a20] bg-[#1a1318] text-[#f8f4f6] hover:border-[#e8b4b8]/50"
            }`}
          >
            <span className="flex items-center gap-3">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded border ${
                  selected.includes(item.id)
                    ? "border-[#e8b4b8] bg-[#e8b4b8] text-[#0b0709]"
                    : "border-[#241a20]"
                }`}
              >
                {selected.includes(item.id) && "✓"}
              </span>
              {item.label}
            </span>
            <span className="font-mono text-xs">₹{item.price}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/5 p-6">
        <div className="flex justify-between text-sm">
          <span className="text-[#948a91]">Subtotal</span>
          <span className="text-white">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-[#948a91]">Bridal discount (15%)</span>
            <span className="text-[#10b981]">
              -₹{discount.toLocaleString("en-IN")}
            </span>
          </div>
        )}
        <div className="flex justify-between border-t border-[#d4af37]/20 pt-3">
          <span className="font-semibold text-[#d4af37]">Total</span>
          <span className="text-2xl font-bold text-[#d4af37]">
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>
        {subtotal > 0 && subtotal < 20000 && (
          <p className="pt-2 text-xs text-[#948a91]">
            Add ₹{(20000 - subtotal).toLocaleString("en-IN")} more to unlock
            the 15% bridal discount.
          </p>
        )}
      </div>

      <a
        href="#book"
        className="mt-6 block w-full rounded-full bg-[#e8b4b8] py-3 text-center font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb]"
      >
        BOOK BRIDAL CONSULTATION →
      </a>
    </div>
  );
}