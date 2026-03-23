import Image from "next/image";
import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Talkdrop — Your voice, organized by AI",
  description:
    "Record voice memos, get AI transcriptions and summaries, auto-tag and search your notes. Built for students and creators.",
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pt-32">
      {/* Subtle gradient glow behind hero */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface-light shadow-lg sm:h-24 sm:w-24">
          <Image
            src="/icon.png"
            alt="Talkdrop app icon"
            width={80}
            height={80}
            className="rounded-xl"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Your voice,{" "}
          <span className="text-primary">organized by AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Record voice memos on the go. Talkdrop transcribes, summarizes,
          and auto-tags your notes so you can find any idea instantly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
          <a
            href="#notify"
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Get Notified at Launch
          </a>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/images/hero-phone.png"
            alt="Talkdrop app on iPhone showing voice recording waveform"
            width={800}
            height={600}
            className="w-full max-w-lg sm:max-w-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Record",
      description:
        "Tap the record button and talk. Pause, resume, and stop whenever you want. Works offline too.",
      image: "/images/step-record.png",
      imageAlt: "3D microphone with sound waves illustrating voice recording",
    },
    {
      number: "2",
      title: "AI Transcribes & Summarizes",
      description:
        "Your recording is transcribed by OpenAI Whisper, then summarized and tagged by Claude AI. All in seconds.",
      image: "/images/step-transcribe.jpeg",
      imageAlt: "3D document with sparkles illustrating AI transcription",
    },
    {
      number: "3",
      title: "Search & Revisit",
      description:
        "Full-text search across all your notes. Find that idea from last week in seconds, not minutes.",
      image: "/images/step-search.jpeg",
      imageAlt: "Magnifying glass over note cards illustrating search functionality",
    },
  ];

  return (
    <section className="bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Three steps from thought to organized note.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-surface-light p-8 text-center"
            >
              <div className="relative mx-auto mb-6 h-[200px] w-full sm:h-[250px]">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                Step {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "AI Summaries",
      description:
        "Every recording gets a concise summary powered by Claude AI so you can skim your notes at a glance.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
          />
        </svg>
      ),
    },
    {
      title: "Auto-Tagging",
      description:
        "AI reads your transcript and suggests relevant tags automatically. Keep notes organized without the effort.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6z"
          />
        </svg>
      ),
    },
    {
      title: "Full-Text Search",
      description:
        "Search across every transcript and summary. Find any note by keyword, topic, or phrase.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
    },
    {
      title: "Dark Mode",
      description:
        "Easy on the eyes, day or night. Talkdrop is designed dark-first to match how you actually use your phone.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.998z"
          />
        </svg>
      ),
    },
    {
      title: "Offline Recording",
      description:
        "Record anytime, even without internet. Your notes sync and process when you are back online.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243A6.72 6.72 0 015.88 14.88m-1.06-8.546A9.72 9.72 0 003 11.25"
          />
        </svg>
      ),
    },
    {
      title: "Free to Start",
      description:
        "Get 10 notes per month completely free. Upgrade to Pro for unlimited notes when you are ready.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden px-6 py-20 sm:py-28">
      {/* Background image */}
      <Image
        src="/images/features-bg.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Everything you need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Talkdrop turns your voice into organized, searchable notes with the
          power of AI.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-surface-light p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          Start free. Upgrade when you need more.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {/* Free tier */}
          <div className="rounded-2xl border border-white/10 bg-surface-light p-8">
            <h3 className="text-lg font-semibold text-white">Free</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-muted"> / month</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Perfect for trying out Talkdrop.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">10 notes per month</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">AI transcription &amp; summaries</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Full-text search</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Auto-tagging</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-white/20 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="relative rounded-2xl border-2 border-primary bg-surface-light p-8">
            <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-[#1A1E2E]">
              Popular
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">$5.99</span>
              <span className="text-muted"> / month</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Or $44.99/year (save 37%).
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Unlimited notes</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">AI transcription &amp; summaries</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Full-text search</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Auto-tagging</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-muted">Priority support</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full bg-primary py-3 text-center text-sm font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailCaptureSection() {
  return (
    <section id="notify" className="relative overflow-hidden px-6 py-20 sm:py-28">
      {/* Background image */}
      <Image
        src="/images/cta-bg.jpeg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Get notified when we launch
        </h2>
        <p className="mt-4 text-muted">
          Be the first to know when Talkdrop hits the App Store. No spam, just
          one email.
        </p>

        <EmailCapture />
        <p className="mt-3 text-xs text-muted">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/student-lifestyle.jpeg"
              alt="Student in a lecture hall using Talkdrop on their phone to capture notes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Built for students and creators
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              In a fast-paced lecture, you can&apos;t type fast enough. With
              Talkdrop, just hit record and focus on understanding — your
              notes write themselves.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Creators use Talkdrop to capture ideas the moment they strike —
              on a walk, in the car, or right before bed. Every thought is
              transcribed, summarized, and searchable within seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Lectures
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Brainstorms
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Meeting notes
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Voice journals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LifestyleSection />
      <PricingSection />
      <EmailCaptureSection />
    </>
  );
}
