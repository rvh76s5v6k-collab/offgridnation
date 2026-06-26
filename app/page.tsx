import Image from "next/image";

const stripePreorderLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Privacy", href: "#privacy" },
  { label: "Founding Preorder", href: "#preorder" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    title: "Up to 64 TB",
    body: "Millions of files. Local storage at scale.",
  },
  {
    title: "Offline after setup",
    body: "Built to run without internet.",
  },
  {
    title: "Cloud-independent access",
    body: "Critical knowledge stays available locally.",
  },
  {
    title: "Optional off-grid power",
    body: "Solar-ready systems for remote use.",
  },
];

const cards = [
  {
    title: "OffGrid Vault Box",
    body: "Massive local storage. Private AI access.",
    image: "/offgrid/tier-1-references/ai-boxes/1.png",
    alt: "Black and silver OffGrid vault hardware box",
  },
  {
    title: "Business Vault",
    body: "Private AI for SOPs, contracts, manuals, and internal knowledge.",
    image: "/offgrid/tier-1-references/realistic-scene/1.png",
    alt: "Realistic desk scene for a private business AI vault",
  },
  {
    title: "Field Deployment Kit",
    body: "Drones, cameras, sensors, and local AI for remote site intelligence.",
    image: "/offgrid/extra-portfolio/field-ops-drone-hero.png",
    alt: "Field drone deployment kit in a remote environment",
  },
  {
    title: "Humanitarian + Education",
    body: "A box can carry knowledge.",
    image: "/offgrid/extra-portfolio/offgrid-village.png",
    alt: "OffGrid system used in a village setting",
  },
  {
    title: "Personal + Family Vault",
    body: "Protect family records, photos, IDs, memories, and private files offline.",
    image: "/offgrid/extra-portfolio/home-background-image.png",
    alt: "Private family vault represented by a realistic home scene",
  },
  {
    title: "OffGrid VaultKey USB",
    body: "A pocket starter kit for organizing your private offline vault before upgrading into a full custom OffGrid AI build.",
    image: "/offgrid/extra-portfolio/vault-key.png",
    alt: "OffGrid VaultKey USB starter kit",
  },
];

const faqs = [
  {
    question: "Does OffGrid AI need internet?",
    answer: "No internet is required after setup. Installation, setup, or future updates may use internet access.",
  },
  {
    question: "Is this a standard product or custom build?",
    answer: "Each setup is scoped around your files, storage needs, hardware, power options, and install requirements.",
  },
  {
    question: "What does the preorder cover?",
    answer: "The $499 founding preorder reserves early access and is credited toward a full custom OffGrid AI setup.",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,255,255,0.13),transparent_30%),linear-gradient(180deg,#0b0b0b_0%,#050505_46%,#010101_100%)]" />

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-10">
        <a className="flex items-center gap-3" href="#top" aria-label="OffGrid Nation home">
          <Image src="/offgrid/tier-1-references/logo/logo2.png" alt="OffGrid Nation logo" width={40} height={40} className="h-10 w-10 rounded-full object-contain" priority />
          <span className="text-sm font-semibold tracking-[0.32em] text-white sm:text-base">OFFGRID NATION</span>
        </a>
        <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-white/62 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} className="transition hover:text-white" href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="hidden rounded-full border border-white/20 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-neutral-200 sm:inline-flex" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">
          Reserve Founding Preorder
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:pb-24" id="privacy">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/52">OFFGRID NATION PRESENTS OFFGRID AI</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
            Private intelligence on hardware you control.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
            Custom local AI vaults for your files, your work, and your private knowledge — built to run on hardware you control, with no internet required after setup.
          </p>
          <p className="mt-5 max-w-2xl border-l border-white/20 pl-5 text-sm leading-7 text-neutral-400 sm:text-base">
            From Dallas to Davao. From Austin to Australia. Your files. Your device. No internet required.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:bg-neutral-200" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">Reserve Founding Preorder</a>
            <a className="rounded-full border border-white/25 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white/10" href="#solutions">Explore Solutions</a>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/60 lg:min-h-[640px]">
          <Image src="/offgrid/sot-layover.png" alt="Premium dark OffGrid AI hardware visual direction" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.78)_100%)]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
            <span className="text-xs uppercase tracking-[0.28em] text-white/62">Local AI Vault</span>
            <span className="flex items-center gap-2 text-xs text-white/70"><span className="h-2 w-2 rounded-full bg-[#75d36a]" />Ready</span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10" aria-label="OffGrid AI feature strip">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="border-white/10 p-6 md:border-r md:last:border-r-0">
              <div className="mb-5 h-1.5 w-1.5 rounded-full bg-[#75d36a]" />
              <h2 className="text-xl font-semibold tracking-[-0.03em]">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24" id="solutions">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end" id="products">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/45">Products + Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Built for real files, real places, real control.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0b] shadow-xl shadow-black/30">
              <div className="relative h-72 overflow-hidden bg-neutral-950">
                <Image src={card.image} alt={card.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.34))]" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-neutral-400">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:px-10" id="preorder">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#f5f5f5,#b8b8b8_48%,#ffffff)] p-7 text-black shadow-2xl shadow-black/50 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-black/50">FOUNDING PREORDER</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">$499 Founding Preorder</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">Reserve early access. Your preorder is credited toward a full custom OffGrid AI setup.</p>
            <p className="mt-4 text-sm text-black/55">Final pricing depends on device, storage, files, power options, and install scope.</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a className="rounded-full bg-black px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-neutral-800" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">Reserve Founding Preorder</a>
            <p className="text-sm text-black/55">Secure checkout via Stripe.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-5 px-5 pb-12 sm:px-8 md:grid-cols-3 lg:px-10" id="faq">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <summary className="cursor-pointer list-none font-semibold tracking-[-0.02em]">{faq.question}</summary>
            <p className="mt-4 text-sm leading-6 text-neutral-400">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 text-center sm:px-8 lg:px-10" id="contact">
        <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">The most useful AI is the one you control.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400">For your business. For your family. For the moments when the cloud is not enough.</p>
      </section>
    </main>
  );
}
