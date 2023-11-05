/* eslint-disable-next-line */
export interface SharedUiAnchorProps {
  href: string;
  content?: string;
  title?: string;
  target?: string;
  rel?: string;
}

export function SharedUiAnchor(props: SharedUiAnchorProps) {
  const title = props.title || props.content || null;

  return (
    <a
      href={props.href}
      {...(title && { title })}
      target={props.target}
      rel={props.rel}
    >
      {props.content}
    </a>
  );
}

export default SharedUiAnchor;
