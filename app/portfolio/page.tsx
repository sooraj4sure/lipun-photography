"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SHOTS, IG_HANDLE, IG_URL, waLink, WA_GREETING } from "@/app/data";

const CATS = ["All", "Wedding", "Birthday", "Modelling"] as const;

export default function PortfolioPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const shown = cat === "All" ? SHOTS : SHOTS.filter((s) => s.cat === cat);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Portfolio &amp; Best Work</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ivory sm:text-6xl">
            The best of <em className="text-goldlight">Lipun&rsquo;s work</em>
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-5 leading-relaxed text-[#cfc7b4]">
            A selection of frames from weddings, birthdays and modelling shoots. Every photo
            below is a sample placeholder — the final website will showcase Lipun&rsquo;s own
            portfolio from his Instagram,{" "}
            <a href={IG_URL} target="_blank" rel="noreferrer" className="text-goldlight underline">
              {IG_HANDLE}
            </a>
            .
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                cat === c
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/40 text-goldlight hover:bg-gold/10"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((s) => (
            <Reveal key={s.src}>
              <div className="group relative overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="img-zoom aspect-[3/4] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3">
                  <span className="block font-display text-lg font-semibold leading-tight text-ivory">
                    {s.title}
                  </span>
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-goldlight">
                    Sample photo &middot; {s.cat}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="font-display text-2xl italic text-goldlight">
            &ldquo;Capturing Moments, Creating Memories&rdquo;
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#cfc7b4]">
            Like what you see? Your celebration could be next. Check your date — it takes
            less than a minute on WhatsApp.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="btn-gold">
              Book Your Shoot
            </a>
            <Link href="/films" className="btn-ghost">
              Watch the Films
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
