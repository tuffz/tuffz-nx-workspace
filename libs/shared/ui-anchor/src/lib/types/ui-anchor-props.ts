import { ReactNode } from 'react';

export interface UiAnchorProps {
  href: string;
  content?: ReactNode | string;
  title: string;
  target?: string;
  rel?: string;
}
