import Link from "next/link";
import {
  WA_DISPLAY_PRIMARY,
  EMAIL,
  IG_HANDLE,
  IG_URL,
  YOUTUBE_HANDLE,
  YOUTUBE_URL,
  waLink,
  WA_GREETING,
} from "@/app/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#c9a24b33] bg-[#0d0b09]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-ivory">
            LIPUN <span className="text-gold">PHOTOGRAPHY</span>
          </p>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.4em] text-muted">
            Capturing Moments &middot; Creating Memories
          </p>
          <p className="mt-4 font-display text-lg italic text-goldlight">
            &ldquo;Capturing Moments, Creating Memories&rdquo;
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-[#d8d0bf]">
            <li><Link className="hover:text-goldlight" href="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-goldlight" href="/films">Films</Link></li>
            <li><Link className="hover:text-goldlight" href="/packages">Packages &amp; Pricing</Link></li>
            <li><Link className="hover:text-goldlight" href="/about">About Lipun</Link></li>
            <li><Link className="hover:text-goldlight" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-[#d8d0bf]">
            <li>
              <a className="hover:text-goldlight" href={waLink(WA_GREETING)} target="_blank" rel="noreferrer">
                WhatsApp {WA_DISPLAY_PRIMARY}
              </a>
            </li>
            <li>
              <a className="break-all hover:text-goldlight" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a className="hover:text-goldlight" href={IG_URL} target="_blank" rel="noreferrer">
                Instagram {IG_HANDLE}
              </a>
            </li>
            <li>
              <a className="hover:text-goldlight" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                YouTube {YOUTUBE_HANDLE}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Book your shoot</p>
          <p className="text-sm leading-relaxed text-[#d8d0bf]">
            Weddings, birthdays and modelling shoots — send your date on WhatsApp and
            Lipun will share the details and a quote.
          </p>
          <a href={waLink(WA_GREETING)} target="_blank" rel="noreferrer" className="btn-gold mt-5">
            WhatsApp Lipun
          </a>
        </div>
      </div>

      <div className="border-t border-[#c9a24b22] px-4 py-5 text-center text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Lipun Photography. All rights reserved.</p>
        <p className="mt-1.5">
          Demo website by Evenlyn Studio — sample photos, films &amp; prices shown for preview.
        </p>
      </div>
    </footer>
  );
}
