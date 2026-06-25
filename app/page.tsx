const contactEmail = "mailto:falias1991@icloud.com";
const stripePreorderLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const mailtoSubjects = {
  waitlist: "Join Waitlist",
  foundingPreorder: "OffGrid AI Founding Preorder",
  businessPilot: "Business Pilot Application",
};

const mailtoLink = (subject: string) =>
  `${contactEmail}?subject=${encodeURIComponent(subject)}`;

const steps = [
  "Reserve your place or apply for a pilot.",
  "We confirm your device, files, and privacy needs.",
  "Your local AI vault is configured for offline use.",
  "You keep ownership of the hardware, files, and system.",
];

const paymentMethods = [
  "Card",
  "Apple Pay",
  "Google Pay",
  "Klarna",
  "Link",
  "Cash App Pay",
  "Amazon Pay",
];

const faqs = [
  {
    question: "Does OffGrid AI need internet?",
    answer: "No. The vault is designed to run locally on your own device.",
  },
  {
    question: "Is this for personal or business use?",
    answer: "Both. Personal Vaults protect private files, while Business Vaults support teams and sensitive workflows.",
  },
  {
    question: "Do you provide the hardware?",
    answer: "We can set up an existing laptop or build a custom personal, business, or household device.",
  },
  {
    question: "Is this legal privacy?",
    answer: "Yes. OffGrid AI is built for lawful privacy, self-owned systems, and responsible local AI use.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#020202,#111111_48%,#050505)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            OFFGRID NATION
          </span>
          <a
            href={mailtoLink(mailtoSubjects.waitlist)}
            className="hidden rounded-full border border-emerald-300/30 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-300/10 sm:inline-flex"
          >
            Join Waitlist
          </a>
        </header>

        <section className="grid min-h-[86vh] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-emerald-200/80">
              OffGrid Nation presents OffGrid AI
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Private AI systems for people and businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Local AI vaults that run on your own device, keep your files
              private, and work without internet.
            </p>
            <p className="mt-5 text-base font-medium text-emerald-100">
              Your files. Your device. No internet required.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="rounded-full bg-white px-7 py-4 text-center font-semibold text-black transition hover:bg-emerald-100" href={mailtoLink(mailtoSubjects.waitlist)}>
                Join Waitlist
              </a>
              <a
                className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-center font-semibold text-white transition hover:border-emerald-200/60 hover:bg-emerald-300/10"
                href={stripePreorderLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Founding Preorder
              </a>
              <a className="rounded-full border border-sky-200/25 px-7 py-4 text-center font-semibold text-sky-100 transition hover:border-sky-200/70 hover:bg-sky-300/10" href={mailtoLink(mailtoSubjects.businessPilot)}>
                Apply for Business Pilot
              </a>
            </div>
            <PaymentTrustStrip className="mt-5" />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-6 shadow-2xl shadow-emerald-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-6">
              <div className="mb-8 flex items-center justify-between text-sm text-neutral-400">
                <span>LOCAL AI VAULT</span>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-emerald-100">Offline Ready</span>
              </div>
              <div className="space-y-4">
                {["Private file vaults", "Local AI workspace", "Self-owned systems", "Business-safe privacy"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                    <span className="text-neutral-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-3" id="what-is-offgrid-ai">
          <SectionCard eyebrow="What Is OffGrid AI?" title="A private local AI vault.">
            Use AI with your own files on hardware you control, designed for lawful privacy and offline access.
          </SectionCard>
          <SectionCard eyebrow="Personal Vault" title="For your private files.">
            Organize documents, notes, plans, and records in a local AI workspace that stays on your device.
          </SectionCard>
          <SectionCard eyebrow="Business Vault" title="For sensitive workflows.">
            Give owners, operators, and teams a serious AI system without pushing private files into public tools.
          </SectionCard>
        </section>

        <section className="py-16" id="how-it-works">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">How It Works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Simple, private, and owned by you.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <span className="text-sm text-emerald-200">0{index + 1}</span>
                <p className="mt-4 text-neutral-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-16 lg:grid-cols-[0.85fr_1.15fr]" id="pricing">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">Pricing / Reservations</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Founding preorder is open.</h2>
            <p className="mt-5 text-neutral-300">Reserve early access while OffGrid AI is being built.</p>
          </div>
          <div className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 via-white/[0.05] to-white/[0.03] p-6 shadow-2xl shadow-emerald-950/20">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">
              Founding preorder
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              $499 Founding Preorder
            </h3>
            <p className="mt-5 text-lg leading-8 text-neutral-200">
              Reserve early access to the first OffGrid AI private vault builds.
              Your preorder is credited toward your future setup. Founding
              customers receive priority access and founder pricing, up to 30%
              off the final custom build quote.
            </p>
            <p className="mt-6 border-t border-white/10 pt-6 text-neutral-300">
              Final setup pricing depends on device, storage, file volume,
              privacy needs, off-grid power options, and installation scope.
            </p>
            <a
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-emerald-100"
              href={stripePreorderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Founding Preorder
            </a>
            <PaymentTrustStrip className="mt-5" />
          </div>
        </section>

        <section className="grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]" id="faq">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Clear answers.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-neutral-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-300/10 via-white/[0.04] to-sky-300/10 p-8 text-center sm:p-12" id="contact">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Build your private AI vault.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">Join the waitlist, reserve a Founding Preorder, or apply for a Business Pilot with OffGrid Nation.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-emerald-100" href={mailtoLink(mailtoSubjects.waitlist)}>
              Join Waitlist
            </a>
            <a
              className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              href={stripePreorderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Founding Preorder
            </a>
            <a className="rounded-full border border-sky-200/25 px-7 py-4 font-semibold text-sky-100 transition hover:bg-sky-300/10" href={mailtoLink(mailtoSubjects.businessPilot)}>
              Apply for Business Pilot
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function PaymentTrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`max-w-2xl rounded-2xl border border-emerald-300/15 bg-black/25 px-4 py-3 text-sm text-neutral-300 shadow-lg shadow-emerald-950/10 ${className}`}
    >
      <p className="font-medium text-emerald-100">
        Secure checkout via Stripe
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {paymentMethods.map((method) => (
          <span
            key={method}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-neutral-200"
          >
            {method}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs leading-5 text-neutral-400">
        Payment methods may vary by device, browser, and location.
      </p>
    </div>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20">
      <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">{eyebrow}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <p className="mt-4 leading-7 text-neutral-300">{children}</p>
    </article>
  );
}
