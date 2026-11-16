/**
 * Site-wide notice that my-resume.in has shut down.
 *
 * Sits above the Navbar on every page. The marketing copy below it still
 * describes the product in the present tense, so this has to be the first
 * thing a visitor reads — otherwise the page reads as an active offer for
 * something that can no longer be bought or signed up for.
 *
 * Server component: no state, no interactivity, nothing to hydrate.
 */
export default function ClosureNotice() {
  return (
    <div
      role="status"
      className="w-full border-b border-amber-500/40 bg-amber-500/10 px-4 py-3 text-center text-sm text-amber-100"
    >
      <span className="font-semibold">my-resume.in has closed.</span>{" "}
      It is no longer accepting new sign-ups or payments. Existing users can still sign in
      to download documents they already created.{" "}
      <a
        href="mailto:info@zevo-works.in"
        className="underline underline-offset-2 hover:text-white"
      >
        info@zevo-works.in
      </a>
    </div>
  );
}
