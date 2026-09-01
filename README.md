# Laud Culture — site

Minimal one-page site for the DJ **Laud Culture**. Dark, monochrome,
fullscreen menu overlay, tour dates, streaming embeds and booking contacts.

Built with [Astro](https://astro.build) + Tailwind CSS v4. Static output —
deploys anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the built site
```

## Editing content

All copy lives in two files — no need to touch components:

| What | File |
| --- | --- |
| Name, tagline, socials, booking emails, streaming embeds | `src/data/site.ts` |
| Tour dates (past ones auto-hide) | `src/data/tour.ts` |

### Streaming embeds
In `src/data/site.ts` → `embeds`, replace each `src` with your own:
- **Spotify**: artist/album/playlist page → Share → *Embed* → copy the `src`.
- **SoundCloud**: track/set → Share → *Embed* → copy the `src` (keep
  `&inverse=true` for the light-on-dark look).

## Structure

```
src/
  data/         site.ts, tour.ts        <- edit here
  layouts/      Layout.astro            <- <head>, fonts, grain, scroll-reveal
  components/   Menu, Hero, Marquee, Tour, Listen, Bookings, Footer
  pages/        index.astro             <- section order
  styles/       global.css             <- tokens: colours, fonts, spacing
```

## Deploy

Push to GitHub, then import the repo in Netlify or Vercel — build command
`npm run build`, publish directory `dist`. No env vars needed.
