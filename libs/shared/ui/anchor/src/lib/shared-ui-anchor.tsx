/* eslint-disable-next-line */
export interface SharedUiAnchorProps {
  href: string;
  body?: string;
  title?: string;
  target?: string;
  rel?: string;
}

export function SharedUiAnchor(props: SharedUiAnchorProps) {
  return (
    <a
      href={props.href}
      title={props.title}
      target={props.target}
      rel={props.rel}
    >
      {props.body}
    </a>
  );
}

export default SharedUiAnchor;
