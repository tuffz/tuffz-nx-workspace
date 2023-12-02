import { render } from '@testing-library/react';

import UiFooter from './ui-footer';

describe('UiFooter', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<UiFooter />);

    // Check that the component renders without errors
    expect(baseElement).toBeInTheDocument();
  });
});

describe('UiFooter contains the ericbuettner.com link', () => {
  const { getByText } = render(<UiFooter />);

  // Check that the "ericbuettner.com" link is present
  const link = getByText('Eric Büttner');
  expect(link).toBeInTheDocument();

  // Check that the link has the correct attributes
  expect(link).toHaveAttribute('href', 'https://www.ericbuettner.com');
  expect(link).toHaveAttribute('title', 'Eric Büttner');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
