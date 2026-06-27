import Image from "next/image";

const vaultKeyCheckoutLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const navItems = [
  { label: "Founding Sale", href: "#founding-sale" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

const featureRows = [
  {
    eyebrow: "Founding Edition",
    title: "Built for private AI",
    body: "VaultKey is a premium local-AI carry kit for people who want private AI files on hardware they control.",
  },
  {
    eyebrow: "Local AI setup",
    title: "Carry the stack",
    body: "VaultKey carries the local AI setup, models, prompts, documents, and onboarding path. Your compatible Mac or Windows computer runs the AI locally.",
  },
  {
    eyebrow: "No cloud after setup",
    title: "Private by design",
    body: "After setup, your files and AI workflow can run without cloud dependency on your own compatible computer.",
  },
  {
    eyebrow: "Founding batch",
    title: "Ships in up to 4 weeks",
    body: "The first batch is being fulfilled carefully for early buyers, with timing based on founding-batch volume.",
  },
];

const includedItems = [
  "Premium VaultKey hardware in black, white, and silver direction",
  "Local AI setup carrier for compatible Mac or Windows computers",
  "Starter private knowledge-vault structure for documents and prompts",
  "Offline-after-setup workflow guidance",
  "Founding Edition buyer status for the first 100 units",
];

const tiers = [
  {
    name: "VaultKey Founding Edition",
    badge: "Best choice · First 100 Units",
    price: "$99",
    note: "Founding Sale",
    description: "Start with the Founding Edition first-batch price before the planned regular price.",
    cta: "Buy VaultKey — $99",
    featured: true,
  },
  {
    name: "VaultKey Regular",
    badge: "Planned",
    price: "$259",
    note: "Planned regular price",
    description: "Future pricing planned after the Founding Sale closes.",
    cta: "Buy Founding Edition",
    featured: false,
  },
  {
    name: "Vault Box Path",
    badge: "Upgrade path",
    price: "Custom",
    note: "For larger deployments",
    description: "A higher-tier private vault build can come later. VaultKey is the fast way to start now.",
    cta: "Start with VaultKey",
    featured: false,
  },
];

const faqItems = [
  [
    "Does VaultKey run AI by itself?",
    "No. VaultKey does not run AI by itself. It carries the local AI setup. A compatible Mac or Windows computer runs AI locally.",
  ],
  [
    "Is cloud required?",
    "No cloud is required after setup for the local workflow. Your compatible computer runs the AI locally with the setup VaultKey carries.",
  ],
  [
    "What is the First 100 Units offer?",
    "It is the VaultKey Founding Sale for the First 100 Units at $99.",
  ],
  [
    "When does it ship?",
    "VaultKey Founding Edition ships in up to 4 weeks because the first batch is being fulfilled around founding-batch volume.",
  ],
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a className="flex items-center gap-3" href="#top" aria-label="OffGrid Nation home">
            <Image src="/offgrid/tier-1-references/logo/logo2.png" alt="OffGrid Nation logo" width={42} height={42} className="h-10 w-10 rounded-full object-contain ring-1 ring-white/15" priority />
            <span className="text-sm font-black tracking-[0.24em] text-white sm:text-base">OFFGRID</span>
          </a>
          <nav className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/58 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} className="transition hover:text-white" href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="rounded-full bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-black shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition hover:bg-zinc-200" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">
            Buy VaultKey
          </a>
        </div>
      </header>

      <section className="relative min-h-screen px-5 pb-16 pt-28 sm:px-8 lg:px-10" aria-labelledby="hero-heading">
        <div className="absolute inset-0">
          <Image src="/offgrid/vaultkey-ai/vaultkey-sot-no-text.png" alt="" fill className="object-cover object-center opacity-80" sizes="100vw" priority />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.02),rgba(0,0,0,0.22)_34%,rgba(0,0,0,0.92)_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.88)_32%,rgba(5,5,5,0.35)_62%,rgba(5,5,5,0.9)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl py-10">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-zinc-200">OFFGRID AI — VAULTKEY</p>
            <h1 id="hero-heading" className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
              Your AI. In Your Pocket.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              A private AI starter key for compatible Mac and Windows computers. VaultKey carries the local AI setup, starter model, vault folders, prompt packs, setup guide, and Truth Mode behavior guide. Your computer runs the AI locally. No cloud required after setup.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_24px_70px_rgba(255,255,255,0.18)] transition hover:bg-zinc-200" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">Buy VaultKey — $99</a>
              <a className="rounded-full border border-white/18 bg-white/5 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-white/40 hover:bg-white/10" href="#how-it-works">See how it works</a>
            </div>
            <p className="mt-5 max-w-2xl text-sm font-bold uppercase tracking-[0.12em] text-zinc-400">Founding Sale — Planned regular price $259 — First 100 units — Ships in up to 4 weeks.</p>
            <div className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-white/12 rounded-[1.5rem] border border-white/12 bg-black/38 p-4 backdrop-blur">
              <div className="px-3"><p className="text-2xl font-black">$99</p><p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/48">Founding</p></div>
              <div className="px-3"><p className="text-2xl font-black">$259</p><p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/48">Planned</p></div>
              <div className="px-3"><p className="text-2xl font-black">4 wks</p><p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/48">Up to ship</p></div>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[680px]" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0b0b]" aria-label="VaultKey feature rows">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-10">
          {featureRows.map((item) => (
            <article key={item.title} className="py-8 lg:px-6">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-white/40">{item.eyebrow}</p>
              <p className="mt-3 text-2xl font-black tracking-[-0.05em] text-white">{item.title}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="founding-sale" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/12 bg-zinc-950 shadow-[0_38px_130px_rgba(255,255,255,0.08)]">
            <Image src="/offgrid/vaultkey-ai/vaultkey-sot-no-text.png" alt="VaultKey black, white, and silver product layout" fill className="object-cover" sizes="(min-width: 1024px) 48vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.72))]" />
          </div>
          <div className="rounded-[2.5rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/42">VaultKey Founding Edition</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Start with the Founding Edition.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">Founding Edition brings premium black, white, and silver hardware direction together with a private local-AI starter workflow and a $99 first-batch entry before the planned $259 regular price.</p>
            <ul className="mt-8 grid gap-3">
              {includedItems.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-black/28 p-4 text-sm font-semibold leading-6 text-zinc-200"><span className="text-white">✦</span>{item}</li>
              ))}
            </ul>
            <a className="mt-9 inline-flex w-full justify-center rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-zinc-200 sm:w-auto" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">Buy VaultKey — $99</a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-5 py-20 text-black sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-black/40">Claim-safe architecture</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">VaultKey carries the setup. Your computer runs the AI.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              ["01", "Load your vault", "Organize critical files, prompts, and local-AI assets around the VaultKey workflow."],
              ["02", "Connect to a compatible computer", "Use a Mac or Windows computer capable of running the local AI setup VaultKey carries."],
              ["03", "Run locally after setup", "Work with your files without cloud dependency after setup. VaultKey is the carrier, not a standalone AI computer."],
            ].map(([step, title, body]) => (
              <article key={step} className="rounded-[2rem] border border-black/10 bg-zinc-50 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-black/36">{step}</p>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/58">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/42">Simple pricing</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Choose your VaultKey.</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.name} className={`${tier.featured ? "border-white bg-white text-black shadow-[0_35px_120px_rgba(255,255,255,0.16)] lg:-mt-5" : "border-white/12 bg-white/[0.045] text-white"} rounded-[2.25rem] border p-7 transition`}>
                <p className={`${tier.featured ? "bg-black text-white" : "bg-white/10 text-white/58"} inline-flex rounded-full px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.18em]`}>{tier.badge}</p>
                <h3 className="mt-6 text-2xl font-black tracking-[-0.05em]">{tier.name}</h3>
                <div className="mt-5 flex items-end gap-3"><p className="text-6xl font-black tracking-[-0.08em]">{tier.price}</p><p className={`${tier.featured ? "text-black/48" : "text-white/42"} pb-2 text-xs font-black uppercase tracking-[0.16em]`}>{tier.note}</p></div>
                <p className={`${tier.featured ? "text-black/62" : "text-zinc-400"} mt-5 min-h-20 text-sm leading-6`}>{tier.description}</p>
                <a className={`${tier.featured ? "bg-black text-white hover:bg-neutral-800" : "border border-white/14 text-white hover:bg-white/8"} mt-7 inline-flex w-full justify-center rounded-full px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em]`} href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">{tier.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-white/10 bg-[#0b0b0b] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/42">Mission copy</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Private AI should be carried, owned, and run locally.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">VaultKey turns the OffGrid mission into an accessible first product: help people start building a private AI vault without depending on the cloud after setup.</p>
          </div>
          <div className="grid gap-4">
            {faqItems.map(([question, answer]) => (
              <article key={question} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-black tracking-[-0.04em] text-white">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
