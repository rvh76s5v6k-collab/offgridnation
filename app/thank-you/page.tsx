import Link from "next/link";

const preorderHighlights = [
  "We will review your preorder.",
  "We will follow up about your use case, device, storage, and timeline.",
  "Your $499 preorder is credited toward your future setup.",
  "Founding customers receive priority access and founder pricing.",
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(135deg,#020202,#111111_48%,#050505)]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur">
          <Link
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-emerald-100"
            href="/"
          >
            OFFGRID NATION
          </Link>
          <span className="hidden rounded-full border border-emerald-300/30 px-4 py-2 text-sm font-medium text-emerald-100 sm:inline-flex">
            Founding preorder reserved
          </span>
        </header>

        <section className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-emerald-200/80">
              OffGrid AI founding preorder
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Your OffGrid AI founding preorder is reserved.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Thank you for reserving early access to private AI that works without internet.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                className="rounded-full bg-white px-7 py-4 text-center font-semibold text-black transition hover:bg-emerald-100"
                href="/"
              >
                Return to OffGrid Nation
              </Link>
              <a
                className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-7 py-4 text-center font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-300/15"
                href="mailto:falias1991@icloud.com?subject=OffGrid%20AI%20Founding%20Preorder"
              >
                Email OffGrid Nation
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 via-white/[0.05] to-white/[0.03] p-5 shadow-2xl shadow-emerald-950/30 backdrop-blur sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-5 sm:p-6">
              <div className="mb-7 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                    Reservation status
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    Reserved for review
                  </h2>
                </div>
                <span className="w-fit rounded-full bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-100">
                  Priority access
                </span>
              </div>

              <div className="space-y-3">
                {preorderHighlights.map((highlight) => (
                  <div
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    key={highlight}
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                    <p className="leading-7 text-neutral-200">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
