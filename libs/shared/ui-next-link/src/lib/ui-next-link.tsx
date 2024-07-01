import Link from 'next/link';

import { UiNextLinkProps } from './types/ui-next-link-props';

export function setRelAttribute(props: UiNextLinkProps): string | null {
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

export function UiNextLink(props: UiNextLinkProps) {
  const rel = setRelAttribute(props);

  return (
    <Link
      href={props.href}
      title={props.title}
      target={props.target}
      {...(rel && { rel })}
    >
      {props.content}
    </Link>
  );
}
