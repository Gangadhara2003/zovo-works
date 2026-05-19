const SITE_URL = "https://zevo-works.in";

// Explicit allow-list for every major AI / search crawler. By default many
// LLM crawlers treat the absence of a UA-specific rule as "blocked from
// training" — calling them out by name flips that to "allowed".
const AI_AGENTS = [
  "GPTBot",            // OpenAI / ChatGPT search + training
  "ChatGPT-User",      // ChatGPT live browsing
  "OAI-SearchBot",     // OpenAI search index
  "ClaudeBot",         // Anthropic / Claude.ai training
  "Claude-Web",        // Claude live browsing
  "anthropic-ai",      // legacy Anthropic UA
  "PerplexityBot",     // Perplexity.ai
  "Perplexity-User",   // Perplexity live fetch
  "Google-Extended",   // Gemini / Bard training opt-in
  "Bingbot",           // Bing (powers Copilot too)
  "Applebot-Extended", // Apple Intelligence training
  "Amazonbot",         // Amazon AI
  "Bytespider",        // ByteDance / Doubao
  "CCBot",             // Common Crawl (feeds many open LLMs)
  "Diffbot",           // Diffbot knowledge graph
  "FacebookBot",       // Meta AI
  "YouBot",            // You.com
  "cohere-ai",         // Cohere
  "DuckAssistBot",     // DuckDuckGo AI
  "Mistralai-User",    // Mistral
];

export default function robots() {
  return {
    rules: [
      // Default: everyone allowed everywhere.
      { userAgent: "*", allow: "/" },
      // Explicit allow per AI crawler. Some treat absence as block.
      ...AI_AGENTS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
