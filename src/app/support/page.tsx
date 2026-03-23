import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Talkdrop",
  description:
    "Get help with Talkdrop. Find answers to common questions or contact our support team.",
};

const faqs = [
  {
    question: "How does Talkdrop transcribe my recordings?",
    answer:
      "Talkdrop uses OpenAI's Whisper API to transcribe your voice recordings with high accuracy. After transcription, Claude AI generates a concise summary and suggests relevant tags. The entire process typically takes just a few seconds.",
  },
  {
    question: "What happens to my voice recordings?",
    answer:
      "Your privacy is a top priority. Voice recordings are temporarily uploaded for transcription and are deleted immediately after processing is complete. We never permanently store your audio files on our servers. Only the text transcript and AI-generated summary are saved to your account.",
  },
  {
    question: "How many notes can I create for free?",
    answer:
      "The free tier includes up to 10 notes per calendar month. This includes full AI transcription, summarization, auto-tagging, and search. If you need more, the Pro plan ($5.99/month or $44.99/year) gives you unlimited notes.",
  },
  {
    question: "Can I use Talkdrop offline?",
    answer:
      "Yes! You can record voice memos without an internet connection. Your recordings will be saved locally and automatically processed (transcribed and summarized) when you reconnect to the internet.",
  },
  {
    question: "How do I cancel my Pro subscription?",
    answer:
      "You can manage or cancel your subscription through your Apple ID account settings (Settings > Apple ID > Subscriptions on your iPhone). Cancellation takes effect at the end of your current billing period, so you'll continue to have Pro access until then.",
  },
  {
    question: "Can I delete my account and all my data?",
    answer:
      "Yes. You can delete individual notes within the app at any time. To delete your entire account and all associated data, contact us at support@talkdrop.app and we will process your request within 30 days.",
  },
];

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Help &amp; Support
      </h1>
      <p className="mt-4 text-muted">
        Find answers to common questions below, or reach out to our team
        directly.
      </p>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-surface-light p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold text-white">Contact Us</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-surface-light p-6">
          <p className="text-sm text-muted">
            Can&apos;t find what you are looking for? We are happy to help.
            Reach out to our support team and we will get back to you as soon as
            possible.
          </p>
          <a
            href="mailto:support@talkdrop.app"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            support@talkdrop.app
          </a>
        </div>
      </section>

      {/* Back to app */}
      <section className="mt-16 text-center">
        <p className="text-sm text-muted">
          Ready to get back to your notes?
        </p>
        <Link
          href="/"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Talkdrop
        </Link>
      </section>
    </div>
  );
}
