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

const capabilityStats = [
  {
    value: "Offline",
    label: "Offline after setup",
    icon: "⌁",
  },
  {
    value: "Multi-TB",
    label: "Multi-terabyte libraries",
    icon: "▤",
  },
  {
    value: "Custom",
    label: "Personal, family, business",
    icon: "♙",
  },
  {
    value: "Optional",
    label: "Off-grid power options",
    icon: "⚡",
  },
];

const solutionCards = [
  {
    kicker: "Personal Vault",
    headline: "Your family archive, finally organized.",
    body: "Records, photos, plans, IDs, notes, and private files — stored locally and prepared for your own AI vault.",
    image: "/images/offgrid/home-vibes.png",
    alt: "Family archive organized in a private AI vault",
  },
  {
    kicker: "Business Vault",
    headline: "Sensitive work, kept local.",
    body: "SOPs, manuals, contracts, policies, training docs, and internal knowledge — organized inside a private AI vault.",
    image: "/images/offgrid/home-background-image.png",
    alt: "Business knowledge organized locally",
  },
  {
    kicker: "Field Kit",
    headline: "Private AI that goes where the cloud can’t.",
    body: "Remote sites, travel, private work, family records, business files, and offline environments.",
    image: "/images/offgrid/offgrid-antenna-signal.png",
    alt: "Field kit antenna in a remote off-grid environment",
  },
  {
    kicker: "Starter Kit",
    headline: "Start with the VaultKey.",
    body: "A pocket starter kit for organizing your offline vault before upgrading into a full custom OffGrid AI build.",
    support: "Not a full custom AI appliance.",
    image: "",
    alt: "Dark VaultKey starter kit placeholder",
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
  "OffGrid VaultKey USB starter kit",
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
    answer: "Yes, or we can configure your existing device.",
  },
  {
    question: "Is this legal privacy?",
    answer: "Yes, it is built for lawful privacy and responsible local AI use.",
  },
  {
    question: "Is the VaultKey USB the same as a full build?",
    answer:
      "No. The VaultKey USB is a starter kit for organizing and preparing your private vault. The full OffGrid AI build is a custom local AI system built around your files, hardware, storage, and offline needs.",
  },
  {
    question: "How does setup and support work?",
    answer:
      "We confirm your goals, files, device, storage, and offline needs before quoting the final setup.",
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
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#030503] text-white"
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(107,255,57,0.16),transparent_24%),radial-gradient(circle_at_80%_2%,rgba(148,163,184,0.16),transparent_28%),linear-gradient(135deg,#010201,#080b08_48%,#020302)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="relative z-20 flex items-center justify-between gap-4 py-2">
          <a
            className="shrink-0 text-xl font-extrabold tracking-[-0.04em] sm:text-2xl"
            href="#top"
            aria-label="OffGrid Nation home"
          >
            <span className="text-white">OFFGRID</span>
            <span className="text-[#74ff35]">NATION</span>
          </a>
          <nav
            className="hidden items-center gap-7 text-sm text-white/85 lg:flex"
            aria-label="Primary navigation"
          >
            <a
              className="border-b-2 border-[#74ff35] pb-3 text-white"
              href="#offgrid-ai"
            >
              OffGrid AI
            </a>
            <a className="transition hover:text-[#74ff35]" href="#solutions">
              Solutions
            </a>
            <a className="transition hover:text-[#74ff35]" href="#pricing">
              Founding Preorder
            </a>
            <a className="transition hover:text-[#74ff35]" href="#faq">
              FAQ
            </a>
            <a className="transition hover:text-[#74ff35]" href="#contact">
              Contact
            </a>
          </nav>
          <div className="hidden items-center gap-2 rounded-full border border-[#74ff35]/25 bg-black/25 px-4 py-2 text-sm font-medium text-[#74ff35] sm:flex">
            <span aria-hidden="true">▣</span>
            <span>Private. Local. Offline.</span>
          </div>
        </header>

        <section
          className="relative -mx-5 -mt-16 min-h-[760px] overflow-hidden px-5 pb-8 pt-28 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
          id="offgrid-ai"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              className="h-full w-full object-cover object-center opacity-75"
              src="/images/offgrid/offgrid-cliff.png"
              alt="Remote cliff landscape for OffGrid AI"
              width={1536}
              height={1024}
              priority
              sizes="100vw"
            />
            <Image
              className="absolute bottom-20 right-0 hidden h-[58%] w-[58%] object-cover object-center opacity-80 mix-blend-screen lg:block"
              src="/images/offgrid/offgrid-mobile-antenna.png"
              alt="Portable off-grid antenna kit"
              width={1448}
              height={1086}
              priority
              sizes="58vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#030503_0%,rgba(3,5,3,0.93)_28%,rgba(3,5,3,0.45)_62%,rgba(3,5,3,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030503] to-transparent" />
          </div>
          <div className="grid min-h-[650px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#74ff35] sm:text-sm">
                OFFGRID NATION PRESENTS OFFGRID AI
              </p>
              <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
                Private AI that works without internet
                <span className="text-[#74ff35]">.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
                Custom local AI vaults for people, families, and businesses —
                built around your files, your device, and your need to work
                offline.
              </p>
              <p className="mt-5 flex max-w-xl gap-3 text-sm leading-6 text-neutral-100 sm:text-base">
                <span className="text-2xl text-[#74ff35]" aria-hidden="true">
                  ◎
                </span>
                <span>
                  From Dallas to Davao. From Austin to Australia. Your files.
                  Your device. No internet required.
                </span>
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="rounded-full bg-[#74ff35] px-7 py-4 text-center font-bold text-black shadow-[0_0_28px_rgba(116,255,53,0.35)] transition hover:bg-[#9dff72]"
                  href={stripePreorderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve Founding Preorder →
                </a>
                <WaitlistButton
                  className="rounded-full border border-white/40 bg-black/35 px-7 py-4 text-center font-semibold text-white transition hover:border-[#74ff35] hover:text-[#74ff35]"
                  onClick={() => setIsWaitlistOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="-mt-6 grid gap-0 overflow-hidden rounded-2xl border border-white/15 bg-black/65 shadow-2xl shadow-black/40 backdrop-blur md:grid-cols-4"
          aria-label="OffGrid AI capability highlights"
        >
          {capabilityStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-white/15 p-6 md:border-r md:last:border-r-0"
            >
              <span
                className="grid h-12 w-12 place-items-center rounded-full border border-[#74ff35]/40 text-2xl text-[#74ff35]"
                aria-hidden="true"
              >
                {stat.icon}
              </span>
              <div>
                <p className="text-xl font-semibold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-neutral-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section
          className="grid gap-4 py-5 md:grid-cols-2 xl:grid-cols-4"
          id="solutions"
        >
          {solutionCards.map((card) => (
            <article
              key={card.kicker}
              className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035] shadow-xl shadow-black/30"
            >
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#74ff35]">
                  {card.kicker}
                </p>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] text-white">
                  {card.headline}
                </h2>
              </div>
              {card.image ? (
                <Image
                  className="h-56 w-full object-cover"
                  src={card.image}
                  alt={card.alt}
                  width={1448}
                  height={1086}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <div className="mx-5 grid h-56 place-items-center rounded-2xl border border-[#74ff35]/20 bg-[radial-gradient(circle_at_30%_20%,rgba(116,255,53,0.22),transparent_28%),linear-gradient(145deg,#171a17,#050605)]">
                  <div className="h-24 w-40 rounded-xl border border-white/20 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
                    <div className="mt-10 h-3 bg-[#74ff35]/70" />
                  </div>
                </div>
              )}
              <div className="p-5">
                <p className="text-sm leading-6 text-neutral-300">
                  {card.body}
                </p>
                {card.support ? (
                  <p className="mt-3 font-medium text-[#74ff35]">
                    {card.support}
                  </p>
                ) : null}
                <span
                  className="mt-5 inline-grid h-9 w-9 place-items-center rounded-full border border-[#74ff35] text-[#74ff35]"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </section>

        <section
          className="grid gap-8 rounded-2xl border border-white/12 bg-black/55 p-6 py-8 shadow-2xl shadow-black/30 lg:grid-cols-[0.85fr_1.15fr] lg:p-10"
          id="pricing"
        >
          <div className="lg:border-r lg:border-white/15 lg:pr-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#74ff35]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              Simple, private, and owned by you.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-4 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="text-center">
                  <span className="text-sm font-bold text-[#74ff35]">
                    0{index + 1}
                  </span>
                  <div className="mx-auto my-4 h-12 w-12 rounded-xl border border-white/30 bg-white/[0.03]" />
                  <p className="text-sm leading-5 text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#74ff35]">
              Pricing / Reservations
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              Founding preorder is open.
            </h2>
            <p className="mt-2 text-neutral-300">Reserve early access.</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="rounded-2xl border border-[#74ff35]/35 bg-black/45 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#74ff35]">
                  Founding preorder
                </p>
                <h3 className="mt-3 text-3xl font-bold">
                  $499 Founding Preorder
                </h3>
                <p className="mt-4 text-sm leading-6 text-neutral-300">
                  Reserve early access. Your preorder is credited toward your
                  future setup. Founding customers receive priority access and
                  founder pricing.
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm text-neutral-400">
                  Final pricing depends on device, storage, files, power
                  options, and install scope.
                </p>
              </div>
              <div>
                <a
                  className="inline-flex rounded-full bg-[#74ff35] px-7 py-4 font-bold text-black shadow-[0_0_28px_rgba(116,255,53,0.35)] transition hover:bg-[#9dff72]"
                  href={stripePreorderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve Founding Preorder →
                </a>
                <PaymentTrustStrip className="mt-4" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="grid gap-8 py-5 lg:grid-cols-[0.75fr_1.25fr]"
          id="faq"
        >
          <div className="rounded-2xl border border-white/12 bg-black/50 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#74ff35]">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              Clear answers.
            </h2>
            <p className="mt-6 text-4xl text-[#74ff35]" aria-hidden="true">
              ▱
            </p>
          </div>
          <div className="grid gap-x-8 rounded-2xl border border-white/12 bg-black/50 p-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="border-b border-white/10 py-4"
              >
                <summary className="cursor-pointer list-none text-sm font-medium text-white marker:hidden">
                  {faq.question}
                  <span className="float-right text-[#74ff35]">⌄</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="mb-6 grid gap-5 rounded-2xl border border-white/12 bg-black/60 p-6 shadow-xl shadow-black/30 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center"
          id="contact"
        >
          <div className="text-5xl text-white" aria-hidden="true">
            ◖◗
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.05em]">
              Build your private AI vault.
            </h2>
            <p className="mt-2 text-neutral-300">
              Join the waitlist or reserve your founding preorder.
            </p>
          </div>
          <WaitlistButton
            className="rounded-full border border-white/35 px-8 py-4 font-semibold text-white transition hover:border-[#74ff35] hover:text-[#74ff35]"
            onClick={() => setIsWaitlistOpen(true)}
          />
          <a
            className="rounded-full bg-[#74ff35] px-8 py-4 text-center font-bold text-black transition hover:bg-[#9dff72]"
            href={stripePreorderLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve Founding Preorder →
          </a>
        </section>

        <footer className="grid gap-3 border-t border-white/10 py-8 text-sm text-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
          <p>Lawful privacy. Responsible local AI.</p>
          <p>Ownership of your files. Control of your device.</p>
          <p>From Dallas to Davao. From Austin to Australia.</p>
          <p>© 2025 OffGrid Nation. All rights reserved.</p>
        </footer>
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </main>
  );
}

function WaitlistButton({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) {
  return (
    <button className={className} type="button" onClick={onClick}>
      Join Waitlist
    </button>
  );
}

function WaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 px-4 py-4 backdrop-blur-md sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      <button
        className="absolute inset-0 cursor-default"
        type="button"
        aria-label="Close waitlist modal"
        onClick={onClose}
      />
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-emerald-300/20 bg-[#070907] p-5 shadow-2xl shadow-emerald-950/40 sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-200/80">
              Join the waitlist
            </p>
            <h2
              id="waitlist-modal-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Tell us about your private AI vault.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Tell us what kind of private AI vault you want to build. We’ll
              follow up directly.
            </p>
          </div>
          <button
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-200 transition hover:border-emerald-200/60 hover:bg-emerald-300/10"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Full name">
              <input
                required
                className="form-input"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
              />
            </FormField>
            <FormField label="Email">
              <input
                required
                type="email"
                className="form-input"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </FormField>
            <FormField label="Phone number">
              <input
                type="tel"
                className="form-input"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </FormField>
            <FormField label="Interest type">
              <select
                className="form-input"
                value={form.interestType}
                onChange={(event) =>
                  updateField("interestType", event.target.value)
                }
              >
                {interestTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </FormField>
          </div>

          <FormField label="Main use case">
            <select
              className="form-input"
              value={form.useCase}
              onChange={(event) => updateField("useCase", event.target.value)}
            >
              {useCases.map((useCase) => (
                <option key={useCase}>{useCase}</option>
              ))}
            </select>
          </FormField>

          <fieldset className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <legend className="px-2 text-sm font-medium text-emerald-100">
              Optional interests
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {optionalInterests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 text-sm text-neutral-200"
                >
                  <input
                    className="mt-1 h-4 w-4 accent-emerald-300"
                    type="checkbox"
                    checked={form.optionalInterests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                  />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <FormField label="What would you want your OffGrid AI vault to help with?">
            <textarea
              className="form-input min-h-32 resize-y"
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
            />
          </FormField>

          <div className="sticky bottom-0 -mx-5 -mb-5 flex flex-col gap-3 border-t border-white/10 bg-[#070907]/95 px-5 py-4 backdrop-blur sm:-mx-7 sm:-mb-7 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="text-xs leading-5 text-neutral-400">
              This will open your email app with a prefilled message to{" "}
              {contactEmail}.
            </p>
            <button
              className="rounded-full bg-emerald-100 px-7 py-4 font-semibold text-black transition hover:bg-white"
              type="submit"
            >
              Open Prefilled Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
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
        Secure checkout via Stripe.
      </p>
    </div>
  );
}
