import { render, screen } from '@testing-library/react';

import { SharedUiFooter, SharedUiFooterProps } from './shared-ui-footer';
import { Website } from './website.enum';

// Mock the UiAnchor component
jest.mock('@tuffz/ui-anchor', () => ({
  UiAnchor: ({ href, content }: { href: string; content: string }) => (
    <a href={href}>{content}</a>
  ),
}));

describe('SharedUiFooter', () => {
  const website: Website = Website.CODINGBOOTHCOM;

  const mockProps: SharedUiFooterProps = { website };

  it('should renders footer with correct content', () => {
    render(<SharedUiFooter {...mockProps} />);

    // Find the span element with the aria-label "Heart"
    const heartIcon = screen.getByLabelText('Heart');

    // Check if the heart icon is found
    expect(heartIcon).toBeInTheDocument();

    // Find the paragraph containing the text
    const footerText = screen.getByText(/Crafted with/);

    // Check if the paragraph text is found
    expect(footerText).toBeInTheDocument();

    // Check if the anchor element is found with the correct href attribute
    const anchorElement = screen.getByText('Eric Büttner') as HTMLAnchorElement;
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute(
      'href',
      `https://www.ericbuettner.com/?utm_source=${website}&utm_medium=link&utm_campaign=crafted-with-heart`,
    );
  });
});
