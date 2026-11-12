import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ABOUT_IMG,
  IG_HANDLE,
  IG_URL,
  IG_FOLLOWERS,
  IG_POSTS,
  IG_BIO,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
  EDITING_TURNAROUND,
  waLink,
  WA_GREETING,
} from "@/app/data";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">About Lipun Photography</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ivory sm:text-6xl">
            Hi, I&rsquo;m <em className="text-goldlight">Lipun</em>
          </h1>
          <div className="gold-rule mt-6" />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="group relative overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ABOUT_IMG}
                alt="A photographer holding a camera in a sunflower field"
                loading="lazy"
                className="img-zoom aspect-[5/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-ivory">
                Lipun Meher &middot; Photographer
              </span>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-lg leading-relaxed text-[#cfc7b4]">
              I&rsquo;m <strong className="text-ivory">Lipun Meher</strong>, a young
              photographer behind <strong className="text-ivory">Lipun Photography</strong>.
              My tagline says it best —{" "}
              <em className="font-display text-goldlight">
                &ldquo;Capturing Moments, Creating Memories.&rdquo;
              </em>
            </p>
            <p className="mt-4 leading-relaxed text-[#cfc7b4]">
              I shoot the days that matter most to you: weddings, birthdays and modelling
              shoots. No stiff, boring photos — just real moments, natural smiles and
              colours that feel alive.
            </p>
            <p className="mt-4 leading-relaxed text-[#cfc7b4]">
              I also edit and print photos, so if you already have pictures you love, I can
              polish them up — most edits are back in {EDITING_TURNAROUND.toLowerCase()},
              starting at just ₹50 a photo.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { big: "3", small: "Shoot types" },
                { big: "₹50", small: "Editing from" },
                { big: "2 hrs", small: "Fastest edits" },
              ].map((s) => (
                <div key={s.small} className="gold-frame rounded-xl bg-coal p-4">
                  <p className="font-display text-2xl font-semibold text-goldlight">{s.big}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{s.small}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* What Lipun shoots */}
        <div className="mt-16">
          <Reveal className="text-center">
            <p className="eyebrow">What I shoot</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
              Weddings, birthdays <em className="text-goldlight">&amp; modelling</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { t: "Weddings", d: "Vows, rituals, family and friends — your whole day, told in photos." },
              { t: "Birthdays", d: "Cakes, candles and happy chaos — birthdays shot while the fun is on." },
              { t: "Modelling", d: "Confident portraits and portfolio shots that show your style." },
            ].map((c) => (
              <Reveal key={c.t}>
                <div className="gold-frame card-hover h-full rounded-xl bg-coal p-6">
                  <h3 className="font-display text-2xl font-semibold text-goldlight">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#cfc7b4]">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Instagram strip */}
        <Reveal className="mt-16">
          <div className="gold-frame overflow-hidden rounded-xl bg-[#1a1409] p-8 sm:p-10">
            <p className="eyebrow">Follow along on Instagram</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-4xl">
              See the latest work <em className="text-goldlight">as it happens</em>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[#cfc7b4]">
              Latest shoots, behind-the-scenes moments and new work — {IG_BIO}.{" "}
              {IG_FOLLOWERS} &middot; {IG_POSTS}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                {IG_HANDLE} — Instagram &rarr;
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {YOUTUBE_HANDLE} — YouTube &rarr;
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="btn-gold">
            Book Your Shoot &rarr;
          </a>
          <p className="mt-4 text-sm text-muted">
            Questions first? See the{" "}
            <Link className="text-goldlight underline" href="/contact">
              contact page
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
