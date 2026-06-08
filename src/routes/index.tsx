import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Cut Media — Cinematic Reels for Luxury Real Estate" },
      { name: "description", content: "Prime Cut Media transforms a single estate tour into twenty cinematic luxury reels — scored, captioned and colour-graded for the world's finest agents." },
      { name: "keywords", content: "luxury real estate video, cinematic property reels, real estate marketing, Instagram reels for agents, luxury property videography, London property videographer" },
      { property: "og:title", content: "Prime Cut Media — Cinematic Reels for Luxury Real Estate" },
      { property: "og:description", content: "One estate tour. Twenty cinematic reels. A season of social, cut in a week." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Prime Cut Media",
          description: "Cinematic reel production for luxury real estate agents.",
          email: "studio@primecutmedia.uk",
          url: "https://primecutmedia.uk",
          areaServed: ["London", "New York", "Worldwide"],
          priceRange: "££££",
        }),
      },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Our Process", href: "#process" },
  { label: "Creative Style", href: "#style" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Multiplier />
      <Style />
      <Testimonials />
      <Investment />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#top" className="text-xl tracking-wide">
          <span className="font-serif">Prime Cut</span>{" "}
          <span className="italic-serif text-primary">Media</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-gold-soft transition-colors"
        >
          Request a Custom Sample
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=2400&q=85"
        alt="Luxury estate exterior at dusk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-primary mb-8">
            <span className="w-10 h-px bg-primary" />
            Digital Global Studio — London · New York &amp; Beyond
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-cream">
            Property tours,{" "}
            <span className="italic-serif text-primary">composed</span> into cinematic reels.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Prime Cut Media transforms a single estate tour into twenty viral luxury reels —
            scored, captioned and colour-graded for the agents listing the world's most
            considered homes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-gold-soft transition-colors">
              Request a Custom Sample →
            </a>
            <a href="#style" className="px-8 py-4 border border-cream/30 text-cream text-xs uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-colors">
              View Creative Style
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em]">
            <span className="text-primary">Trusted By</span>
            {["Knight Frank", "Savills", "Sotheby's", "Christie's", "Beauchamp"].map((b) => (
              <span key={b} className="text-cream/80">{b}</span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative aspect-[9/16] max-w-sm ml-auto shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85"
              alt="Luxury living room reel preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
            <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-primary">Reel 04 / 20</div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="italic-serif text-2xl text-cream leading-tight">"A Belgravia townhouse, reimagined."</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/70">2.4M views · 38K saves</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ numeral, title }: { numeral: string; title: string }) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-primary mb-6">
      <span className="italic-serif text-base">{numeral}</span>
      <span className="w-10 h-px bg-primary" />
      {title}
    </div>
  );
}

function Multiplier() {
  return (
    <section id="process" className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel numeral="I" title="The Multiplier" />
        <h2 className="text-4xl md:text-6xl max-w-4xl leading-[1.1]">
          One tour. <span className="italic-serif text-primary">Twenty reels.</span> A season of
          social, cut in a week.
        </h2>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Most agents film a property once and post a single walkthrough. We extract every
          cinematic moment — the marble, the morning light, the architectural reveal — and
          compose them into vertical reels engineered for affluent buyers' feeds.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
          <Step
            kicker="The Footage"
            big="1"
            unit="long-form tour"
            body="A 30 to 90 minute walkthrough of the listing. Drone, interior, twilight — whatever you have."
          />
          <div className="bg-card p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">The Composition</p>
            <ul className="space-y-4 text-cream/90">
              {[
                "Hand-selected hero moments",
                "Architectural pacing & rhythm",
                "Editorial colour grade",
                "Bespoke score & sound design",
                "Captioned for sound-off scroll",
              ].map((t, i) => (
                <li key={t} className="flex gap-4">
                  <span className="italic-serif text-primary">0{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <Step
            kicker="The Delivery"
            big="20"
            unit="cinematic reels"
            body="Delivered in 9:16, 1:1 and 16:9 — ready for Instagram, TikTok and your private client list."
          />
        </div>
      </div>
    </section>
  );
}

function Step({ kicker, big, unit, body }: { kicker: string; big: string; unit: string; body: string }) {
  return (
    <div className="bg-card p-10">
      <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">{kicker}</p>
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-7xl text-cream">{big}</span>
        <span className="text-sm italic-serif text-muted-foreground">{unit}</span>
      </div>
      <p className="mt-6 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Style() {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  ];
  return (
    <section id="style" className="py-32 px-6 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <SectionLabel numeral="II" title="Creative Style" />
        <h2 className="text-4xl md:text-6xl max-w-4xl leading-[1.1]">
          A house style as <span className="italic-serif text-primary">considered</span> as the homes themselves.
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={src} className="aspect-[3/4] overflow-hidden">
              <img src={src} alt={`Reel still ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    "Prime Cut produced twenty reels from a single Eaton Square viewing. Three of them generated direct enquiries from international buyers within the week. They have become indispensable.",
    "The cinematography rivals our magazine campaigns, but at a fraction of the cost and turnaround. Our listings now have a presence on social that matches the quality of the homes themselves.",
    "We retained Prime Cut on the Pro plan for our Cap Ferrat collection. Reels from a single tour now reach more qualified buyers than a full month of paid media.",
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel numeral="IV" title="From Our Agents" />
        <h2 className="text-4xl md:text-6xl max-w-4xl leading-[1.1]">
          Endorsed by the <span className="italic-serif text-primary">finest houses.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border">
          {quotes.map((q, i) => (
            <figure key={i} className="bg-card p-10">
              <span className="font-serif text-6xl text-primary leading-none">&ldquo;</span>
              <blockquote className="mt-4 text-cream/90 leading-relaxed italic-serif text-lg">{q}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investment() {
  const plans = [
    {
      name: "The Signature Trim",
      price: "£299",
      tag: "An elegant entry — the Prime Cut treatment for the agent listing one signature property a month.",
      features: [
        "4 bespoke viral clips",
        "Luxury captioning & typography",
        "Hook optimization on every reel",
        "Editorial colour grade",
        "9:16 + 1:1 platform exports",
        "7 day turnaround",
      ],
    },
    {
      name: "The Elite Retainer",
      price: "£499",
      featured: true,
      tag: "Our most considered tier — for agents who list in earnest and want a sustained presence.",
      features: [
        "12 bespoke viral clips",
        "Custom hook strategy by our copy desk",
        "Priority delivery — 5 day turnaround",
        "Editorial colour grade & bespoke score",
        "9:16, 1:1 and 16:9 exports",
        "Dedicated producer",
        "Two complimentary revision rounds",
      ],
    },
    {
      name: "The Empire Plan",
      price: "£899",
      tag: "For the brokerage building a media empire across an entire portfolio of listings.",
      features: [
        "Unlimited viral clips",
        "Cross-platform distribution — TikTok, Reels & Shorts",
        "Dedicated account management",
        "48 hour priority turnaround",
        "Brand-trained editing pipeline",
        "Bespoke posting calendar",
        "Quarterly strategy session",
      ],
    },
  ];
  return (
    <section id="investment" className="py-32 px-6 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <SectionLabel numeral="V" title="Investment" />
        <h2 className="text-4xl md:text-6xl max-w-4xl leading-[1.1]">
          A retainer, <span className="italic-serif text-primary">not a project fee.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Three plans, billed monthly. Cancel with 30 days' notice — most of our agents do not.
        </p>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-10 border ${p.featured ? "border-primary bg-card" : "border-border bg-card/60"}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-10 bg-primary text-primary-foreground px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  Most Subscribed
                </span>
              )}
              <h3 className="text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.tag}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl text-cream">{p.price}</span>
                <span className="text-muted-foreground text-sm">/ month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-cream/90">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-primary">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 block text-center px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-gold-soft"
                    : "border border-cream/30 text-cream hover:border-primary hover:text-primary"
                }`}
              >
                Subscribe to {p.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">
          All payments processed securely via Stripe. VAT applied where applicable.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "Do you work with international agents?", a: "Yes. We work with luxury brokerages across London, New York, the Côte d'Azur, Dubai, and beyond. Footage is uploaded remotely and reels are delivered through your private client folder." },
    { q: "What footage do I need to send?", a: "A long-form walkthrough — anywhere from 30 to 90 minutes. Drone, interior, twilight, lifestyle B-roll. The richer the footage, the more cinematic the cut." },
    { q: "How long until I receive the first reels?", a: "Standard turnaround is 7 days from receipt of footage. Elite and Empire tiers receive priority delivery in 5 days or 48 hours respectively." },
    { q: "Do I retain the rights to the reels?", a: "Entirely. You own every frame we deliver, with full commercial usage rights across all platforms in perpetuity." },
    { q: "Can you match our brand guidelines?", a: "Yes. We onboard your brand assets — typography, colour palette, logo treatments — into a bespoke editing pipeline so every reel reads as unmistakably yours." },
  ];
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <SectionLabel numeral="VII" title="Enquiries" />
        <h2 className="text-4xl md:text-6xl leading-[1.1]">
          Frequently <span className="italic-serif text-primary">considered.</span>
        </h2>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {items.map((it) => (
            <details key={it.q} className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg md:text-xl text-cream pr-6">{it.q}</span>
                <span className="text-primary italic-serif text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`,
    );
    window.location.href = `mailto:studio@primecutmedia.uk?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border bg-ink">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
        <div>
          <SectionLabel numeral="VIII" title="Contact" />
          <h2 className="text-4xl md:text-5xl leading-[1.1]">
            Request a <span className="italic-serif text-primary">custom sample.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Tell us about the property and the audience you'd like to reach. We'll respond within
            one business day with a bespoke proposal.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Studio</p>
            <a href="mailto:studio@primecutmedia.uk" className="block text-cream hover:text-primary transition-colors">
              studio@primecutmedia.uk
            </a>
            <p className="text-muted-foreground">London · New York &amp; Beyond</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          {[
            { k: "name", l: "Name", t: "text" },
            { k: "email", l: "Email", t: "email" },
            { k: "company", l: "Brokerage", t: "text" },
          ].map((f) => (
            <div key={f.k}>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{f.l}</label>
              <input
                required
                type={f.t}
                maxLength={200}
                value={form[f.k as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="w-full bg-input/40 border border-border px-4 py-3 text-cream focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Tell us about the listing</label>
            <textarea
              required
              rows={5}
              maxLength={2000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-input/40 border border-border px-4 py-3 text-cream focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-gold-soft transition-colors">
            Send Enquiry →
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <p>
          <span className="font-serif text-base text-cream">Prime Cut</span>{" "}
          <span className="italic-serif text-primary text-base">Media</span>
        </p>
        <p>© {new Date().getFullYear()} Prime Cut Media. All rights reserved.</p>
        <a href="mailto:studio@primecutmedia.uk" className="hover:text-primary transition-colors">studio@primecutmedia.uk</a>
      </div>
    </footer>
  );
}
