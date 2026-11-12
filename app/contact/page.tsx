"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  EMAIL,
  IG_HANDLE,
  IG_URL,
  IG_FOLLOWERS,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
  WA_DISPLAY_PRIMARY,
  WA_DISPLAY_SECONDARY,
  WA_PRIMARY,
  WA_SECONDARY,
  waLink,
} from "@/app/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [shootType, setShootType] = useState("Wedding");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [sentNote, setSentNote] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Lipun! I'm ${name || "a new client"}. I'd like to enquire about a ${shootType} shoot${date ? ` on ${date}` : ""}.${message ? ` Details: ${message}` : ""} Could you share the price and your availability?`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSentNote(true);
  };

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-ivory sm:text-6xl">
            Let&rsquo;s book <em className="text-goldlight">your shoot</em>
          </h1>
          <div className="gold-rule mt-6" />
          <p className="mt-5 leading-relaxed text-[#cfc7b4]">
            Fill in the form and it opens WhatsApp with your enquiry ready to send — or
            just message Lipun directly. He replies fast.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="gold-frame rounded-xl bg-coal p-7"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-ivory">Your name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="field mt-1.5"
                  />
                </div>
                <div>
                  <label htmlFor="shoot" className="text-sm font-semibold text-ivory">What do you need?</label>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {["Wedding", "Birthday", "Modelling", "Photo Editing"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setShootType(t)}
                        className={`rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                          shootType === t
                            ? "border-gold bg-gold text-ink"
                            : "border-gold/40 text-goldlight hover:bg-gold/10"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="date" className="text-sm font-semibold text-ivory">
                    Date (if you know it)
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="field mt-1.5"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-ivory">
                    Anything else? (optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="e.g. It's my sister's wedding, around 200 guests, daytime ceremony…"
                    className="field mt-1.5"
                  />
                </div>
                <button type="submit" className="btn-gold w-full">
                  Send Enquiry on WhatsApp →
                </button>
                {sentNote && (
                  <p className="rounded-lg border border-gold/40 bg-[#1a1409] px-4 py-3 text-center text-sm font-semibold text-goldlight">
                    WhatsApp opened with your message — just press send. Lipun will reply there.
                  </p>
                )}
                <p className="text-center text-xs text-muted">
                  No account or sign-up needed — the form simply opens WhatsApp.
                </p>
              </div>
            </form>
          </Reveal>

          {/* Direct contacts */}
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <div className="gold-frame rounded-xl bg-[#1a1409] p-7">
                <h2 className="font-display text-2xl font-semibold text-ivory">Reach Lipun directly</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="eyebrow">WhatsApp (primary)</p>
                    <a className="mt-1 block text-base text-goldlight hover:underline" href={waLink("Hi Lipun! I'd like to book a shoot.", WA_PRIMARY)} target="_blank" rel="noreferrer">
                      {WA_DISPLAY_PRIMARY}
                    </a>
                  </li>
                  <li>
                    <p className="eyebrow">WhatsApp (second)</p>
                    <a className="mt-1 block text-base text-goldlight hover:underline" href={waLink("Hi Lipun! I'd like to book a shoot.", WA_SECONDARY)} target="_blank" rel="noreferrer">
                      {WA_DISPLAY_SECONDARY}
                    </a>
                  </li>
                  <li>
                    <p className="eyebrow">Email</p>
                    <a className="mt-1 block break-all text-base text-goldlight hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </li>
                  <li>
                    <p className="eyebrow">Instagram</p>
                    <a className="mt-1 block text-base text-goldlight hover:underline" href={IG_URL} target="_blank" rel="noreferrer">
                      {IG_HANDLE} &middot; {IG_FOLLOWERS}
                    </a>
                  </li>
                  <li>
                    <p className="eyebrow">YouTube</p>
                    <a className="mt-1 block text-base text-goldlight hover:underline" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                      {YOUTUBE_HANDLE}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="gold-frame rounded-xl bg-coal p-7">
                <h2 className="font-display text-xl font-semibold text-ivory">Good to know</h2>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#cfc7b4]">
                  <li className="flex gap-2"><span className="text-gold">✦</span> Shoot prices are shared on WhatsApp, based on your date and plan.</li>
                  <li className="flex gap-2"><span className="text-gold">✦</span> Photo editing starts at ₹50 a photo — free edit on every 10 photos.</li>
                  <li className="flex gap-2"><span className="text-gold">✦</span> Most edits are back in 30 minutes to 2 hours.</li>
                  <li className="flex gap-2"><span className="text-gold">✦</span> Weddings, birthdays and modelling shoots — plus photo editing &amp; printing.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
