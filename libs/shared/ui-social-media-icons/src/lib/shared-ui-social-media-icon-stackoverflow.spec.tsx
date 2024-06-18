import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SharedUiSocialMediaIcons } from './shared-ui-social-media-icons';

// Mock the SharedUiAnchor component
jest.mock('@tuffz/shared-ui-anchor', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SharedUiAnchor: ({ href, title, target, rel, content }: any) => (
    <a href={href} title={title} target={target} rel={rel}>
      {content}
    </a>
  ),
}));

describe('SharedUiSocialMediaIcons - Stack Overflow', () => {
  it('should renders with "www" Subdomain icon with correct props', () => {
    const props = {
      size: 24,
      url: 'https://stackoverflow.com/users/2745844/eric-b%C3%BCttner',
    };

    render(<SharedUiSocialMediaIcons {...props} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('href', props.url);
    expect(anchorElement).toHaveAttribute('title', 'StackOverflow');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'nofollow');

    const iconElement = screen.getByTestId('social-media-icon');
    expect(iconElement).toBeInTheDocument();

    // Access the title content within the SVG element
    const titleElement = iconElement.querySelector('title');
    expect(titleElement).toHaveTextContent('Stack Overflow');
  });

  it('should renders WITHOUT "www" Subdomain icon with correct props', () => {
    const props = {
      size: 24,
      url: 'https://stackoverflow.com/users/2745844/eric-b%C3%BCttner',
    };

    render(<SharedUiSocialMediaIcons {...props} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('href', props.url);
    expect(anchorElement).toHaveAttribute('title', 'StackOverflow');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'nofollow');

    const iconElement = screen.getByTestId('social-media-icon');
    expect(iconElement).toBeInTheDocument();

    // Access the title content within the SVG element
    const titleElement = iconElement.querySelector('title');
    expect(titleElement).toHaveTextContent('Stack Overflow');
  });
});
