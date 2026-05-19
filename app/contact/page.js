import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Send feedback, ideas, or report an issue. We read every message and reply directly to your email from admin@zevo-works.in.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactForm />
    </main>
  );
}
