import { UiAnchor } from '@tuffz/shared/ui/anchor';

/* eslint-disable-next-line */
export interface UiFooterProps {}

export function UiFooter(props: UiFooterProps) {
  return (
    <div className="sticky top-[100vh] py-5">
      <p className="text-sm text-center">
        Carefully made with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        by{' '}
        <UiAnchor
          href="https://www.tuffz.com"
          content="tuffz.com"
          title="tuffz.com"
          target="_blank"
        />
      </p>
    </div>
  );
}

export default UiFooter;
