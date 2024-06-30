
import { UiAnchorProps } from './types/ui-anchor-props';

export function setRelAttribute(props: UiAnchorProps): string | null {
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

export function SharedUiAnchor(props: UiAnchorProps) {
  const rel = setRelAttribute(props);

  return (
    <a
      href={props.href}
      title={props.title}
      target={props.target}
      {...(rel && { rel })}
    >
      {props.content}
    </a>
  );
}

export default SharedUiAnchor;
