// Central place for all editable content. Update here, not in the components.

export const site = {
  name: "Laud Culture",
  tagline: "DJ",
  location: "Milan, IT",
  url: "https://laudculture.com",
  description:
    "Laud Culture — DJ and producer. Bookings, tour dates and latest releases.",
};

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/laudculture" },
  { label: "SoundCloud", href: "https://soundcloud.com/laudculture" },
  { label: "Spotify", href: "https://open.spotify.com/artist/laudculture" },
  { label: "Bandcamp", href: "https://laudculture.bandcamp.com" },
  { label: "TikTok", href: "https://tiktok.com/@laudculture" },
  { label: "YouTube", href: "https://youtube.com/@laudculture" },
];

export type BookingContact = {
  region: string;
  name: string;
  email: string;
};

export const bookings: BookingContact[] = [
  { region: "Management", name: "—", email: "management@laudculture.com" },
  { region: "Worldwide Booking", name: "—", email: "booking@laudculture.com" },
  { region: "Italy", name: "—", email: "italy@laudculture.com" },
  { region: "Europe", name: "—", email: "europe@laudculture.com" },
  { region: "North America", name: "—", email: "northamerica@laudculture.com" },
];

// Streaming embeds shown in the "Listen" section.
// Swap these src values for your real playlist / track / album embeds.
export type Embed = { title: string; src: string };

export const embeds: Embed[] = [
  {
    title: "Latest on Spotify",
    src: "https://open.spotify.com/embed/artist/1vCWHaC5f2uS3yhpwWbIA6?utm_source=generator&theme=0",
  },
  {
    title: "Recent set — SoundCloud",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/platform/sets/best-of-2023&color=%23ffffff&inverse=true&auto_play=false&show_user=true",
  },
];
