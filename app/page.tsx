import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  HERO_VIDEO,
  HERO_POSTER,
  FILMS,
  SHOTS,
  SERVICES,
  EDITING_PRICES,
  EDITING_DEAL,
  EDITING_TURNAROUND,
  SHOOTS,
  IG_URL,
  IG_HANDLE,
  IG_FOLLOWERS,
  WA_DISPLAY_PRIMARY,
  waLink,
  WA_GREETING,
} from "@/app/data";

export default function Home() {
  const previewFilms = FILMS.slice(0, 2);
  const previewShots = SHOTS.slice(0, 6);

  return (
    <div>
      {/* ============ HERO — full-screen wedding film ============ */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <video
          className="hero-video"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
        />
        <div className="hero-shade" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-40 sm:px-6">
          <Reveal>
            <p className="eyebrow">Wedding &middot; Birthday &middot; Modelling Photography</p>
            <h1 className="mt-4 font-display text-[2.9rem] font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Capturing Moments,
              <br />
              <em className="text-goldlight">Creating Memories</em>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#e8e0cf] sm:text-lg">
              Hi, I&rsquo;m Lipun Meher — a young photographer who turns your happiest days
              into photos you&rsquo;ll keep forever. Weddings, birthdays, modelling shoots —
              and quick, affordable photo editing too.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
<Link
  href="/contact"
  className="rounded-full border border-cream/70 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-cream hover:text-maroondeep"
>
  Book your date
</Link>

              <Link href="/films" className="btn-ghost">
                ▶ Watch the Films
              </Link>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted">
              Lipun Meher &middot; Photographer &middot; Instagram {IG_HANDLE} &middot; {IG_FOLLOWERS}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">About Lipun Photography</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ivory sm:text-5xl">
            Your day, seen through
            <br />
            <em className="text-goldlight">a young photographer&rsquo;s eyes</em>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 leading-relaxed text-[#cfc7b4]">
            Lipun Photography is run by Lipun Meher — a student with a camera, a sharp eye,
            and a love for the moments that don&rsquo;t come twice. From the vows to the cake
            cutting to the last dance, he stays close, stays patient, and catches the frames
            that feel like the day itself.
          </p>
          <p className="mt-4 leading-relaxed text-[#cfc7b4]">
            Weddings, birthdays, modelling shoots — and photo editing that&rsquo;s ready in
            as little as 30 minutes.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ["Wedding Photography", "Candid & traditional, from vows to vidaai"],
            ["Birthday Photography", "Cake, candles & chaos — caught live"],
            ["Modelling Shoots", "Clean, confident portfolio portraits"],
            ["Photo Editing", "From ₹50 a photo, ready in 30 min – 2 hrs"],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="gold-frame card-hover h-full rounded-xl bg-coal p-5 text-center">
                <p className="font-display text-xl font-semibold text-goldlight">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FILMS PREVIEW ============ */}
      <section className="border-y border-[#c9a24b22] bg-[#0d0b09] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Films &amp; Reels</p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
                Watch the moments <em className="text-goldlight">move</em>
              </h2>
            </div>
            <Link href="/films" className="btn-ghost">
              All Films &rarr;
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {previewFilms.map((f) => (
              <Reveal key={f.title}>
                <Link href="/films" className="group block overflow-hidden rounded-xl">
                  <div className="relative">
                    <video
                      className="film-video"
                      src={f.src}
                      poster={f.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-goldlight">
                      Sample film — in Lipun&rsquo;s style
                    </span>
                    <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span>
                        <span className="block font-display text-2xl font-semibold text-ivory">
                          {f.title}
                        </span>
                        <span className="block text-xs uppercase tracking-[0.2em] text-goldlight">
                          {f.kind}
                        </span>
                      </span>
                      <span className="play-btn !h-12 !w-12">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted">
            Sample films shown for preview — the final website will feature Lipun&rsquo;s own
            films and reels from his Instagram, {IG_HANDLE}.
          </p>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow">What Lipun shoots</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
            Photography for your <em className="text-goldlight">happiest days</em>
          </h2>
          <div className="gold-rule mt-6" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Reveal key={s.title}>
              <Link href={s.href} className="group block overflow-hidden rounded-xl">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-goldlight">
                    Sample photo
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-2xl font-semibold text-ivory">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#e0d8c6]">{s.desc}</p>
                    <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-goldlight">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PORTFOLIO PREVIEW ============ */}
      <section className="border-y border-[#c9a24b22] bg-[#0d0b09] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio &amp; Best Work</p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
                Frames from <em className="text-goldlight">the big days</em>
              </h2>
            </div>
            <Link href="/portfolio" className="btn-ghost">
              Full Portfolio &rarr;
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {previewShots.map((s) => (
              <Reveal key={s.src}>
                <Link href="/portfolio" className="group relative block overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="img-zoom aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3">
                    <span className="block font-display text-lg font-semibold text-ivory">
                      {s.title}
                    </span>
                    <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-goldlight">
                      Sample photo &middot; {s.cat}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PACKAGES TEASER — editing rates ============ */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Shoots &amp; Editing Prices</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ivory sm:text-5xl">
            Simple to book, <em className="text-goldlight">easy on the pocket</em>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mx-auto mt-5 max-w-xl text-[#cfc7b4]">
            Shoot prices are shared on WhatsApp, based on your date and plan. Photo editing
            has fixed rates — from just ₹50 a photo, ready in {EDITING_TURNAROUND.toLowerCase()}.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
              </div>
            </Reveal>
          ))}
        </div>

        {/* Editing rates strip */}
        <Reveal className="mt-10">
          <div className="gold-frame rounded-xl bg-[#1a1409] p-6 sm:p-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-goldlight">
              {EDITING_DEAL}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {EDITING_PRICES.map((row) => (
                <div key={row.type} className="rounded-lg border border-gold/25 bg-coal p-4 text-center">
                  <p className="font-display text-xl font-semibold text-ivory">{row.type}</p>
                  <p className="mt-1 text-sm text-muted">
                    {row.single} single &middot; {row.five} for 5
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-sm text-muted">
              Turnaround: {EDITING_TURNAROUND} &middot; Editing from just ₹50 a photo
            </p>
            <div className="mt-6 text-center">
              <Link href="/packages" className="btn-gold">
                See All Packages &amp; Prices
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ BOOKING CTA ============ */}
      <section className="relative overflow-hidden border-t border-[#c9a24b22]">
        <video
          className="hero-video"
          src={FILMS[2].src}
          poster={FILMS[2].poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-shade" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow">Your date is waiting</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ivory sm:text-5xl">
              Let&rsquo;s make your day
              <br />
              <em className="text-goldlight">unforgettable</em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-[#e8e0cf]">
              Tell Lipun your date and what you&rsquo;re celebrating — he will reply on
              WhatsApp with availability and a quote. No advance needed to enquire.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="btn-gold">
                Book on WhatsApp
              </a>
              <Link href="/portfolio" className="btn-ghost">
                See the Portfolio
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Instagram{" "}
              <a className="text-goldlight underline" href={IG_URL} target="_blank" rel="noreferrer">
                {IG_HANDLE}
              </a>{" "}
              &middot; WhatsApp {WA_DISPLAY_PRIMARY}
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
