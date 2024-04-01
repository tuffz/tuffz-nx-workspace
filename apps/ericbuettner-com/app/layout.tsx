import './global.css';
import PlausibleProvider from 'next-plausible';

import { SharedUiFooter, Website } from '@tuffz/shared-ui-footer';

export const metadata = {
  title: 'Eric Büttner | Head of Software Engineering at allmyhomes GmbH',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="ericbuettner.com" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="canonical" href="https://www.ericbuettner.com/" />
      </head>

      <body>
        <div id="app" className="min-h-screen bg-gray-300">
          <main className="container mx-auto p-2">{children}</main>
          <SharedUiFooter website={Website.ERICBUETTNERCOM} />
        </div>
      </body>
    </html>
  );
}
