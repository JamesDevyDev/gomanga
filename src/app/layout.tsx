import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoManga – Read Free Manga Online | Latest Updates Daily",
  description:
    "GoManga is your go-to place for the latest manga chapters, updated daily. Read popular series online for free – no sign-up, just pure manga enjoyment.",
  keywords: [
    "manga",
    "read manga online",
    "free manga",
    "latest manga updates",
    "manga reader",
    "manhwa",
    "manhua",
    "webtoon",
    "comic reader",
  ],
  authors: [{ name: "GoManga" }],
  openGraph: {
    title: "GoManga – Read Free Manga Online",
    description:
      "Read the latest manga chapters updated daily, free and without sign-up. Your manga reading adventure starts here.",
    url: "https://gomanga.com", // change to your domain
    siteName: "GoManga",
    images: [
      {
        url: "/landing_assets/logo.png", // should be at least 1200x630 for OG
        width: 1200,
        height: 630,
        alt: "GoManga Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoManga – Read Free Manga Online",
    description:
      "The latest manga chapters, updated daily. Read free without sign-up.",
    images: ["/landing_assets/logo.png"],
    creator: "@gomanga", // replace with your handle
  },
  icons: {
    icon: "/landing_assets/logo.png",
    shortcut: "/landing_assets/logo.png",
    apple: "/landing_assets/logo.png",
  },
  metadataBase: new URL("https://gomanga.com"), // change to your domain
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
