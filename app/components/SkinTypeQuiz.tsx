"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "How does your skin feel 1 hour after washing?",
    options: [
      { label: "Tight and dry", type: "dry" },
      { label: "Comfortable", type: "normal" },
      { label: "Shiny, especially on T-zone", type: "combination" },
      { label: "Oily all over", type: "oily" },
    ],
  },
  {
    q: "How often do you get breakouts?",
    options: [
      { label: "Rarely", type: "dry" },
      { label: "Occasionally on T-zone", type: "combination" },
      { label: "Frequently, all over", type: "oily" },
      { label: "Almost never", type: "normal" },
    ],
  },
  {
    q: "How does your skin react to new products?",
    options: [
      { label: "Often gets red or irritated", type: "sensitive" },
      { label: "Usually fine", type: "normal" },
      { label: "Rarely reacts", type: "combination" },
      { label: "Can get oily quickly", type: "oily" },
    ],
  },
  {
    q: "How does your skin look by mid-day?",
    options: [
      { label: "Flaky and dull", type: "dry" },
      { label: "Same as morning", type: "normal" },
      { label: "Shiny on forehead and nose", type: "combination" },
      { label: "Shiny everywhere", type: "oily" },
    ],
  },
  {
    q: "How do your pores look?",
    options: [
      { label: "Almost invisible", type: "dry" },
      { label: "Small and even", type: "normal" },
      { label: "Visible on T-zone", type: "combination" },
      { label: "Large and visible everywhere", type: "oily" },
    ],
  },
];

const RESULTS: Record<string, { type: string; description: string; treatments: string[] }> = {
  dry: {
    type: "Dry Skin",
    description:
      "Your skin loses moisture easily and feels tight. You need deep hydration and gentle care.",
    treatments: [
      "Hydrating Facial",
      "Hyaluronic Acid Treatment",
      "Nourishing Night Serum",
      "Gentle Exfoliation",
    ],
  },
  normal: {
    type: "Normal Skin",
    description:
      "You're lucky — your skin is balanced. Maintain it with good habits.",
    treatments: [
      "Monthly Facial",
      "Antioxidant Serum",
      "SPF Daily",
      "Regular Hydration",
    ],
  },
  combination: {
    type: "Combination Skin",
    description:
      "Your T-zone gets oily while cheeks stay dry. You need a balanced routine.",
    treatments: [
      "Balance Facial",
      "Clay Mask (T-zone)",
      "Hydrating Serum (cheeks)",
      "Niacinamide Treatment",
    ],
  },
  oily: {
    type: "Oily Skin",
    description:
      "Your skin produces excess oil. You need oil-control and deep-cleansing treatments.",
    treatments: [
      "Deep Cleansing Facial",
      "Salicylic Acid Treatment",
      "Clay Mask",
      "Oil-Free Moisturizer",
    ],
  },
  sensitive: {
    type: "Sensitive Skin",
    description:
      "Your skin reacts easily. Gentle, fragrance-free care is essential.",
    treatments: [
      "Soothing Facial",
      "Aloe Vera Treatment",
      "Fragrance-Free Products",
      "Oatmeal Mask",
    ],
  },
};

export function SkinTypeQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  function selectAnswer(type: string) {
    const next = [...answers, type];
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStep(QUESTIONS.length); // show results
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  // Count most frequent type
  const result = (() => {
    if (step < QUESTIONS.length) return null;
    const counts: Record<string, number> = {};
    answers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return RESULTS[winner] || RESULTS.normal;
  })();

  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#e8b4b8]">
        SKIN TYPE QUIZ
      </p>
      <h3 className="mb-8 text-2xl font-bold">
        Discover your skin type in 30 seconds.
      </h3>

      {step < QUESTIONS.length && (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-xs tracking-widest text-[#948a91]">
              QUESTION {step + 1} OF {QUESTIONS.length}
            </p>
            <div className="flex gap-1">
              {QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-6 rounded-full ${
                    i <= step ? "bg-[#e8b4b8]" : "bg-[#241a20]"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="mb-6 text-lg font-medium">{QUESTIONS[step].q}</p>

          <div className="space-y-3">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => selectAnswer(opt.type)}
                className="w-full rounded-lg border border-[#241a20] bg-[#1a1318] p-4 text-left text-sm transition hover:border-[#e8b4b8] hover:bg-[#1a1318]/80"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className="rounded-xl border border-[#e8b4b8]/40 bg-[#e8b4b8]/5 p-6 text-center">
            <p className="mb-2 font-mono text-xs tracking-widest text-[#948a91]">
              YOUR SKIN TYPE
            </p>
            <p className="text-3xl font-bold text-[#e8b4b8]">{result.type}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#948a91]">
              {result.description}
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-widest text-[#948a91]">
              RECOMMENDED FOR YOU
            </p>
            <div className="space-y-2">
              {result.treatments.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-lg border border-[#241a20] bg-[#1a1318] px-4 py-3 text-sm"
                >
                  <span className="text-[#d4af37]">✓</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#book"
              className="flex-1 rounded-full bg-[#e8b4b8] py-3 text-center font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb]"
            >
              BOOK CONSULTATION →
            </a>
            <button
              onClick={reset}
              className="rounded-full border border-[#241a20] px-6 py-3 text-sm font-medium text-[#948a91] transition hover:border-[#e8b4b8] hover:text-[#e8b4b8]"
            >
              Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
}