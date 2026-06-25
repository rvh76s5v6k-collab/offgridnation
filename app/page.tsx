"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const contactEmail = "falias1991@icloud.com";
const contactMailto = `mailto:${contactEmail}`;
const stripePreorderLink = "https://buy.stripe.com/8x2bIU8HogZs7Ct0Lh5os00";

const mailtoSubjects = {
  waitlist: "OffGrid AI Waitlist Request",
  foundingPreorder: "OffGrid AI Founding Preorder",
  businessPilot: "Business Pilot Application",
};

const mailtoLink = (subject: string) =>
  `${contactMailto}?subject=${encodeURIComponent(subject)}`;

const steps = [
  "Join or reserve.",
  "Confirm your files and device.",
  "Build your local AI vault.",
  "Keep ownership and control.",
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

const capabilityStats = [
  {
    value: "Offline",
    label: "Offline after setup",
  },
  {
    value: "Multi-TB",
    label: "Multi-terabyte libraries",
  },
  {
    value: "Custom",
    label: "Personal, family, business",
  },
  {
    value: "Optional",
    label: "Off-grid power options",
  },
];

const interestTypes = ["Personal", "Family", "Business", "Not sure"];

const useCases = [
  "No-internet AI",
  "Remote work",
  "Private personal files",
  "Family records",
  "Business documents",
  "SOPs / manuals / training docs",
  "Contracts / legal / policies",
  "Break from cloud tools / algorithm",
  "Other",
];

const optionalInterests = [
  "Solar / off-grid power option",
  "Extra large storage",
  "Setup on my existing laptop",
  "Custom portable AI vault device",
  "Business pilot",
  "Family/private household setup",
  "Remote cabin / RV / travel use",
];

const faqs = [
  {
    question: "Does OffGrid AI need internet?",
    answer:
      "No internet is required after setup; installation or updates may use internet.",
  },
  {
    question: "Is this for personal, family, or business use?",
    answer:
      "All three: personal files, family records, and business documents.",
  },
  {
    question: "Do you provide the hardware?",
    answer:
      "Yes, or we can configure your existing device.",
  },
  {
    question: "Is this legal privacy?",
    answer:
      "Yes, it is built for lawful privacy and responsible local AI use.",
  },
];

type WaitlistFormState = {
  fullName: string;
  email: string;
  phone: string;
  interestType: string;
  useCase: string;
  optionalInterests: string[];
  notes: string;
};

const initialWaitlistForm: WaitlistFormState = {
  fullName: "",
  email: "",
  phone: "",
  interestType: "Personal",
  useCase: "No-internet AI",
  optionalInterests: [],
  notes: "",
};

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#020202,#111111_48%,#050505)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            OFFGRID NATION
          </span>
          <a
            className="hidden rounded-full border border-emerald-300/30 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-300/10 sm:inline-flex"
            href={stripePreorderLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve Preorder
          </a>
        </header>

        <section className="grid min-h-[86vh] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-emerald-200/80">
              OffGrid Nation presents OffGrid AI
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Private AI that works without internet.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Custom local AI vaults for people, families, and businesses — built around your files, your device, and your need to work offline.
            </p>
            <p className="mt-5 text-base font-medium text-emerald-100">
              From Dallas to Davao. From Austin to Australia. Your files. Your device. No internet required.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WaitlistButton className="rounded-full bg-white px-7 py-4 text-center font-semibold text-black transition hover:bg-emerald-100" onClick={() => setIsWaitlistOpen(true)} />
              <a
                className="rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 text-center font-semibold text-white transition hover:border-emerald-200/60 hover:bg-emerald-300/10"
                href={stripePreorderLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Founding Preorder
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-white/[0.03] p-3 shadow-2xl shadow-emerald-950/30 backdrop-blur">
            <div className="relative min-h-[460px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/55">
              <Image
                src="/images/offgrid/offgrid-solar.png"
                alt="OffGrid AI solar-ready field setup"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/60 p-4 backdrop-blur">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-neutral-300">
                      Local AI Vault
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Built for offline control.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-300/10 px-3 py-1 text-sm text-emerald-100">
                    Offline Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-3 rounded-[2rem] border border-emerald-300/20 bg-gradient-to-r from-emerald-300/10 via-white/[0.05] to-sky-300/10 p-4 shadow-2xl shadow-emerald-950/20 sm:grid-cols-2 lg:grid-cols-4" aria-label="OffGrid AI capability highlights">
          {capabilityStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/35 p-5">
              <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-5 py-10 md:grid-cols-3" id="what-is-offgrid-ai">
          <SectionCard eyebrow="What Is OffGrid AI?" title="A private AI vault.">
            A private AI vault that runs locally on hardware you control.
          </SectionCard>
          <SectionCard eyebrow="Personal + Family Vaults" title="Private archives, organized.">
            For records, files, plans, photos, and private archives.
          </SectionCard>
          <SectionCard eyebrow="Business Vault" title="Sensitive work, local.">
            For SOPs, manuals, contracts, policies, and training docs.
          </SectionCard>
        </section>

        <section className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]" id="anywhere">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">
              Built to move
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Built for anywhere your files need to go.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
              From Dallas to Davao. Austin to Australia. Private AI built for homes, offices, travel, remote work, and off-grid setups.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] border border-emerald-300/20 bg-black/40">
            <Image
              src="/images/offgrid/offgrid-antenna-signal.png"
              alt="OffGrid AI antenna signal setup"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
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
            <p className="mt-5 text-neutral-300">Reserve early access.</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 via-white/[0.05] to-white/[0.03] p-6 shadow-2xl shadow-emerald-950/20">
            <div className="absolute right-4 top-4 h-24 w-24 overflow-hidden rounded-3xl border border-white/10 bg-black/30 opacity-80 sm:h-32 sm:w-32">
              <Image
                src="/images/offgrid/offgrid-box-preorder.png"
                alt="OffGrid AI preorder box"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <div className="relative pr-24 sm:pr-36">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">
                Founding preorder
              </p>
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              $499 Founding Preorder
            </h3>
            <p className="mt-5 text-lg leading-8 text-neutral-200">
              Reserve early access. Your preorder is credited toward your future
              setup. Founding customers receive priority access and founder
              pricing.
            </p>
            <p className="mt-6 border-t border-white/10 pt-6 text-neutral-300">
              Final pricing depends on device, storage, files, power options,
              and install scope.
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
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">Join the waitlist or reserve your founding preorder.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <WaitlistButton className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-emerald-100" onClick={() => setIsWaitlistOpen(true)} />
            <a
              className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              href={stripePreorderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Founding Preorder
            </a>
          </div>
        </section>
      </div>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  );
}

function WaitlistButton({ className, onClick }: { className: string; onClick: () => void }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      Join Waitlist
    </button>
  );
}

function WaitlistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState<WaitlistFormState>(initialWaitlistForm);

  const mailtoHref = useMemo(() => {
    const body = [
      "OffGrid AI Waitlist Request",
      "",
      `Full name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone number: ${form.phone}`,
      `Interest type: ${form.interestType}`,
      `Main use case: ${form.useCase}`,
      `Optional interests: ${form.optionalInterests.length ? form.optionalInterests.join(", ") : "None selected"}`,
      "",
      "Notes:",
      form.notes || "No notes provided.",
    ].join("\n");

    return `${mailtoLink(mailtoSubjects.waitlist)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  if (!isOpen) {
    return null;
  }

  const updateField = (field: keyof WaitlistFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setForm((current) => ({
      ...current,
      optionalInterests: current.optionalInterests.includes(interest)
        ? current.optionalInterests.filter((item) => item !== interest)
        : [...current.optionalInterests, interest],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 px-4 py-4 backdrop-blur-md sm:items-center" role="dialog" aria-modal="true" aria-labelledby="waitlist-modal-title">
      <button className="absolute inset-0 cursor-default" type="button" aria-label="Close waitlist modal" onClick={onClose} />
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-emerald-300/20 bg-[#070907] p-5 shadow-2xl shadow-emerald-950/40 sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-200/80">Join the waitlist</p>
            <h2 id="waitlist-modal-title" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tell us about your private AI vault.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Tell us what kind of private AI vault you want to build. We’ll follow up directly.
            </p>
          </div>
          <button className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-200 transition hover:border-emerald-200/60 hover:bg-emerald-300/10" type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Full name">
              <input required className="form-input" value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} />
            </FormField>
            <FormField label="Email">
              <input required type="email" className="form-input" value={form.email} onChange={(event) => updateField("email", event.target.value)} />
            </FormField>
            <FormField label="Phone number">
              <input type="tel" className="form-input" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
            </FormField>
            <FormField label="Interest type">
              <select className="form-input" value={form.interestType} onChange={(event) => updateField("interestType", event.target.value)}>
                {interestTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </FormField>
          </div>

          <FormField label="Main use case">
            <select className="form-input" value={form.useCase} onChange={(event) => updateField("useCase", event.target.value)}>
              {useCases.map((useCase) => <option key={useCase}>{useCase}</option>)}
            </select>
          </FormField>

          <fieldset className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <legend className="px-2 text-sm font-medium text-emerald-100">Optional interests</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {optionalInterests.map((interest) => (
                <label key={interest} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 text-sm text-neutral-200">
                  <input className="mt-1 h-4 w-4 accent-emerald-300" type="checkbox" checked={form.optionalInterests.includes(interest)} onChange={() => toggleInterest(interest)} />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <FormField label="What would you want your OffGrid AI vault to help with?">
            <textarea className="form-input min-h-32 resize-y" value={form.notes} onChange={(event) => updateField("notes", event.target.value)} />
          </FormField>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-neutral-400">
              This will open your email app with a prefilled message to {contactEmail}.
            </p>
            <button className="rounded-full bg-emerald-100 px-7 py-4 font-semibold text-black transition hover:bg-white" type="submit">
              Open Prefilled Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-neutral-200">
      <span>{label}</span>
      {children}
    </label>
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
