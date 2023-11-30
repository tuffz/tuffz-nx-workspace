import React, { ReactNode } from 'react';

export interface SharedUiAnchorProps {
  href: string;
  content?: ReactNode | string;
  title: string;
  target?: string;
  rel?: string;
}

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

export function SharedUiAnchor(props: SharedUiAnchorProps) {
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
