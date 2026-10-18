// Central place for all editable content. Update here, not in the components.

export const site = {
  name: "Laud Culture",
  tagline: "DJ",
  location: "Trentino, IT",
  url: "https://laudculture.com",
  description:
    "Laud Culture — DJ from Trentino. Tech house, afro house, house. Bookings, tour dates and latest sounds.",
};

// Shown in the "About" section and in the marquee.
export const genres = ["Tech House", "Afro House", "House"];

export const about = {
  bio: "DJ from Trentino, moving between the groove of house, the percussive pulse of afro house and the drive of tech house — from lakeside sunsets to late-night floors.",
  photoAlt: "Laud Culture mixing on Pioneer DJ decks by a lake in Trentino",
};

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/laudculture" },
  { label: "SoundCloud", href: "https://soundcloud.com/laudculture" },
  { label: "Spotify", href: "https://open.spotify.com/user/31eq4uqfszgnhkmxpwsv6c23fyfa" },
  { label: "Bandcamp", href: "https://laudculture.bandcamp.com" },
  { label: "TikTok", href: "https://tiktok.com/@laudculture" },
  { label: "YouTube", href: "https://youtube.com/@laudculture" },
];

export const booking = {
  label: "Bookings & info",
  email: "laudculture@gmail.com",
};

// Cards shown in the "Listen" section.
// - `src`  -> renders an embedded player (Spotify playlist/album/track/artist,
//             or a SoundCloud track/set player URL)
// - `href` -> renders a click-through card (used when there is nothing
//             embeddable yet, e.g. a Spotify *user* profile)
export type Embed = { title: string; src?: string; href?: string; note?: string };

export const embeds: Embed[] = [
  {
    title: "Spotify",
    href: "https://open.spotify.com/user/31eq4uqfszgnhkmxpwsv6c23fyfa",
    note: "Playlists & selections — original tracks coming soon",
  },
  // TODO: add the SoundCloud set/profile link, e.g.
  // {
  //   title: "SoundCloud",
  //   src: "https://w.soundcloud.com/player/?url=<ENCODED_URL>&color=%23ffffff&inverse=true&auto_play=false&show_user=true",
  // },
];
