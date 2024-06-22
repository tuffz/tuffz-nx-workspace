import PlausibleProvider from 'next-plausible';

import { SharedUiFooter, Website } from '@tuffz/shared-ui-footer';
import './global.css';

export const metadata = {
  metadataBase: new URL('https://www.coding-booth.com'),
  title: {
    template: '%s | coding-booth.com',
    default: 'Tiny helpers and software tools that make daily work easier',
  },
  description: 'Tiny helpers and software tools that make daily work easier',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nositelinkssearchbox: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="coding-booth.com" />
      </head>

      <body>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <main>{children}</main>
          <SharedUiFooter website={Website.CODINGBOOTHCOM} />
        </div>
      </body>
    </html>
  );
}
