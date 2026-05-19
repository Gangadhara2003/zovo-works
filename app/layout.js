import "./globals.css";

const SITE_URL = "https://zevo-works.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zevo Works — Free AI resume builder & JD-tailored ATS resumes (India)",
    template: "%s · Zevo Works",
  },
  description:
    "Zevo Works builds free AI tools for job seekers in India. Tailor your resume to any job description, beat ATS filters, and ship a recruiter-ready PDF in minutes — powered by AI + LaTeX.",
  applicationName: "Zevo Works",
  authors: [{ name: "Zevo Works" }],
  creator: "Zevo Works",
  publisher: "Zevo Works",
  generator: "Next.js",
  keywords: [
    "Zevo Works",
    "my-resume",
    "AI resume builder India",
    "ATS resume builder India",
    "tailor resume to job description",
    "JD resume builder",
    "free AI resume optimiser",
    "ATS-friendly resume India",
    "LaTeX resume generator",
    "AI resume optimisation",
    "job-specific resume builder",
    "resume keyword optimisation",
    "resume builder",
    "resume AI",
    "AI resume",
    "ATS resume",
    "resume India",
    "PDF resume builder",
    "ATS checker",
    "AI resume checker",
    "resume maker for freshers India",
    "resume maker for experienced India",
    "resume builder for doctors India",
    "resume builder for engineers India",
    "resume builder for experienced India",
    "resume builder for experienced"
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
      logo: { "@type": "ImageObject", url: `${SITE_URL}/zevo-works%20logo.png` },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Zevo Works",
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://my-resume.in#webapp",
      name: "my-resume",
      alternateName: "my-resume.in",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://my-resume.in",
      description:
        "Free AI resume builder for India. Paste a job description, get an ATS-tailored resume in minutes with LaTeX-quality PDF export.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      publisher: { "@id": `${SITE_URL}#organization` },
      featureList: [
        "AI keyword optimisation against any JD",
        "ATS-friendly LaTeX-typeset PDF",
        "Profile-aware honesty checks (won't fabricate)",
        "Study plan with project ideas tailored to JD",
      ],
    },
    {
      "@type": "HowTo",
      name: "How to tailor your resume to a job description with my-resume",
      description:
        "Three steps to go from a job listing to a recruiter-ready, ATS-optimised PDF resume.",
      totalTime: "PT5M",
      tool: [{ "@type": "HowToTool", name: "my-resume by Zevo Works" }],
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Paste the job description",
          text: "Drop the JD you're targeting into my-resume. The AI extracts required skills, seniority signals, and the keywords that recruiters and ATS filter on.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "AI tailors your resume",
          text: "Our AI restructures your experience, rewrites bullet points, and matches your real skills to the JD — never inventing experience you don't have.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Download a recruiter-ready PDF",
          text: "Get a clean LaTeX-typeset PDF that passes ATS scanners and looks professional. Iterate as many times as you want — it's free.",
        },
      ],
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
