import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  SHOOTS,
  EDITING_PRICES,
  EDITING_DEAL,
  EDITING_TURNAROUND,
  waLink,
  WA_GREETING,
  WA_DISPLAY_PRIMARY,
} from "@/app/data";

export default function PackagesPage() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Packages &amp; Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ivory sm:text-6xl">
            Simple packages, <em className="text-goldlight">honest prices</em>
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-5 leading-relaxed text-[#cfc7b4]">
            Shoot prices are shared on WhatsApp, based on your date and plan — no hidden
            charges. Photo editing has fixed rates, listed below.
          </p>
        </Reveal>
      </section>

      {/* Shoot packages */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {SHOOTS.map((p) => (
            <Reveal key={p.name}>
              <div className="gold-frame card-hover relative h-full rounded-xl bg-coal p-6">
                <p className="font-display text-2xl font-semibold text-ivory">{p.name}</p>
                <p className="mt-1 text-sm text-muted">{p.tag}</p>
                <p className="mt-4 font-display text-3xl font-semibold text-goldlight">
                  Price on request
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  Enquire on WhatsApp
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-[#d8d0bf]">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gold">✦</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi Lipun! I would like to enquire about a ${p.name.toLowerCase()}. Could you share the price and availability?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold mt-6 w-full"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Photo editing rates */}
      <section className="border-y border-[#c9a24b22] bg-[#0d0b09] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Photo Editing — Lipun&rsquo;s Rate Card</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
              Editing from just <em className="text-goldlight">₹50 a photo</em>
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#cfc7b4]">
              Already have photos? Send them on WhatsApp and get them edited — most edits
              are back in {EDITING_TURNAROUND.toLowerCase()}.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="gold-frame overflow-hidden rounded-xl bg-coal">
              <div className="grid grid-cols-3 gap-2 border-b border-gold/25 bg-[#1a1409] px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-goldlight">
                <span>Photo type</span>
                <span className="text-center">Single photo</span>
                <span className="text-center">5 photos</span>
              </div>
              {EDITING_PRICES.map((row) => (
                <div
                  key={row.type}
                  className="grid grid-cols-3 gap-2 border-b border-gold/10 px-5 py-4 text-sm last:border-b-0"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ivory">
                      {row.type}
                    </span>
                    <span className="block text-xs text-muted">{row.note}</span>
                  </span>
                  <span className="self-center text-center font-display text-2xl font-semibold text-goldlight">
                    {row.single}
                  </span>
                  <span className="self-center text-center font-display text-2xl font-semibold text-goldlight">
                    {row.five}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="gold-frame rounded-xl bg-[#1a1409] p-6 text-center">
              <p className="font-display text-2xl font-semibold text-goldlight">{EDITING_DEAL}</p>
              <p className="mt-2 text-sm text-[#cfc7b4]">
                Turnaround: {EDITING_TURNAROUND} &middot; Send your photos on WhatsApp{" "}
                {WA_DISPLAY_PRIMARY} to get started.
              </p>
              <a
                href={waLink("Hi Lipun! I would like to get some photos edited. Could you share the details?")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-5"
              >
                Send Photos for Editing
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How booking works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Simple as 1 &middot; 2 &middot; 3</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
            Booking is <em className="text-goldlight">easy</em>
          </h2>
          <div className="gold-rule mt-6" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            ["1", "Say hi on WhatsApp", "Tell Lipun what you need — a wedding, a birthday, or a modelling shoot."],
            ["2", "Get your price", "Shoot prices are shared on WhatsApp, based on your date and plan. No hidden charges."],
            ["3", "Smile for the camera", "Lipun shoots your day, and your edited photos reach you fast."],
          ].map(([n, t, d]) => (
            <Reveal key={n}>
              <div className="gold-frame card-hover h-full rounded-xl bg-coal p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-xl font-bold text-ink">
                  {n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ivory">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/contact" className="btn-ghost">
            All Contact Options &rarr;
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
