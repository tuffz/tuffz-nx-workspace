import { render } from '@testing-library/react';

import SharedUiFooter from './shared-ui-footer';

describe('SharedUiFooter', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<SharedUiFooter />);

    // Check that the component renders without errors
    expect(baseElement).toBeInTheDocument();
  });
});

describe('SharedUiFooter contains the tuffz.com link', () => {
  const { getByText } = render(<SharedUiFooter />);

  // Check that the "tuffz.com" link is present
  const link = getByText('tuffz.com');
  expect(link).toBeInTheDocument();

  // Check that the link has the correct attributes
  expect(link).toHaveAttribute('href', 'https://www.tuffz.com');
  expect(link).toHaveAttribute('title', 'tuffz.com');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
