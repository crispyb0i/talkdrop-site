"use client";

import { useState, type FormEvent } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Store in localStorage for now — wire to Supabase/Mailchimp later
    const existing = JSON.parse(
      localStorage.getItem("talkdrop_waitlist") || "[]"
    ) as string[];
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem("talkdrop_waitlist", JSON.stringify(existing));
    }
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5 text-center">
        <p className="font-semibold text-primary">You are on the list!</p>
        <p className="mt-1 text-sm text-muted">
          We will let you know as soon as Talkdrop launches.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col gap-3 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-white/20 bg-surface-light px-5 py-3 text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90"
      >
        Notify Me
      </button>
    </form>
  );
}
