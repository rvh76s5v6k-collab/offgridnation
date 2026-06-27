import Image from "next/image";

const navItems = [
  { label: "VaultKey", href: "/vaultkey" },
  { label: "AI Box", href: "#ai-box" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Mission", href: "#mission" },
];

const systemCards = [
  {
    eyebrow: "VaultKey",
    title: "Private AI starter key",
    body: "Carry your setup, prompt packs, vault folders, and guide material for compatible Mac and Windows computers.",
    href: "/vaultkey",
  },
  {
    eyebrow: "AI Box",
    title: "Dedicated local AI hardware",
    body: "A premium private intelligence direction for people who want AI on controlled hardware after setup.",
    href: "#ai-box",
  },
  {
    eyebrow: "OffGrid AI",
    title: "Your files stay close",
    body: "Build workflows around documents, prompts, and models that can run locally instead of relying on cloud sessions.",
    href: "#how-it-works",
  },
];

const steps = [
  ["01", "Choose your path", "Start portable with VaultKey or explore the AI Box direction for dedicated local hardware."],
  ["02", "Set up locally", "Use compatible hardware, starter folders, prompt packs, and setup guidance to prepare your private AI workspace."],
  ["03", "Work without internet", "After setup, use private intelligence on hardware you control with no cloud required for the local workflow."],
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#050508] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050508]/75 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
          <a className="flex items-center gap-3" href="#top" aria-label="OffGrid Nation home">
            <Image src="/offgrid/tier-1-references/logo/logo2.png" alt="OffGrid Nation logo" width={42} height={42} className="h-10 w-10 rounded-full object-contain ring-1 ring-white/15" priority />
            <span className="text-sm font-black tracking-[0.24em] text-white sm:text-base">OFFGRID AI</span>
          </a>
          <nav className="hidden items-center gap-7 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/58 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} className="transition hover:text-white" href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="rounded-full bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-black shadow-[0_18px_50px_rgba(255,255,255,0.16)] transition hover:bg-zinc-200" href="/vaultkey">
            Explore VaultKey
          </a>
        </div>
      </header>

      <section className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36" aria-labelledby="hero-heading">
        <div className="absolute inset-0">
          <Image src="/offgrid/home-creation/home-sot-no-text.png" alt="" fill className="object-cover object-center opacity-55" sizes="100vw" priority />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(210,210,255,0.16),rgba(5,5,8,0.2)_32%,rgba(5,5,8,0.95)_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050508_0%,rgba(5,5,8,0.88)_42%,rgba(5,5,8,0.48)_68%,#050508_100%)]" />
        </div>
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl py-10">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-zinc-200">OFFGRID AI</p>
            <h1 id="hero-heading" className="mt-6 text-5xl font-black leading-[0.88] tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
              Private AI that works without internet.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Private intelligence on hardware you control. Your files. Your device. No cloud required after setup.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_24px_70px_rgba(255,255,255,0.18)] transition hover:bg-zinc-200" href="/vaultkey">Explore VaultKey</a>
              <a className="rounded-full border border-white/18 bg-white/5 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-white/40 hover:bg-white/10" href="#ai-box">See AI Box</a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/[0.03] shadow-[0_38px_130px_rgba(185,190,255,0.12)]">
            <Image src="/offgrid/tier-1-references/ai-boxes/1.png" alt="OffGrid AI Box concept hardware" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0),rgba(0,0,0,0.58))]" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">AI Box direction</p>
              <p className="mt-2 text-3xl font-black tracking-[-0.06em]">Premium local intelligence hardware.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-box" className="border-y border-white/10 bg-[#0b0b10] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {systemCards.map((item) => (
            <article key={item.title} className="rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-white/42">{item.eyebrow}</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.06em]">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{item.body}</p>
              <a className="mt-7 inline-flex rounded-full border border-white/14 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/8" href={item.href}>Learn more</a>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-5 py-20 text-black sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.36em] text-black/40">How OffGrid AI works</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">Private intelligence starts with controlled hardware.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map(([step, title, body]) => (
              <article key={step} className="rounded-[2rem] border border-black/10 bg-zinc-50 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-black/36">{step}</p>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/58">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mission" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/42">Mission</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] sm:text-6xl">AI should work where your internet does not.</h2>
          </div>
          <p className="text-lg leading-8 text-zinc-400">
            OffGrid AI is built around local-first private intelligence: hardware you control, files you can organize, and workflows designed to keep working after setup without depending on a cloud connection.
          </p>
        </div>
      </section>
    </main>
  );
}
