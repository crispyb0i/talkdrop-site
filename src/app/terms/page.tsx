import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Talkdrop",
  description:
    "Read the terms and conditions for using the Talkdrop voice memo app.",
};

export default function TermsOfService() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted">
        Effective date: March 23, 2026 &middot; Last updated: March 23, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the Talkdrop mobile application and related services
            (collectively, the &quot;Service&quot;) provided by Talkdrop
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By creating an
            account or using the Service, you agree to be bound by these Terms.
            If you do not agree, do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use Talkdrop. If you are under
            18, you must have permission from a parent or legal guardian. By
            using the Service, you represent that you meet these requirements.
          </p>
        </section>

        <section>
          <h2>3. Account Terms</h2>
          <ul>
            <li>
              You must provide a valid email address to create an account.
            </li>
            <li>
              You are responsible for maintaining the security of your account.
              Do not share your authentication credentials.
            </li>
            <li>
              You are responsible for all activity that occurs under your
              account.
            </li>
            <li>
              You must notify us immediately at{" "}
              <a
                href="mailto:support@talkdrop.app"
                className="text-primary hover:underline"
              >
                support@talkdrop.app
              </a>{" "}
              if you suspect unauthorized access to your account.
            </li>
            <li>
              One person or entity may not maintain more than one free account.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>
              Record conversations without the consent of all parties where
              required by law.
            </li>
            <li>
              Upload, transmit, or store content that is illegal, harmful,
              threatening, abusive, harassing, defamatory, or otherwise
              objectionable.
            </li>
            <li>
              Attempt to gain unauthorized access to the Service, other
              accounts, or related systems.
            </li>
            <li>
              Reverse engineer, decompile, or attempt to extract the source code
              of the Service.
            </li>
            <li>
              Use the Service to develop a competing product or service.
            </li>
            <li>
              Circumvent or manipulate usage limits, billing, or subscription
              mechanisms.
            </li>
            <li>
              Use automated tools (bots, scrapers) to access the Service without
              our written permission.
            </li>
            <li>
              Transmit viruses, malware, or other harmful code through the
              Service.
            </li>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>
        </section>

        <section>
          <h2>5. Subscriptions and Payments</h2>

          <h3>5.1 Free Tier</h3>
          <p>
            Talkdrop offers a free tier that includes up to 10 notes per
            calendar month. Free tier users have access to all core features
            including AI transcription, summarization, auto-tagging, and
            full-text search.
          </p>

          <h3>5.2 Pro Subscription</h3>
          <p>
            The Pro subscription removes the monthly note limit and provides
            access to priority support. Pro is available as:
          </p>
          <ul>
            <li>Monthly plan: $5.99 per month</li>
            <li>Annual plan: $44.99 per year</li>
          </ul>

          <h3>5.3 Billing</h3>
          <p>
            All subscriptions are billed through Apple&apos;s App Store.
            Subscription payments are subject to the App Store&apos;s terms and
            conditions. Prices may vary by region and are displayed in your local
            currency at the time of purchase.
          </p>

          <h3>5.4 Renewal and Cancellation</h3>
          <p>
            Subscriptions automatically renew unless cancelled at least 24 hours
            before the end of the current billing period. You can manage and
            cancel your subscription through your Apple ID account settings.
            Cancellation takes effect at the end of the current billing period —
            you will retain access to Pro features until then.
          </p>

          <h3>5.5 Refunds</h3>
          <p>
            Refund requests are handled by Apple in accordance with App Store
            policies. We do not process refunds directly. If you believe you
            were charged in error, contact Apple Support or reach out to us and
            we will assist where possible.
          </p>

          <h3>5.6 Price Changes</h3>
          <p>
            We reserve the right to change subscription prices. Existing
            subscribers will be notified of price changes in advance and will
            have the option to cancel before the new price takes effect.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>

          <h3>6.1 Your Content</h3>
          <p>
            You retain full ownership of all content you create using Talkdrop,
            including your voice recordings, transcripts, summaries, and notes
            (&quot;Your Content&quot;). We do not claim any ownership rights over
            Your Content.
          </p>
          <p className="mt-3">
            By using the Service, you grant us a limited, non-exclusive license
            to process, store, and transmit Your Content solely for the purpose
            of providing and improving the Service. This license terminates when
            you delete Your Content or your account.
          </p>

          <h3>6.2 Our Service</h3>
          <p>
            The Talkdrop application, its design, features, code, and branding
            are the property of Talkdrop and are protected by intellectual
            property laws. You may not copy, modify, distribute, or create
            derivative works based on the Service without our written permission.
          </p>

          <h3>6.3 Feedback</h3>
          <p>
            If you provide feedback or suggestions about the Service, we may use
            them without any obligation to you.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            Talkdrop integrates with third-party services including OpenAI
            (transcription), Anthropic (summarization), Supabase (data storage),
            RevenueCat (subscriptions), and PostHog (analytics). Your use of
            these services through Talkdrop is also subject to their respective
            terms and privacy policies. We are not responsible for the practices
            of third-party services.
          </p>
        </section>

        <section>
          <h2>8. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            , which explains how we collect, use, and protect your personal
            information. The Privacy Policy is incorporated into and forms part
            of these Terms.
          </p>
        </section>

        <section>
          <h2>9. Disclaimers</h2>

          <h3>9.1 Service Provided &quot;As Is&quot;</h3>
          <p>
            The Service is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind, whether express
            or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>

          <h3>9.2 AI Accuracy</h3>
          <p>
            Transcriptions and AI-generated summaries may contain errors. We do
            not guarantee the accuracy, completeness, or reliability of
            AI-generated content. You should review AI outputs and not rely on
            them as the sole record of important information.
          </p>

          <h3>9.3 Availability</h3>
          <p>
            We strive to keep Talkdrop available and reliable, but we do not
            guarantee uninterrupted or error-free operation. The Service may be
            temporarily unavailable due to maintenance, updates, or
            circumstances beyond our control.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Talkdrop and its
            officers, directors, employees, and affiliates shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits, revenue, data, or use, arising out
            of or related to your use of the Service, regardless of the theory
            of liability.
          </p>
          <p className="mt-3">
            Our total cumulative liability to you for all claims related to the
            Service shall not exceed the greater of (a) the amount you have paid
            us in the 12 months preceding the claim, or (b) $50 USD.
          </p>
        </section>

        <section>
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Talkdrop and its officers,
            directors, employees, and affiliates from any claims, damages,
            losses, and expenses (including reasonable legal fees) arising from
            your use of the Service, your violation of these Terms, or your
            violation of any rights of a third party.
          </p>
        </section>

        <section>
          <h2>12. Termination</h2>
          <ul>
            <li>
              <strong className="text-white">By you:</strong> You may delete
              your account at any time by contacting us at{" "}
              <a
                href="mailto:support@talkdrop.app"
                className="text-primary hover:underline"
              >
                support@talkdrop.app
              </a>
              . Deletion of your account will result in permanent removal of
              your data, subject to our data retention practices described in the
              Privacy Policy.
            </li>
            <li>
              <strong className="text-white">By us:</strong> We may suspend or
              terminate your account at any time if you violate these Terms, or
              if we reasonably believe your actions may cause legal liability or
              harm to other users. We will make reasonable efforts to notify you
              before termination except in cases of severe violations.
            </li>
            <li>
              <strong className="text-white">Effect of termination:</strong>{" "}
              Upon termination, your right to use the Service ceases
              immediately. We may delete your data in accordance with our
              retention policies.
            </li>
          </ul>
        </section>

        <section>
          <h2>13. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or the Service shall first be
            attempted to be resolved through good-faith negotiation. If a
            dispute cannot be resolved informally within 30 days, it shall be
            resolved through binding arbitration in accordance with the rules of
            the American Arbitration Association. The arbitration shall take
            place in the United States, and the language of the proceedings shall
            be English.
          </p>
          <p className="mt-3">
            You agree that any dispute resolution proceedings will be conducted
            on an individual basis and not as part of a class, consolidated, or
            representative action.
          </p>
        </section>

        <section>
          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of California, United States, without regard
            to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>15. Changes to These Terms</h2>
          <p>
            We may modify these Terms at any time. Material changes will be
            communicated through the app or via email at least 30 days before
            taking effect. Your continued use of the Service after changes take
            effect constitutes your acceptance of the revised Terms. If you do
            not agree to the changes, you must stop using the Service.
          </p>
        </section>

        <section>
          <h2>16. Miscellaneous</h2>
          <ul>
            <li>
              <strong className="text-white">Entire agreement:</strong> These
              Terms, together with the Privacy Policy, constitute the entire
              agreement between you and Talkdrop regarding the Service.
            </li>
            <li>
              <strong className="text-white">Severability:</strong> If any
              provision of these Terms is found unenforceable, the remaining
              provisions will continue in full force and effect.
            </li>
            <li>
              <strong className="text-white">Waiver:</strong> Failure to enforce
              any provision of these Terms does not constitute a waiver of that
              provision.
            </li>
            <li>
              <strong className="text-white">Assignment:</strong> You may not
              assign your rights or obligations under these Terms. We may assign
              our rights and obligations without restriction.
            </li>
          </ul>
        </section>

        <section>
          <h2>17. Contact Us</h2>
          <p>
            If you have questions about these Terms, contact us at:
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
