// Lipun Photography — verified facts only.
// Owner: Lipun Meher, student photographer. No city stated anywhere — none is claimed.
// No shoot prices exist: shoots are "price on request — enquire on WhatsApp".
// Photo-editing prices below are Lipun's own rates, from his flyer (IG post, 21 July 2026).

export const WA_PRIMARY = "919438714289";
export const WA_SECONDARY = "917735916421";
export const WA_DISPLAY_PRIMARY = "+91 94387 14289";
export const WA_DISPLAY_SECONDARY = "+91 77359 16421";
export const EMAIL = "lipunmeher237@gmail.com";
// The only Instagram account is @lipun_meher3 (9,455 followers, 186 posts).
// The old handle without the "_meher3" suffix does not exist — never use it.
export const IG_HANDLE = "@lipun_meher3";
export const IG_URL = "https://www.instagram.com/lipun_meher3";
export const IG_FOLLOWERS = "9.4K followers";
export const IG_POSTS = "186 posts";
export const IG_BIO = "Student — DM for paid promotion collab";
export const YOUTUBE_HANDLE = "@lipunmeher-x7z";
export const YOUTUBE_URL = "https://www.youtube.com/@lipunmeher-x7z";
export const TAGLINE = "Capturing Moments, Creating Memories";

export const WA_GREETING =
  "Hi Lipun! I found your photography page and would like to book a shoot. Could you share the details?";

export function waLink(message: string, number: string = WA_PRIMARY) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/* ---- Hero video: Pexels 8775887 — "A Couple Looking at Each Other"
   (Pavel Danilyuk, indoor wedding ceremony, 0:25). curl-verified HTTP 200, video/mp4.
   A fresh clip — not used on any other demo site. ---- */
export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/8775887/8775887-hd_1920_1080_25fps.mp4";
export const HERO_POSTER = img("1606216794074-735e91aa2c92", 1600);

export type Film = {
  title: string;
  kind: string;
  duration: string;
  src: string;
  poster: string;
  credit: string;
};

/* All film IDs curl-verified HTTP 200 + video/mp4; none are in the forbidden list. */
export const FILMS: Film[] = [
  {
    title: "Vows & Blessings",
    kind: "Wedding Ceremony Film",
    duration: "0:12",
    src: "https://videos.pexels.com/video-files/8776119/8776119-hd_1920_1080_25fps.mp4",
    poster: img("1587271636175-90d58cdad458"),
    credit: "Sample film — in Lipun's style. Footage: Pavel Danilyuk / Pexels",
  },
  {
    title: "Cheers for the Couple",
    kind: "Wedding Day Film",
    duration: "0:22",
    src: "https://videos.pexels.com/video-files/8776124/8776124-hd_1920_1080_25fps.mp4",
    poster: img("1511285560929-80b456fea0bc"),
    credit: "Sample film — in Lipun's style. Footage: Pavel Danilyuk / Pexels",
  },
  {
    title: "The First Dance",
    kind: "Wedding Celebration Film",
    duration: "0:12",
    src: "https://videos.pexels.com/video-files/8247137/8247137-hd_1920_1080_25fps.mp4",
    poster: img("1519741497674-611481863552"),
    credit: "Sample film — in Lipun's style. Footage: Mikhail Nilov / Pexels",
  },
  {
    title: "Traditional Moves",
    kind: "Wedding Dance Film",
    duration: "0:40",
    src: "https://videos.pexels.com/video-files/4174213/4174213-hd_1920_1080_30fps.mp4",
    poster: img("1465495976277-4387d4b0b4c6"),
    credit: "Sample film — in Lipun's style. Footage: Rafael Castro / Pexels",
  },
  {
    title: "Birthday Cheers",
    kind: "Birthday Film",
    duration: "0:13",
    src: "https://videos.pexels.com/video-files/8899821/8899821-hd_1920_1080_25fps.mp4",
    poster: px(3171837),
    credit: "Sample film — in Lipun's style. Footage: Ivan S / Pexels",
  },
  {
    title: "In the Studio",
    kind: "Modelling Film",
    duration: "0:16",
    src: "https://videos.pexels.com/video-files/3917517/3917517-uhd_4096_2160_25fps.mp4",
    poster: px(1036623),
    credit: "Sample film — in Lipun's style. Footage: cottonbro studio / Pexels",
  },
];

export type Shot = {
  src: string;
  title: string;
  cat: "Wedding" | "Birthday" | "Modelling";
};

/* Stock photos as stand-ins; every URL curl-verified HTTP 200.
   Titles are generic — no client names are used anywhere. */
export const SHOTS: Shot[] = [
  { src: img("1519741497674-611481863552"), title: "The First Look", cat: "Wedding" },
  { src: px(265722), title: "Under the Veil", cat: "Wedding" },
  { src: px(169193), title: "Garden Vows", cat: "Wedding" },
  { src: px(931162), title: "The Bouquet", cat: "Wedding" },
  { src: px(1857157), title: "The Cake Table", cat: "Birthday" },
  { src: px(1721932), title: "Sweet Moments", cat: "Birthday" },
  { src: px(3171837), title: "Confetti Cheers", cat: "Birthday" },
  { src: px(1303081), title: "Wrapped With Love", cat: "Birthday" },
  { src: px(1036623), title: "The Pink Muse", cat: "Modelling" },
  { src: px(415829), title: "Studio Portrait", cat: "Modelling" },
  { src: px(1043471), title: "Blue Hour Look", cat: "Modelling" },
  { src: px(1701202), title: "In Motion", cat: "Modelling" },
];

export const ABOUT_IMG = px(1264210, 1200);

export type Shoot = {
  name: string;
  tag: string;
  features: string[];
};

export const SHOOTS: Shoot[] = [
  {
    name: "Wedding Shoot",
    tag: "Your big day, beautifully kept",
    features: [
      "Candid + traditional photography",
      "Edited photos, delivered online",
      "Films & reels on request",
      "Price on request — enquire on WhatsApp",
    ],
  },
  {
    name: "Birthday Shoot",
    tag: "Cake, candles & chaos — caught live",
    features: [
      "Candid party photography",
      "Family & friends group shots",
      "Edited photos, delivered online",
      "Price on request — enquire on WhatsApp",
    ],
  },
  {
    name: "Modelling Shoot",
    tag: "Portraits that show your style",
    features: [
      "Portfolio & portrait sessions",
      "Clean, confident, well-lit frames",
      "Edited photos, delivered online",
      "Price on request — enquire on WhatsApp",
    ],
  },
];

// Real photo-editing prices from Lipun's own flyer (IG post, 21 July 2026).
export type EditingRow = {
  type: string;
  single: string;
  five: string;
  note: string;
};

export const EDITING_PRICES: EditingRow[] = [
  { type: "Birthday", single: "₹150", five: "₹700", note: "Birthday photo editing" },
  { type: "Wedding", single: "₹200", five: "₹900", note: "Wedding photo editing" },
  { type: "Modelling", single: "₹100", five: "₹400", note: "Modelling photo editing" },
  { type: "Normal", single: "₹50", five: "₹250", note: "Everyday photo editing" },
];

export const EDITING_DEAL = "Get 1 photo edited FREE on every 10 photos";
export const EDITING_TURNAROUND = "30 minutes to 2 hours";

export const SERVICES = [
  {
    title: "Wedding Photography",
    desc: "Your big day, captured just the way it felt — the vows, the laughter, the little moments in between.",
    img: img("1519741497674-611481863552", 1000),
    href: "/portfolio",
  },
  {
    title: "Birthday Photography",
    desc: "Cakes, candles, friends and family — birthdays full of colour, caught while the fun is still happening.",
    img: px(3171837, 1000),
    href: "/portfolio",
  },
  {
    title: "Modelling Photography",
    desc: "Clean, confident portraits and portfolio shots that show off your style and personality.",
    img: px(1036623, 1000),
    href: "/portfolio",
  },
  {
    title: "Photo Editing & Printing",
    desc: "Quick, affordable editing from Lipun's own rate card — from ₹50 a photo, ready in 30 minutes to 2 hours.",
    img: img("1520854221256-17451cc331bf", 1000),
    href: "/packages",
  },
];
