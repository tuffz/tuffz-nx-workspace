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

describe('SharedUiSocialMediaIcons - Unknown', () => {
  it('not render social media icon for unknown URL', () => {
    const props = {
      size: 24,
      url: 'https://www.example.com',
    };

    render(<SharedUiSocialMediaIcons {...props} />);

    // Ensure anchor element is not rendered
    expect(screen.queryByRole('link')).toBeNull();

    // Ensure UiSocialMediaIcon is not rendered
    expect(screen.queryByTestId('social-media-icon')).toBeNull();
  });
});
