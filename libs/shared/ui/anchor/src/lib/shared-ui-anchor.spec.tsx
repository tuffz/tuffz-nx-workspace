import { render } from '@testing-library/react';

import SharedUiAnchor from './shared-ui-anchor';

describe('SharedUiAnchor', () => {
  it('renders a link with the provided href', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.tuffz.com');
  });

  it('renders the provided content text', () => {
    const { getByText } = render(
      <SharedUiAnchor href="https://www.tuffz.com" content="Link Text" />
    );
    const link = getByText('Link Text');
    expect(link).toBeInTheDocument();
  });

  it('renders the provided title attribute', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" title="Link Title" />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('title', 'Link Title');
  });

  it('renders the target attribute', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" target="_blank" />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders the provided rel attribute', () => {
    const { getByRole } = render(
      <SharedUiAnchor href="https://www.tuffz.com" rel="nofollow" />
    );
    const link = getByRole('link');
    expect(link).toHaveAttribute('rel', 'nofollow');
  });
});
