import { POSTS } from "./learn/page";

const SITE_URL = "https://zevo-works.in";

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { url: `${SITE_URL}/`,        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/terms`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/learn`,   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
  ];

  // Auto-derive every /learn article from the catalog so new posts can never
  // be forgotten in the sitemap. `published` is "YYYY.MM.DD" → ISO date.
  const learnPages = POSTS.map((p) => ({
    url: `${SITE_URL}/learn/${p.slug}`,
    lastModified: (p.updated || p.published || "").replaceAll(".", "-") || now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...learnPages];
}
