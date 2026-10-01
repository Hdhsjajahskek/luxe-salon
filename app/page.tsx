import { HairColorEstimator } from "./components/HairColorEstimator";
import { SkinTypeQuiz } from "./components/SkinTypeQuiz";
import { TreatmentCostCalculator } from "./components/TreatmentCostCalculator";
import { BridalPackageBuilder } from "./components/BridalPackageBuilder";
import { BookingForm } from "./components/BookingForm";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e8b4b8]/10 blur-[120px]" />
        <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#d4af37]/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-xs tracking-widest text-[#e8b4b8]">
              LUXE SALON & SPA // ALIGARH
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Where beauty
              <br />
              <span className="bg-gradient-to-r from-[#e8b4b8] to-[#d4af37] bg-clip-text text-transparent">
                meets luxury.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[#948a91]">
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
                href="#tools"
                className="rounded-full border border-[#241a20] px-8 py-4 font-semibold text-white transition hover:border-[#e8b4b8] hover:text-[#e8b4b8]"
              >
                TRY OUR TOOLS
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
              <span>
                <span className="text-[#e8b4b8]">✓</span> 10+ YEARS EXPERIENCE
              </span>
              <span>
                <span className="text-[#e8b4b8]">✓</span> 5,000+ HAPPY CLIENTS
              </span>
              <span>
                <span className="text-[#e8b4b8]">✓</span> PREMIUM PRODUCTS ONLY
              </span>
              <span>
                <span className="text-[#e8b4b8]">✓</span> CERTIFIED STYLISTS
              </span>
              <span>
                <span className="text-[#e8b4b8]">✓</span> BRIDAL SPECIALISTS
              </span>
              <span>
                <span className="text-[#e8b4b8]">✓</span> HYGIENE FIRST
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
            OUR SERVICES
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything you need. Under one roof.
          </h2>
          <p className="max-w-2xl text-lg text-[#948a91]">
            Hair, skin, nails, and spa — all handled by specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon="💇"
            title="Hair Services"
            description="Cuts, colors, keratin, and styling by expert stylists."
          />
          <ServiceCard
            icon="✨"
            title="Skin Care"
            description="Facials, clean-ups, and advanced skin treatments."
          />
          <ServiceCard
            icon="💅"
            title="Nails & Spa"
            description="Manicure, pedicure, nail art, and relaxing massages."
          />
          <ServiceCard
            icon="👰"
            title="Bridal Packages"
            description="Complete bridal transformation — pre to post wedding."
          />
        </div>
      </section>

      {/* BEAUTY TOOLS */}
      <section id="tools" className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
              FREE BEAUTY TOOLS
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Plan your look.
            </h2>
            <p className="max-w-2xl text-lg text-[#948a91]">
              Free tools to help you pick the right service. No signup
              required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div id="color">
              <HairColorEstimator />
            </div>
            <div id="skin">
              <SkinTypeQuiz />
            </div>
            <div id="cost">
              <TreatmentCostCalculator />
            </div>
            <div id="bridal">
              <BridalPackageBuilder />
            </div>
          </div>
        </div>
      </section>

      {/* STYLISTS */}
      <section id="stylists" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
            OUR STYLISTS
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Artists. Specialists. Yours.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StylistCard
            name="Priya Sharma"
            specialty="Senior Stylist & Hair Expert"
            experience="12 years"
          />
          <StylistCard
            name="Neha Kapoor"
            specialty="Color Specialist"
            experience="8 years"
          />
          <StylistCard
            name="Aisha Khan"
            specialty="Skin & Bridal Expert"
            experience="10 years"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-[#241a20] bg-[#120d10]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16">
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
              CLIENT STORIES
            </p>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
            FREQUENTLY ASKED
          </p>
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
            <p className="mb-4 font-mono text-xs tracking-widest text-[#e8b4b8]">
              BOOK APPOINTMENT
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Ready to look your best?
            </h2>
            <p className="max-w-2xl text-lg text-[#948a91]">
              Pick your service and stylist. We&apos;ll WhatsApp you to
              confirm.
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

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-6 transition-all duration-500 hover:border-[#e8b4b8]/50 hover:-translate-y-1">
      <p className="mb-4 text-3xl">{icon}</p>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-[#948a91] leading-relaxed">{description}</p>
    </div>
  );
}

function StylistCard({
  name,
  specialty,
  experience,
}: {
  name: string;
  specialty: string;
  experience: string;
}) {
  return (
    <div className="rounded-2xl border border-[#241a20] bg-[#120d10] p-6 transition hover:border-[#e8b4b8]/50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#e8b4b8] to-[#d4af37] text-xl font-bold text-[#0b0709]">
        {name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <h3 className="mb-1 text-xl font-bold">{name}</h3>
      <p className="mb-2 text-sm text-[#e8b4b8]">{specialty}</p>
      <p className="font-mono text-xs text-[#d4af37]">
        {experience} experience
      </p>
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
      <p className="mb-6 text-[#d4c8ce] leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
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