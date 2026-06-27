import Image from "next/image";

const stripePreorderLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const navItems = [
  { label: "AI Box", href: "#vault-box" },
  { label: "VaultKey", href: "#vaultkey" },
  { label: "Preorder", href: "#preorder" },
  { label: "Trust", href: "#trust" },
];

const featureRows = [
  ["Private local AI", "Ask questions across your files without sending your knowledge base to the cloud."],
  ["Up to 64 TB", "Store family archives, business records, SOPs, manuals, media, and recovery documents locally."],
  ["Offline after setup", "Designed for homes, offices, cabins, field sites, and continuity plans when connectivity fails."],
  ["Hardware you control", "A premium white/silver flagship device built around your storage, power, and privacy needs."],
];

const trustItems = ["No cloud dependency", "Custom-built in America", "Stripe-secured preorder", "Private-by-design setup"];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f7f7f5] text-[#070707]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/76 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a className="flex items-center gap-3" href="#top" aria-label="OffGrid Nation home">
            <Image src="/offgrid/tier-1-references/logo/logo2.png" alt="OffGrid Nation logo" width={42} height={42} className="h-10 w-10 rounded-full object-contain ring-1 ring-black/10" priority />
            <span className="text-sm font-black tracking-[0.24em] sm:text-base">OFFGRID</span>
          </a>
          <nav className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-black/54 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} className="transition hover:text-black" href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="rounded-full bg-black px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition hover:bg-neutral-700" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">
            Reserve
          </a>
        </div>
      </header>

      <section className="relative min-h-screen bg-[radial-gradient(circle_at_50%_10%,#ffffff_0%,#f8f8f6_34%,#e9e9e6_100%)] px-5 pb-16 pt-28 sm:px-8 lg:px-10" aria-labelledby="hero-heading">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 max-w-2xl py-8">
            <p className="text-xs font-black uppercase tracking-[0.42em] text-black/45">OffGrid Nation AI Box</p>
            <h1 id="hero-heading" className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.075em] text-black sm:text-7xl lg:text-8xl">
              Your private AI vault. In your home.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/62 sm:text-xl">
              A premium white/silver OffGrid AI Box for local intelligence, private storage, and cloud-independent access to the files that matter most.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-black px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition hover:bg-neutral-700" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">Preorder for $499</a>
              <a className="rounded-full border border-black/15 bg-white/70 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black transition hover:border-black/35 hover:bg-white" href="#vault-box">See AI Box</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[560px] overflow-hidden rounded-[2.5rem] border border-white bg-white shadow-[0_45px_140px_rgba(0,0,0,0.22)]">
            <Image src="/offgrid/home-creation/home-sot-no-text.png" alt="Premium white and silver OffGrid AI Box product direction" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" priority />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)_48%,rgba(255,255,255,0.18))]" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white" aria-label="Feature rows">
        <div className="mx-auto grid max-w-7xl divide-y divide-black/10 px-5 sm:px-8 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-10">
          {featureRows.map(([title, body]) => (
            <article key={title} className="py-7 lg:px-6">
              <p className="text-xl font-black tracking-[-0.04em]">{title}</p>
              <p className="mt-3 text-sm leading-6 text-black/55">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vault-box" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.25rem] border border-black/10 bg-[#ededeb] shadow-[0_35px_100px_rgba(0,0,0,0.16)]">
          <Image src="/offgrid/tier-1-references/ai-boxes/1.png" alt="OffGrid Vault Box white and silver hardware" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center rounded-[2.25rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.38em] text-black/42">Flagship first</p>
          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">OffGrid Vault Box</h2>
          <p className="mt-6 text-lg leading-8 text-black/62">Your personal AI appliance: local file search, private Q&A, long-term storage, and continuity access in a clean premium hardware build.</p>
          <div className="mt-8 grid gap-3 text-sm font-bold text-black/70 sm:grid-cols-2">
            <span className="rounded-2xl bg-black/[0.04] p-4">Local AI assistant</span>
            <span className="rounded-2xl bg-black/[0.04] p-4">Private document vault</span>
            <span className="rounded-2xl bg-black/[0.04] p-4">Storage scoped to you</span>
            <span className="rounded-2xl bg-black/[0.04] p-4">Optional backup power</span>
          </div>
        </div>
      </section>

      <section id="vaultkey" className="bg-[#111] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.38em] text-white/42">VaultKey second</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Start pocket-sized. Upgrade to the box.</h2>
            <p className="mt-6 text-lg leading-8 text-white/62">OffGrid VaultKey is the portable starter path for organizing critical files before moving into a custom AI Box deployment.</p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-black shadow-2xl">
            <Image src="/offgrid/extra-portfolio/vault-key.png" alt="OffGrid VaultKey USB starter product" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
        </div>
      </section>

      <section id="preorder" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-black/10 bg-[linear-gradient(135deg,#ffffff,#d8d8d5_48%,#f9f9f7)] p-8 shadow-[0_38px_120px_rgba(0,0,0,0.18)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.38em] text-black/45">Founding preorder</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] sm:text-6xl">Reserve your OffGrid AI Box for $499.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/62">Your founding preorder reserves early access and is credited toward a full custom OffGrid AI setup. Final pricing depends on storage, files, power options, and installation scope.</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a className="rounded-full bg-black px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-neutral-700" href={stripePreorderLink} target="_blank" rel="noopener noreferrer">Reserve preorder</a>
            <p className="text-sm font-semibold text-black/45">Secure checkout via Stripe.</p>
          </div>
        </div>
      </section>

      <section id="trust" className="border-t border-black/10 bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
          {trustItems.map((item) => <p key={item} className="text-xs font-black uppercase tracking-[0.22em] text-black/48">{item}</p>)}
        </div>
      </section>
    </main>
  );
}
