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
              <a href="#services" className="text-[#948a91] transition hover:text-white">
                Services
              </a>
              <a href="#gallery" className="text-[#948a91] transition hover:text-white">
                Gallery
              </a>
              <a href="#tools" className="text-[#948a91] transition hover:text-white">
                Beauty Tools
              </a>
              <a href="#stylists" className="text-[#948a91] transition hover:text-white">
                Stylists
              </a>
              <a href="#book" className="text-[#948a91] transition hover:text-white">
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
              <a href="#services" className="whitespace-nowrap text-[#948a91] transition hover:text-white">
                Services
              </a>
              <a href="#color" className="whitespace-nowrap text-[#948a91] transition hover:text-white">
                Hair Color
              </a>
              <a href="#skin" className="whitespace-nowrap text-[#948a91] transition hover:text-white">
                Skin Quiz
              </a>
              <a href="#cost" className="whitespace-nowrap text-[#948a91] transition hover:text-white">
                Cost Calculator
              </a>
              <a href="#bridal" className="whitespace-nowrap text-[#948a91] transition hover:text-white">
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

        {/* FLOATING WHATSAPP */}
        <a
          href="https://wa.me/919837012345?text=Hi%20Luxe%20Salon%2C%20I'd%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-whatsapp fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1DA851]"
          aria-label="Book on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}