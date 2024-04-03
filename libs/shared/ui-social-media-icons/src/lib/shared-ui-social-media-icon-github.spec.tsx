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

describe('SharedUiSocialMediaIcons - GitHub', () => {
  it('should renders with "www" Subdomain icon with correct props', () => {
    const props = {
      size: 24,
      url: 'https://www.github.com/tuffz',
    };

    render(<SharedUiSocialMediaIcons {...props} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('href', props.url);
    expect(anchorElement).toHaveAttribute('title', 'GitHub');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'nofollow');

    const iconElement = screen.getByTestId('social-media-icon');
    expect(iconElement).toBeInTheDocument();

    // Access the title content within the SVG element
    const titleElement = iconElement.querySelector('title');
    expect(titleElement).toHaveTextContent('GitHub');
  });

  it('should renders WITHOUT subdomain icon with correct props', () => {
    const props = {
      size: 24,
      url: 'https://github.com/tuffz',
    };

    render(<SharedUiSocialMediaIcons {...props} />);

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toHaveAttribute('href', props.url);
    expect(anchorElement).toHaveAttribute('title', 'GitHub');
    expect(anchorElement).toHaveAttribute('target', '_blank');
    expect(anchorElement).toHaveAttribute('rel', 'nofollow');

    const iconElement = screen.getByTestId('social-media-icon');
    expect(iconElement).toBeInTheDocument();

    // Access the title content within the SVG element
    const titleElement = iconElement.querySelector('title');
    expect(titleElement).toHaveTextContent('GitHub');
  });
});
