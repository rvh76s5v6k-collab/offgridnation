import Image from "next/image";
import Link from "next/link";

const vaultKeyCheckoutLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const featureItems = [
  "Private by Design",
  "Offline After Setup",
  "Plug & Run",
  "Pocket-Ready",
  "Upgrade Path",
];

const productCards = [
  {
    name: "VaultKey Founding Edition",
    price: "$99",
    direction: "Clean silver starter",
    description: "A first-batch entry into local AI setup carrying for compatible Mac and Windows computers.",
    finish: "from-zinc-50 via-slate-100 to-zinc-300",
    accent: "border-slate-300/80",
  },
  {
    name: "VaultKey Core",
    price: "$279",
    direction: "Black daily-use",
    description: "A dependable VaultKey tier for everyday private files, prompts, and local setup essentials.",
    finish: "from-neutral-950 via-zinc-800 to-neutral-600",
    accent: "border-neutral-700",
  },
  {
    name: "VaultKey Pro",
    price: "$449",
    direction: "Modern silver",
    description: "A sharper pro tier for users who want an elevated carry kit and stronger upgrade path.",
    finish: "from-white via-zinc-200 to-slate-400",
    accent: "border-zinc-300",
  },
  {
    name: "VaultKey Studio",
    price: "$699",
    direction: "White modern-futuristic",
    description: "Built for creative workflows, studio libraries, prompt systems, and portable AI organization.",
    finish: "from-white via-sky-50 to-zinc-200",
    accent: "border-white",
  },
  {
    name: "VaultKey Archive",
    price: "$999",
    direction: "White premium compact vault",
    description: "A compact vault direction for deeper personal archives, reference files, and long-term organization.",
    finish: "from-stone-50 via-white to-zinc-300",
    accent: "border-stone-200",
  },
  {
    name: "VaultKey Titan",
    price: "$1499",
    direction: "White/gold flagship trim",
    description: "The flagship VaultKey expression with premium trim for the most complete carry experience.",
    finish: "from-white via-amber-100 to-fuchsia-100",
    accent: "border-amber-200",
  },
];

export default function VaultKeyPage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f7f7f4] text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/82 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a className="flex items-center gap-3" href="#top" aria-label="OffGrid Nation home">
            <Image src="/offgrid/tier-1-references/logo/logo2.png" alt="OffGrid Nation logo" width={42} height={42} className="h-10 w-10 rounded-full object-contain ring-1 ring-black/10" priority />
            <span className="text-sm font-black tracking-[0.24em] text-neutral-950 sm:text-base">OFFGRID</span>
          </a>
          <nav className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-black/52 lg:flex" aria-label="Primary navigation">
            <a className="transition hover:text-black" href="#aibox">AI Box</a>
            <a className="transition hover:text-black" href="#choose">Choose</a>
            <a className="transition hover:text-black" href="#mission">Mission</a>
          </nav>
          <a className="rounded-full bg-neutral-950 px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition hover:bg-neutral-800" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">
            Buy VaultKey
          </a>
        </div>
      </header>

      <section className="relative px-5 pb-14 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20" aria-labelledby="hero-heading">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.95),rgba(232,232,226,0.82)_38%,rgba(247,247,244,1)_72%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl py-6 lg:py-16">
            <p className="inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-black/58 shadow-sm">OFFGRID AI — VAULTKEY</p>
            <h1 id="hero-heading" className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.075em] text-neutral-950 sm:text-7xl lg:text-8xl">
              Your AI. In your pocket.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62 sm:text-xl">
              VaultKey carries the local AI setup for compatible Mac and Windows computers. Plug in. Set up. Your computer runs the AI locally.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-neutral-950 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition hover:bg-neutral-800" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">Buy VaultKey — $99</a>
              <a className="rounded-full border border-black/12 bg-white/70 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-neutral-950 transition hover:border-black/28 hover:bg-white" href="#choose">Explore Systems</a>
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-black/46">Private. Offline after setup. Yours.</p>
          </div>

          <div className="relative mx-auto w-full max-w-2xl py-10" aria-label="VaultKey product visual">
            <div className="absolute inset-8 rounded-[3rem] bg-white/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white bg-[linear-gradient(145deg,#ffffff,#e5e5df)] p-5 shadow-[0_38px_120px_rgba(20,20,20,0.16)]">
              <Image src="/offgrid/vaultkey-ai/vaultkey-sot-no-text.png" alt="VaultKey product visual in black, white, and silver" width={1200} height={900} className="h-auto w-full rounded-[2.35rem] object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/75" aria-label="VaultKey feature row">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-5 sm:px-8 md:grid-cols-5 lg:px-10">
          {featureItems.map((item) => (
            <div key={item} className="rounded-2xl bg-[#f2f2ee] px-4 py-5 text-center text-xs font-black uppercase tracking-[0.18em] text-black/62 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="aibox" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.20),rgba(18,18,18,0.98)_42%,#050505_100%)] p-8 text-white shadow-[0_35px_120px_rgba(0,0,0,0.24)] lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-white/42">Upgrade Path</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Upgrade to the OffGrid AI Box.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">VaultKey gets you started. The OffGrid AI Box is the full private AI system — more storage, more power, and dedicated hardware you control.</p>
            </div>
            <Link className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-zinc-200" href="/#tier-2">Explore AI Box</Link>
          </div>
        </div>
      </section>

      <section id="choose" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-black/40">Choose Your VaultKey</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Pick the VaultKey that fits your private AI path.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productCards.map((card) => (
              <article key={card.name} className="group rounded-[2.25rem] border border-black/10 bg-[#f8f8f5] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(0,0,0,0.10)]">
                <div className={`relative h-44 overflow-hidden rounded-[1.75rem] border ${card.accent} bg-gradient-to-br ${card.finish}`}>
                  <div className="absolute left-1/2 top-1/2 h-24 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[1.4rem] border border-white/70 bg-white/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_22px_55px_rgba(0,0,0,0.18)] backdrop-blur-sm" />
                  <div className="absolute left-1/2 top-1/2 h-14 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border border-black/10 bg-white/35" />
                </div>
                <p className="mt-6 text-[0.65rem] font-black uppercase tracking-[0.24em] text-black/38">{card.direction}</p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-[-0.05em]">{card.name}</h3>
                  <p className="text-2xl font-black tracking-[-0.05em]">{card.price}</p>
                </div>
                <p className="mt-4 min-h-18 text-sm leading-6 text-black/58">{card.description}</p>
                <a className="mt-6 inline-flex w-full justify-center rounded-full bg-neutral-950 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-neutral-800" href={vaultKeyCheckoutLink} target="_blank" rel="noopener noreferrer">Select VaultKey</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-black/10 bg-[linear-gradient(145deg,#ffffff,#ecece6)] p-8 shadow-[0_28px_100px_rgba(0,0,0,0.08)] lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-black/38">Mission</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">AI should help more than it harms.</h2>
          <div className="mt-8 grid gap-4 text-lg leading-8 text-black/62 lg:grid-cols-3">
            <p>Every VaultKey sale helps build the path toward OffGrid AI’s education mission.</p>
            <p>Every completed OffGrid AI Box Founding Build allocates $250 toward remote education access in rural, remote, or under-resourced places.</p>
            <p>VaultKey is the pocket-ready starting point for people who want local AI on computers they control.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
