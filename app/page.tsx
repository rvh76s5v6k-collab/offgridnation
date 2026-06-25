export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
          OffGrid National
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Private AI systems for people and businesses.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-300 md:text-xl">
          Home of OffGrid AI — local AI vaults that run on your own device, keep
          your files private, and work without internet.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:falias1991@icloud.com?subject=OffGrid AI Waitlist"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black"
          >
            Join Waitlist
          </a>

          <a
            href="mailto:falias1991@icloud.com?subject=OffGrid AI Business Pilot"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white"
          >
            Apply for Business Pilot
          </a>
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          Your files. Your device. No internet required.
        </p>
      </section>
    </main>
  );
}
