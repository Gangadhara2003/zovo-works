import "./globals.css";

export const metadata = {
  title: "Zevo Works — Zero Effort, Maximum Output",
  description:
    "Zevo Works builds AI-powered productivity tools that automate the boring stuff. From ATS-optimized resumes to intelligent workflows — zero effort, maximum output.",
  keywords: [
    "AI tools",
    "productivity",
    "SaaS",
    "resume builder",
    "automation",
    "Zevo Works",
  ],
  openGraph: {
    title: "Zevo Works — Zero Effort, Maximum Output",
    description:
      "AI-powered productivity tools that automate the boring stuff.",
    url: "https://zevo-works.in",
    siteName: "Zevo Works",
    type: "website",
  },
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
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-[Satoshi,sans-serif]">
        {children}
      </body>
    </html>
  );
}
