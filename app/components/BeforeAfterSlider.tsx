"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updatePosition(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  }

  function handleMouseDown() {
    dragging.current = true;
  }
  function handleMouseUp() {
    dragging.current = false;
  }
  function handleMouseMove(e: React.MouseEvent) {
    if (dragging.current) updatePosition(e.clientX);
  }
  function handleTouchMove(e: React.TouchEvent) {
    updatePosition(e.touches[0].clientX);
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-[#241a20]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        className="pointer-events-none object-cover"
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full w-screen max-w-none">
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="pointer-events-none object-cover"
          />
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 font-mono text-[10px] tracking-widest text-white backdrop-blur">
        {beforeLabel.toUpperCase()}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#e8b4b8] px-3 py-1 font-mono text-[10px] tracking-widest text-[#0b0709]">
        {afterLabel.toUpperCase()}
      </span>

      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-1 bg-[#e8b4b8]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e8b4b8] text-[#0b0709] shadow-lg">
          <span className="text-xl">⇄</span>
        </div>
      </div>
    </div>
  );
}