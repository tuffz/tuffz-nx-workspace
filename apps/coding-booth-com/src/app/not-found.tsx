import { PageNotFound } from '@tuffz/coding-booth-com-page-not-found';

export const metadata = {
  title: '404 - Nothing to see here 👀',
  robots: {
    index: false,
    googleBot: {
      index: false,
      noimageindex: true,
      nositelinkssearchbox: true,
    },
  },
};

export default function NotFoundPage() {
  return <PageNotFound />;
}
