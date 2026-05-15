import "./globals.css";

const SITE_URL = "https://zevo-works.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zevo Works — Zero Effort, Maximum Output",
    template: "%s · Zevo Works",
  },
  description:
    "Zevo Works builds AI-powered productivity tools that automate the boring stuff. From ATS-optimised resumes to intelligent workflows — zero effort, maximum output.",
  applicationName: "Zevo Works",
  authors: [{ name: "Zevo Works" }],
  creator: "Zevo Works",
  publisher: "Zevo Works",
  generator: "Next.js",
  keywords: [
    "Zevo Works",
    "AI tools",
    "productivity",
    "SaaS",
    "resume builder",
    "automation",
    "my-resume",
    "ATS resume",
    "free resume builder",
    "AI resume",
    "LaTeX resume",
    "Indian startup",
  ],
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Zevo Works",
    title: "Zevo Works — Zero Effort, Maximum Output",
    description:
      "AI-powered productivity tools that automate the boring stuff. ATS-optimised resumes, intelligent workflows, real outcomes.",
    images: [
      {
        url: "/zevo-works%20logo.png",
        width: 1200,
        height: 630,
        alt: "Zevo Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zevo Works — Zero Effort, Maximum Output",
    description:
      "AI-powered productivity tools that automate the boring stuff.",
    images: ["/zevo-works%20logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/zevo-works%20icon.png", type: "image/png" },
    ],
    apple: [{ url: "/zevo-works%20icon.png" }],
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#F7F7F5",
  width: "device-width",
  initialScale: 1,
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Zevo Works",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/zevo-works%20logo.png`,
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Zevo Works",
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-full bg-mosaic font-[General_Sans,sans-serif] text-grid">
        <div className="page-frame mx-auto bg-paper flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
