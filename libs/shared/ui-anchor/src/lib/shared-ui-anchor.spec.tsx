import { render } from '@testing-library/react';

import {
  SharedUiAnchor,
  SharedUiAnchorProps,
  setRelAttribute,
} from './shared-ui-anchor';

describe('SharedUiAnchor', () => {
  it('renders a link with the provided href and title', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" title="DummyTitle" />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.tuffz.com');
    expect(link).toHaveAttribute('title', 'DummyTitle');
  });

  it('renders the provided dummy content', () => {
    const { getByText } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        content="DummyContent"
        title="DummyTitle"
      />,
    );
    const link = getByText('DummyContent');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('title', 'DummyTitle');
  });

  it('renders the target attribute', () => {
    const { getByRole } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        title="DummyTitle"
        target="_blank"
      />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('title', 'DummyTitle');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders the provided rel attribute', () => {
    const { getByRole } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        title="DummyTitle"
        rel="nofollow"
      />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('rel', 'nofollow');
  });

  it('renders the rel attribute for _blank target', () => {
    const { getByRole } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        title="DummyTitle"
        target="_blank"
      />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the provided rel and the rel attribute for _blank target', () => {
    const { getByRole } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        title="DummyTitle"
        target="_blank"
        rel="nofollow"
      />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('rel', 'nofollow noopener noreferrer');
  });

  it('renders the provided rel and the rel attribute for _blank target and makes sure that the rel attributes for _blank are not doubled in rel', () => {
    const { getByRole } = render(
      <SharedUiAnchor
        href="https://www.tuffz.com"
        title="DummyTitle"
        target="_blank"
        rel="noopener"
      />,
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not render the rel attribute for non-_blank target', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" title="DummyTitle" />,
    );
    const link = getByRole('link');
    expect(link).not.toHaveAttribute('rel');
  });
});

describe('setRelAttribute', () => {
  it('sets rel attribute to "noopener noreferrer" when target is "_blank"', () => {
    const props: SharedUiAnchorProps = {
      href: 'https://www.tuffz.info',
      title: 'DummyTitle',
      target: '_blank',
    };
    let rel: string | null = null;

    rel = setRelAttribute(props);

    expect(rel).toBe('noopener noreferrer');
  });

  it('merges props.rel with rel when target is "_blank" and props.rel is defined', () => {
    const props: SharedUiAnchorProps = {
      href: 'https://www.tuffz.info',
      title: 'DummyTitle',
      target: '_blank',
      rel: 'nofollow',
    };
    let rel: string | null = null;

    rel = setRelAttribute(props);

    expect(rel).toBe('nofollow noopener noreferrer');
  });

  it('sets rel attribute to props.rel when target is not "_blank"', () => {
    const props: SharedUiAnchorProps = {
      href: 'https://www.tuffz.info',
      title: 'DummyTitle',
      rel: 'nofollow',
    };
    let rel: string | null = null;

    rel = setRelAttribute(props);

    expect(rel).toBe('nofollow');
  });
});
