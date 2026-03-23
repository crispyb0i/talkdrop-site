import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talkdrop.app"),
  title: "Talkdrop — Your voice, organized by AI",
  description:
    "Record voice memos, get AI transcriptions and summaries, auto-tag and search your notes. Built for students and creators.",
  openGraph: {
    title: "Talkdrop — Your voice, organized by AI",
    description:
      "Record voice memos, get AI transcriptions and summaries, auto-tag and search your notes.",
    type: "website",
    url: "https://talkdrop.app",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Talkdrop" }],
  },
  twitter: {
    card: "summary",
    title: "Talkdrop — Your voice, organized by AI",
    description:
      "Record voice memos, get AI transcriptions and summaries, auto-tag and search your notes.",
    images: ["/icon.png"],
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1E2E]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Talkdrop"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">Talkdrop</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Support
          </Link>
          <Link
            href="#"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90"
          >
            Download
          </Link>
        </div>

        {/* Mobile: just the download button */}
        <Link
          href="#"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#1A1E2E] transition-opacity hover:opacity-90 md:hidden"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="Talkdrop"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">Talkdrop</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              Your voice, organized by AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/support" className="hover:text-white">
                  Help &amp; FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@talkdrop.app"
                  className="hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Talkdrop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
