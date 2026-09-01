// Tour dates. Keep them in chronological order.
// `ticketsUrl` is optional — leave it out for "TBA" shows.
// Past dates are filtered out automatically on the site.

export type Show = {
  date: string; // ISO date, e.g. "2026-03-14"
  city: string;
  country: string;
  venue: string;
  ticketsUrl?: string;
};

export const shows: Show[] = [
  { date: "2026-10-03", city: "Milan", country: "IT", venue: "Tempio del Futuro Perduto", ticketsUrl: "#" },
  { date: "2026-10-17", city: "Berlin", country: "DE", venue: "Prince Charles", ticketsUrl: "#" },
  { date: "2026-10-31", city: "London", country: "UK", venue: "Corsica Studios", ticketsUrl: "#" },
  { date: "2026-11-14", city: "Amsterdam", country: "NL", venue: "Shelter", ticketsUrl: "#" },
  { date: "2026-11-28", city: "Barcelona", country: "ES", venue: "Nitsa", ticketsUrl: "#" },
  { date: "2026-12-12", city: "Paris", country: "FR", venue: "Rex Club" },
  { date: "2027-01-23", city: "New York", country: "US", venue: "Nowadays", ticketsUrl: "#" },
];
