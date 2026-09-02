// Tour dates. Keep them in chronological order.
// `url` is optional — a tickets page, an event page, or the venue's
// socials. `urlLabel` overrides the link text ("Tickets ↗" by default).
// Leave `url` out for a "TBA" show. Past dates are hidden automatically.

export type Show = {
  date: string; // ISO date, e.g. "2026-09-06"
  time?: string; // e.g. "16:00"
  venue: string;
  city: string;
  country?: string;
  url?: string;
  urlLabel?: string;
};

export const shows: Show[] = [
  {
    date: "2026-09-06",
    time: "16:00",
    venue: "Bar alla Spiaggia",
    city: "Trentino",
    country: "IT",
    url: "https://www.instagram.com/bar_alla_spiaggia/",
    urlLabel: "Info ↗",
  },
];
