import Image from "next/image";
import { HairColorEstimator } from "./components/HairColorEstimator";
import { SkinTypeQuiz } from "./components/SkinTypeQuiz";
import { TreatmentCostCalculator } from "./components/TreatmentCostCalculator";
import { BridalPackageBuilder } from "./components/BridalPackageBuilder";
import { BookingForm } from "./components/BookingForm";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Luxe Salon interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0709] via-[#0b0709]/85 to-[#0b0709]/40" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-32 md:py-40">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-xs tracking-widest text-[#e8b4b8]">
              LUXE SALON & SPA // ALIGARH
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Where beauty
              <br />
              <span className="bg-gradient-to-r from-[#e8b4b8] to-[#d4af37] bg-clip-text text-transparent">
                meets luxury.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[#c9bcc2]">
              Expert stylists. Premium products. A space that's all yours.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="rounded-full bg-[#e8b4b8] px-8 py-4 font-semibold text-[#0b0709] transition hover:bg-[#f0c8cb] hover:shadow-[0_0_30px_-5px_#e8b4b8]"
              >
                BOOK APPOINTMENT →
              </a>
              <a
                href="#gallery"
                className="rounded-full border border-white/30 bg-black/20 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-[#e8b4b8] hover:text-[#e8b4b8]"
              >
                SEE OUR WORK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST TICKER */}
      <section className="overflow-hidden border-y border-[#241a20] bg-[#120d10] py-5">
        <div className="flex animate-marquee gap-12 whitespace-nowrap font-mono text-sm text-[#948a91]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              <span><span className="text-[#e8b4b8]">✓</span> 10+ YEARS EXPERIENCE</span>
              <span><span className="text-[#e8b4b8]">✓</span> 5,000+ HAPPY CLIENTS</span>
              <span><span className="text-[#e8b4b8]">✓</span> PREMIUM PRODUCTS ONLY</span>
              <span><span className="text-[#e8b4b8]">✓</span> CERTIFIED STYLISTS</span>
              <span><span className="text-[#e8b4b8]">✓</span> BRIDAL SPECIALISTS</span>
              <span><span className="text-[#e8b4b8]">✓</span> HYGIENE FIRST</span>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERS STRIP */}
      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-gradient-to-r from-[#120d10] to-[#1a1216] p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-[#d4af37] px-3 py-1 font-mono text-[10px] tracking-widest text-[#0b0709]">
                LIMITED
              </span>
              <div>
                <p className="mb-1 text-xl font-bold md:text-2xl">
                  Bridal Season Offer — 15% off
                </p>
                <p className="text-sm text-[#948a91]">
                  On all pre-bridal packages. Valid till 31 March 2026.
                </p>
              </div>
            </div>
            <a
              href="#bridal"
              className="rounded-full bg-[#d4af37] px-6 py-3 font-semibold text-[#0b0709] transition hover:bg-[#e0bc4d]"
            >
              CLAIM OFFER →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">OUR SERVICES</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need. Under one roof.
          </h2>
          <p className="max-w-2xl text-lg text-[#948a91]">
            Hair, skin, nails, and spa — all handled by specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            image="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
            title="Hair Services"
            description="Cuts, colors, keratin, and styling by expert stylists."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
            title="Skin Care"
            description="Facials, clean-ups, and advanced skin treatments."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
            title="Nails & Spa"
            description="Manicure, pedicure, nail art, and relaxing massages."
          />
          <ServiceCard
            image="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&q=80"
            title="Bridal Packages"
            description="Complete bridal transformation — pre to post wedding."
          />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">OUR WORK</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Real transformations.
            </h2>
            <p className="max-w-2xl text-lg text-[#948a91]">
              Hair, skin, nails, and bridal — a glimpse of what we create every day.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <GalleryImage
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
              alt="Hair styling"
              className="col-span-2 row-span-2 aspect-square md:col-span-1 md:row-span-1"
            />
            <GalleryImage
              src="https://plus.unsplash.com/premium_photo-1661768055500-45bf4357bb85?w=800&q=80"
              alt="Makeup artist at work"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80"
              alt="Facial treatment"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80"
              alt="Nail art"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1610047614301-13c63f00c032?w=800&q=80"
              alt="Woman in red and gold sari"
              className="aspect-square"
            />
            <GalleryImage
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80"
              alt="Salon interior"
              className="aspect-square"
            />
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
            TRANSFORMATIONS
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            See the difference.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#948a91]">
            Drag the slider to see real client transformations.
          </p>
        </div>
        <BeforeAfterSlider
          beforeImage="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1000&q=80"
          afterImage="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1000&q=80"
        />
      </section>

      {/* BEAUTY TOOLS */}
      <section id="tools" className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">FREE BEAUTY TOOLS</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Plan your look.
            </h2>
            <p className="max-w-2xl text-lg text-[#948a91]">
              Free tools to help you pick the right service. No signup required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div id="color"><HairColorEstimator /></div>
            <div id="skin"><SkinTypeQuiz /></div>
            <div id="cost"><TreatmentCostCalculator /></div>
            <div id="bridal"><BridalPackageBuilder /></div>
          </div>
        </div>
      </section>

      {/* STYLISTS */}
      <section id="stylists" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">OUR STYLISTS</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Artists. Specialists. Yours.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StylistCard
            image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80"
            name="Priya Sharma"
            specialty="Senior Stylist & Hair Expert"
            experience="12 years"
          />
          <StylistCard
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            name="Neha Kapoor"
            specialty="Color Specialist"
            experience="8 years"
          />
          <StylistCard
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
            name="Aisha Khan"
            specialty="Skin & Bridal Expert"
            experience="10 years"
          />
        </div>
      </section>

      {/* BRIDAL CTA */}
      <section className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-[#241a20] bg-[#0b0709]">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1610047614301-13c63f00c032?w=1000&q=80"
                  alt="Bridal styling"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <p className="mb-4 font-mono text-xs tracking-widest text-[#d4af37]">
                  BRIDAL PACKAGES
                </p>
                <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                  Your wedding day, perfected.
                </h2>
                <p className="mb-8 text-lg text-[#948a91]">
                  Pre-bridal treatments, trial sessions, and full wedding-day
                  styling. 2-3 months in advance is ideal — we book out fast
                  during wedding season.
                </p>
                <a
                  href="#bridal"
                  className="inline-block rounded-full bg-gradient-to-r from-[#e8b4b8] to-[#d4af37] px-8 py-4 font-semibold text-[#0b0709] transition hover:shadow-[0_0_40px_-10px_#e8b4b8]"
                >
                  BUILD YOUR BRIDAL PACKAGE →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">CLIENT STORIES</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Loved by 5,000+ clients.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Sneha Gupta"
            service="Bridal Package"
            text="My wedding look was perfect. They took care of everything from pre-bridal to the big day."
          />
          <TestimonialCard
            name="Ritika Singh"
            service="Hair Color"
            text="Best color job I've ever had. The shade was exactly what I wanted."
          />
          <TestimonialCard
            name="Pooja Verma"
            service="Skin Treatment"
            text="My skin has never looked better. The facial package is worth every rupee."
          />
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
                @LUXESALON.ALIGARH
              </p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Follow the work.
              </h2>
              <p className="text-lg text-[#948a91]">
                Daily transformations, tips, and behind-the-scenes.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e8b4b8] px-6 py-3 font-semibold text-[#e8b4b8] transition hover:bg-[#e8b4b8] hover:text-[#0b0709]"
            >
              FOLLOW ON INSTAGRAM →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {[
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
              "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
              "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&q=80",
              "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
              "https://images.unsplash.com/photo-1610047614301-13c63f00c032?w=600&q=80",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
            ].map((src, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg border border-[#241a20]"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
                  <span className="text-2xl">❤</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">FREQUENTLY ASKED</p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-4">
          <Faq q="Do I need an appointment?">
            Yes, appointments get priority. Walk-ins are welcome but may have
            to wait. Book online in 30 seconds for guaranteed slots.
          </Faq>
          <Faq q="What products do you use?">
            We use premium brands only — L&apos;Oréal, Kerastase, Olaplex, and
            other industry leaders.
          </Faq>
          <Faq q="How far in advance should I book bridal packages?">
            2-3 months is ideal for bridal. That gives time for pre-bridal
            treatments and trials.
          </Faq>
          <Faq q="Do you offer home services?">
            Yes for bridal packages within Aligarh. Contact us for details.
          </Faq>
          <Faq q="What's your cancellation policy?">
            Free cancellation up to 24 hours before your appointment.
          </Faq>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="border-t border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">BOOK APPOINTMENT</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Ready to look your best?
            </h2>
            <p className="max-w-2xl text-lg text-[#948a91]">
              Pick your service and stylist. We&apos;ll WhatsApp you to confirm.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}

// ==== COMPONENTS ====

function ServiceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#241a20] bg-[#120d10] transition-all duration-500 hover:border-[#e8b4b8]/50 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-[#948a91]">{description}</p>
      </div>
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#241a20] ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function StylistCard({
  image,
  name,
  specialty,
  experience,
}: {
  image: string;
  name: string;
  specialty: string;
  experience: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#241a20] bg-[#120d10] transition hover:border-[#e8b4b8]/50">
      <div className="relative aspect-square">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-2 text-sm text-[#e8b4b8]">{specialty}</p>
        <p className="font-mono text-xs text-[#d4af37]">{experience} experience</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  name,
  service,
  text,
}: {
  name: string;
  service: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#0b0709] p-6">
      <p className="mb-4 font-mono text-xs tracking-widest text-[#d4af37]">
        {service.toUpperCase()}
      </p>
      <p className="mb-6 leading-relaxed text-[#d4c8ce]">&ldquo;{text}&rdquo;</p>
      <div className="border-t border-[#241a20] pt-4">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-[#241a20] bg-[#120d10] p-5 transition-colors hover:border-[#e8b4b8]/50">
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-[#f8f4f6]">
        {q}
        <span className="text-xl text-[#e8b4b8] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-[#948a91]">{children}</p>
    </details>
  );
}