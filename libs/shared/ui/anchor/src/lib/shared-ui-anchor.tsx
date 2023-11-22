export interface SharedUiAnchorProps {
  href: string;
  content?: string;
  title?: string;
  target?: string;
  rel?: string;
}

/**
 * Sets the 'rel' attribute for an anchor tag based on the provided props.
 *
 * @param props - The anchor tag properties.
 * @returns The 'rel' attribute value.
 */
export function setRelAttribute(props: SharedUiAnchorProps): string | null {
  let relAttributeValue: string | null = null;

  if (props.target === '_blank') {
    relAttributeValue = 'noopener noreferrer';
  }

  if (props.rel) {
    if (relAttributeValue) {
      const relArray = relAttributeValue.split(' ');
      const propsRelArray = props.rel.split(' ');

      // Remove 'noopener' and 'noreferrer' from relArray
      const filteredPropsRelArray = propsRelArray.filter(
        (part) => part !== 'noopener' && part !== 'noreferrer',
      );

      // Merge propsRelArray with relArray and set rel
      relAttributeValue = [...filteredPropsRelArray, ...relArray].join(' ');
    } else {
      relAttributeValue = props.rel;
    }
  }

  return relAttributeValue;
}

/**
 * A shared anchor tag component with customizable attributes.
 *
 * @param props - The anchor tag properties.
 * @returns The anchor tag element.
 */
export function SharedUiAnchor(props: SharedUiAnchorProps) {
  const title = props.title || props.content || null;
  const rel = setRelAttribute(props);

  return (
    <a
      href={props.href}
      {...(title && { title })}
      target={props.target}
      {...(rel && { rel })}
    >
      {props.content}
    </a>
  );
}

export default SharedUiAnchor;
