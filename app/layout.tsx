import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Salon & Spa — Premium Beauty in Aligarh",
  description:
    "Expert hair, skin, and spa services. Book your appointment online in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 z-50 border-b border-[#241a20] bg-[#0b0709]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#e8b4b8] to-[#d4af37] font-bold text-[#0b0709]">
                L
              </div>
              <div className="leading-none">
                <p className="text-lg font-bold tracking-tight text-white">
                  LUXE
                </p>
                <p className="text-[10px] tracking-widest text-[#e8b4b8]">
                  SALON & SPA
                </p>
              </div>
            </Link>
            <div className="hidden gap-8 text-sm md:flex">
              <a
                href="#services"
                className="text-[#948a91] transition hover:text-white"
              >
                Services
              </a>
              <a
                href="#tools"
                className="text-[#948a91] transition hover:text-white"
              >
                Beauty Tools
              </a>
              <a
                href="#stylists"
                className="text-[#948a91] transition hover:text-white"
              >
                Stylists
              </a>
              <a
                href="#book"
                className="text-[#948a91] transition hover:text-white"
              >
                Book
              </a>
            </div>
            <a
              href="#book"
              className="rounded-full bg-[#e8b4b8] px-5 py-2 text-sm font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb]"
            >
              BOOK NOW
            </a>
          </div>
          <div className="mx-auto max-w-7xl border-t border-[#241a20] px-6 py-3">
            <div className="flex gap-6 overflow-x-auto text-sm">
              <a
                href="#services"
                className="whitespace-nowrap text-[#948a91] transition hover:text-white"
              >
                Services
              </a>
              <a
                href="#color"
                className="whitespace-nowrap text-[#948a91] transition hover:text-white"
              >
                Hair Color
              </a>
              <a
                href="#skin"
                className="whitespace-nowrap text-[#948a91] transition hover:text-white"
              >
                Skin Quiz
              </a>
              <a
                href="#cost"
                className="whitespace-nowrap text-[#948a91] transition hover:text-white"
              >
                Cost Calculator
              </a>
              <a
                href="#bridal"
                className="whitespace-nowrap text-[#948a91] transition hover:text-white"
              >
                Bridal Package
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="mt-24 border-t border-[#241a20] bg-[#0b0709] py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#e8b4b8] to-[#d4af37] text-sm font-bold text-[#0b0709]">
                  L
                </div>
                <p className="font-bold tracking-tight text-white">
                  LUXE SALON
                </p>
              </div>
              <p className="text-sm text-[#948a91]">
                © 2026 Luxe Salon & Spa. All rights reserved.
              </p>
              <p className="font-mono text-xs text-[#948a91]">
                Demo built by{" "}
                <a
                  href="https://forge-sage-six.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6b1a] transition hover:underline"
                >
                  FORGE
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}