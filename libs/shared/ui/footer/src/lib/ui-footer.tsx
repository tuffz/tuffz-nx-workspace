import { UiAnchor } from '@tuffz/shared/ui/anchor';

export enum Website {
  CODINGBOOTHCOM = 'coding-booth.com',
  ERICBUETTNERCOM = 'ericbuettner.com',
  TUFFZCOM = 'tuffz.com',
}

export interface UiFooterProps {
  website: Website;
}

export function UiFooter(props: UiFooterProps) {
  const footerUrl =
    'https://www.ericbuettner.com/?utm_source=' +
    props.website +
    '&utm_medium=link&utm_campaign=crafted-with-heart';

  return (
    <div className="sticky top-[100vh] py-5 text-center text-sm">
      <p>
        Crafted with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        by{' '}
        <UiAnchor
          href={footerUrl}
          content="Eric Büttner"
          title="Eric Büttner"
          target="_blank"
        />
      </p>
    </div>
  );
}

export default UiFooter;
