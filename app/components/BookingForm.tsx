"use client";

import { useState } from "react";

const SERVICES = [
  "Haircut & Styling",
  "Hair Color",
  "Hair Spa / Treatment",
  "Facial / Clean-up",
  "Waxing / Threading",
  "Manicure / Pedicure",
  "Body Massage",
  "Bridal Package",
  "Other",
];

const STYLISTS = [
  "No preference",
  "Priya (Senior Stylist)",
  "Neha (Color Expert)",
  "Aisha (Skin Specialist)",
  "Riya (Bridal Expert)",
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0],
    stylist: STYLISTS[0],
    preferred_date: "",
    preferred_time: "Morning (10 AM - 1 PM)",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (form.phone.length !== 10) {
      setLoading(false);
      setError("Please enter a 10-digit phone number");
      return;
    }

    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    const message = `Hi Luxe Salon, I just booked an appointment.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service: ${form.service}
Stylist: ${form.stylist}
Date: ${form.preferred_date || "Not specified"}
Time: ${form.preferred_time}
${form.notes ? `Notes: ${form.notes}` : ""}

Please confirm my appointment.`;

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
      message
    )}`;

    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#e8b4b8]/30 bg-[#e8b4b8]/5 p-8 text-center md:p-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8b4b8] text-3xl text-[#0b0709]">
            ✓
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Appointment booked!
          </h3>
          <p className="mx-auto max-w-md text-[#948a91]">
            We&apos;ll WhatsApp you within 5 minutes to confirm your slot.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 font-semibold text-white transition hover:bg-[#1DA851]"
        >
          SEND CONFIRMATION ON WHATSAPP →
        </a>

        <p className="text-center text-xs text-[#948a91]">
          This is a demo. The real version stores bookings and sends automated
          alerts.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            NAME
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="input-field"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            PHONE
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile number"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
          EMAIL
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="input-field"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            SERVICE
          </label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="input-field"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            PREFERRED STYLIST
          </label>
          <select
            value={form.stylist}
            onChange={(e) => setForm({ ...form, stylist: e.target.value })}
            className="input-field"
          >
            {STYLISTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            PREFERRED DATE
          </label>
          <input
            type="date"
            value={form.preferred_date}
            onChange={(e) =>
              setForm({ ...form, preferred_date: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
            PREFERRED TIME
          </label>
          <select
            value={form.preferred_time}
            onChange={(e) =>
              setForm({ ...form, preferred_time: e.target.value })
            }
            className="input-field"
          >
            <option>Morning (10 AM - 1 PM)</option>
            <option>Afternoon (1 PM - 4 PM)</option>
            <option>Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs tracking-widest text-[#948a91]">
          NOTES (OPTIONAL)
        </label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Any specific requests or preferences"
          className="input-field resize-none"
        />
      </div>

      {error && (
        <p className="font-mono text-sm text-[#ff2d00]">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#e8b4b8] py-4 font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb] hover:shadow-[0_0_30px_-5px_#e8b4b8] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b0709] border-t-transparent" />
        )}
        {loading ? "Booking..." : "BOOK APPOINTMENT →"}
      </button>

      <p className="text-center text-xs text-[#948a91]">
        We&apos;ll confirm on WhatsApp within 5 minutes.
      </p>
    </form>
  );
}