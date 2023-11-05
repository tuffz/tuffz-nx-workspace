/* eslint-disable-next-line */
export interface SharedUiAnchorProps {
  href: string;
  content?: string;
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
      {props.content}
    </a>
  );
}

export default SharedUiAnchor;
