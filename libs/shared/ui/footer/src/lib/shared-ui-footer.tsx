/* eslint-disable-next-line */
export interface SharedUiFooterProps {}

export function SharedUiFooter(props: SharedUiFooterProps) {
  return (
    <div className="sticky top-[100vh] py-5">
      <p className="text-sm text-center">
        Carefully made with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        in{' '}
        <a
          href="https://www.tuffz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tuffz.com
        </a>
      </p>
    </div>
  );
}

export default SharedUiFooter;
