"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FILMS, IG_HANDLE, IG_URL, waLink, WA_GREETING } from "@/app/data";

export default function FilmsPage() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Films &amp; Reels</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ivory sm:text-6xl">
            Films that feel like <em className="text-goldlight">the day itself</em>
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-5 leading-relaxed text-[#cfc7b4]">
            Wedding films, birthday highlights and modelling reels — shot on the day, cut
            with music, colour and feeling. Tap any film to watch it.
          </p>
        </Reveal>
      </section>

      {/* Film grid — click to play */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {FILMS.map((f) => (
            <Reveal key={f.title}>
              <div className="gold-frame overflow-hidden rounded-xl bg-coal">
                <div className="group relative">
                  {playing === f.title ? (
                    <video
                      className="film-video"
                      src={f.src}
                      poster={f.poster}
                      autoPlay
                      controls
                      playsInline
                      preload="auto"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(f.title)}
                      className="group relative block w-full text-left"
                      aria-label={`Play ${f.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={f.poster}
                        alt={f.title}
                        loading="lazy"
                        className="img-zoom aspect-video w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="play-btn">
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                      <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-ivory">
                        {f.duration}
                      </span>
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-goldlight">
                        Sample film — in Lipun&rsquo;s style
                      </span>
                    </button>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-ivory">{f.title}</h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-goldlight">
                        {f.kind}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-xs text-goldlight">
                      {f.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-muted">{f.credit}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm leading-relaxed text-[#cfc7b4]">
            Sample films shown for preview — the final website will feature Lipun&rsquo;s own
            films and reels from his Instagram,{" "}
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="text-goldlight underline"
            >
              {IG_HANDLE}
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* Reels note + CTA */}
      <section className="border-t border-[#c9a24b22] bg-[#0d0b09] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Instagram Reels</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
              Made to be <em className="text-goldlight">shared</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#cfc7b4]">
              Every shoot also gets short vertical reels — perfect for Instagram, ready
              quickly, and cut to the music of your day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="btn-gold">
                Book a Shoot
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Watch Reels on Instagram
              </a>
            </div>
            <p className="mt-6 text-sm text-muted">
              Prefer to talk first?{" "}
              <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="text-goldlight underline">
                WhatsApp Lipun
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
