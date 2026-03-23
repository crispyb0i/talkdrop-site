import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Talkdrop",
  description:
    "Learn how Talkdrop collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">
        Effective date: March 23, 2026 &middot; Last updated: March 23, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Talkdrop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a
            voice memo application that records, transcribes, summarizes, and
            organizes your notes using artificial intelligence. This Privacy
            Policy describes how we collect, use, store, and share your personal
            information when you use the Talkdrop mobile application and related
            services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mt-3">
            By using Talkdrop, you agree to the collection and use of
            information in accordance with this policy. If you do not agree,
            please do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Account Information</h3>
          <p>
            When you create an account, we collect your email address. We use
            passwordless authentication (magic links) through Supabase Auth, so
            we do not store passwords.
          </p>

          <h3>2.2 Voice Recordings</h3>
          <p>
            When you record a voice memo, the audio is temporarily uploaded to
            our servers for processing. Voice recordings are sent to OpenAI for
            transcription via their Whisper API.{" "}
            <strong className="text-white">
              Audio files are processed and deleted immediately after
              transcription is complete. We do not permanently store your voice
              recordings on our servers.
            </strong>
          </p>

          <h3>2.3 Transcripts and Summaries</h3>
          <p>
            After transcription, the text is sent to Anthropic&apos;s Claude AI
            to generate a summary and auto-tags. Your transcripts and summaries
            are stored in our database (hosted on Supabase) and are associated
            with your account.
          </p>

          <h3>2.4 Usage Data</h3>
          <p>We collect information about how you use the Service, including:</p>
          <ul>
            <li>Number of notes created per month</li>
            <li>Feature usage (search, playback, tagging)</li>
            <li>App opens and session duration</li>
            <li>Device type, operating system, and app version</li>
          </ul>

          <h3>2.5 Analytics Data</h3>
          <p>
            We use PostHog for product analytics. PostHog collects anonymized
            usage events to help us understand how users interact with the app
            and improve the experience. This may include page views, feature
            interactions, and performance metrics. No voice recordings or
            transcript content is sent to analytics.
          </p>

          <h3>2.6 Payment Information</h3>
          <p>
            Subscriptions are processed through Apple&apos;s App Store and
            managed by RevenueCat. We do not directly collect or store your
            payment card details. RevenueCat provides us with subscription
            status, purchase history, and anonymized identifiers.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>
              Process your voice recordings into transcripts and summaries
            </li>
            <li>Enable search across your notes</li>
            <li>Manage your account and subscription</li>
            <li>Enforce free tier usage limits</li>
            <li>Send service-related communications (e.g., password resets)</li>
            <li>Analyze usage patterns to improve the product</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We share data with the following third-party service providers, each
            of which has their own privacy policy:
          </p>
          <ul>
            <li>
              <strong className="text-white">Supabase</strong> — Database
              hosting, authentication, and file storage. Your transcripts,
              summaries, and account data are stored on Supabase infrastructure
              with encryption at rest.
            </li>
            <li>
              <strong className="text-white">OpenAI</strong> — Audio
              transcription via the Whisper API. Audio files are sent for
              processing and are subject to OpenAI&apos;s data usage policies.
            </li>
            <li>
              <strong className="text-white">Anthropic</strong> — Text
              summarization and auto-tagging via the Claude API. Transcript text
              is sent for processing and is subject to Anthropic&apos;s usage
              policies.
            </li>
            <li>
              <strong className="text-white">RevenueCat</strong> — Subscription
              management and payment processing coordination with the Apple App
              Store.
            </li>
            <li>
              <strong className="text-white">PostHog</strong> — Product
              analytics. Receives anonymized usage events only.
            </li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to any third parties.
          </p>
        </section>

        <section>
          <h2>5. Data Storage and Security</h2>
          <p>
            Your data is stored on Supabase infrastructure with encryption at
            rest and in transit (TLS). We implement row-level security policies
            to ensure that users can only access their own data. While we take
            reasonable measures to protect your information, no method of
            electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <ul>
            <li>
              <strong className="text-white">Voice recordings:</strong> Deleted
              immediately after transcription (typically within seconds).
            </li>
            <li>
              <strong className="text-white">
                Transcripts and summaries:
              </strong>{" "}
              Retained as long as your account is active, or until you delete
              them.
            </li>
            <li>
              <strong className="text-white">Account data:</strong> Retained
              until you request account deletion.
            </li>
            <li>
              <strong className="text-white">Analytics data:</strong> Retained
              in anonymized form for up to 24 months.
            </li>
          </ul>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>

          <h3>7.1 Access and Portability</h3>
          <p>
            You can access all of your notes, transcripts, and summaries
            directly within the app. You may request a full export of your data
            by contacting us at{" "}
            <a
              href="mailto:support@talkdrop.app"
              className="text-primary hover:underline"
            >
              support@talkdrop.app
            </a>
            .
          </p>

          <h3>7.2 Deletion</h3>
          <p>
            You can delete individual notes within the app at any time. To
            delete your entire account and all associated data, contact us at{" "}
            <a
              href="mailto:support@talkdrop.app"
              className="text-primary hover:underline"
            >
              support@talkdrop.app
            </a>
            . We will process deletion requests within 30 days.
          </p>

          <h3>7.3 Correction</h3>
          <p>
            You can edit your notes and transcripts directly in the app. To
            update your account information, contact us.
          </p>

          <h3>7.4 Opt-Out</h3>
          <p>
            You can disable auto-tagging in the app settings. You may also
            opt out of analytics collection by contacting us.
          </p>
        </section>

        <section>
          <h2>8. GDPR (European Economic Area)</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have
            additional rights under the General Data Protection Regulation
            (GDPR):
          </p>
          <ul>
            <li>
              <strong className="text-white">Legal basis:</strong> We process
              your data based on your consent (account creation), contract
              performance (providing the Service), and legitimate interest
              (product improvement and analytics).
            </li>
            <li>
              <strong className="text-white">Data transfers:</strong> Your data
              may be transferred to and processed in the United States, where
              our service providers are located. We rely on standard contractual
              clauses and provider certifications to ensure adequate protection.
            </li>
            <li>
              <strong className="text-white">Right to object:</strong> You may
              object to processing based on legitimate interest by contacting us.
            </li>
            <li>
              <strong className="text-white">Supervisory authority:</strong> You
              have the right to lodge a complaint with your local data protection
              authority.
            </li>
          </ul>
        </section>

        <section>
          <h2>9. CCPA (California)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy
            Act (CCPA) provides you with additional rights:
          </p>
          <ul>
            <li>
              <strong className="text-white">Right to know:</strong> You can
              request details about the personal information we collect, use, and
              disclose.
            </li>
            <li>
              <strong className="text-white">Right to delete:</strong> You can
              request deletion of your personal information, subject to certain
              exceptions.
            </li>
            <li>
              <strong className="text-white">Right to non-discrimination:</strong>{" "}
              We will not discriminate against you for exercising your CCPA
              rights.
            </li>
            <li>
              <strong className="text-white">No sale of data:</strong> We do not
              sell your personal information as defined under the CCPA.
            </li>
          </ul>
          <p className="mt-3">
            To exercise your CCPA rights, contact us at{" "}
            <a
              href="mailto:support@talkdrop.app"
              className="text-primary hover:underline"
            >
              support@talkdrop.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Talkdrop is not intended for children under 13 years of age. We do
            not knowingly collect personal information from children under 13. If
            we learn that we have collected personal data from a child under 13,
            we will take steps to delete that information promptly.
          </p>
        </section>

        <section>
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of material changes by posting the updated policy within the app
            or by sending an email to the address associated with your account.
            Your continued use of the Service after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your data rights, contact us at:
          </p>
          <p className="mt-2">
            <a
              href="mailto:support@talkdrop.app"
              className="text-primary hover:underline"
            >
              support@talkdrop.app
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
