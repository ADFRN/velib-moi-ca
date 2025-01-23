import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mon vélib',
  description: 'Trouvez une station vélib près de vous',
  generator: "Next.js",
  keywords: ["velib", "station", "paris", "velo", "bicycle", "map", "react", "nextjs", "tailwindcss"],
  openGraph: {
    title: "Mon vélib",
    description:
      "Trouvez une station vélib près de vous.",
    url: "https://velib-moi-ca.vercel.app/",
    siteName: "velib-moi-ca.vercel.app",
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    title: "Mon vélib",
    description:
      "Trouvez une station vélib près de vous.",
    creator: "@adfrn",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
