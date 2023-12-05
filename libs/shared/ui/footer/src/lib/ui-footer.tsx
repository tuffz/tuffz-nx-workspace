import { UiAnchor } from '@tuffz/shared/ui/anchor';

/* eslint-disable-next-line */
export interface UiFooterProps {}

export function UiFooter(props: UiFooterProps) {
  return (
    <div className="sticky top-[100vh] py-5 text-sm text-center">
      <p>
        Crafted with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        by{' '}
        <UiAnchor
          href="https://www.ericbuettner.com/?utm_source=ericbuettner-com&utm_medium=link&utm_campaign=crafted-with-heart"
          content="Eric Büttner"
          title="Eric Büttner"
          target="_blank"
        />
      </p>
    </div>
  );
}

export default UiFooter;
