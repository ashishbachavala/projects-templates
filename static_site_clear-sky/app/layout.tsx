import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Static Site Vercel Starter',
  description: 'A static site starter with a polished landing page and built-in Vercel deployment.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative isolate min-h-screen overflow-x-hidden bg-neutral-50 font-sans text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}
