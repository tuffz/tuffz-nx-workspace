import { render } from '@testing-library/react';

import { SocialMediaLinks } from './social-media-links';

describe('SocialMediaLinks Component', () => {
  const socialLinks = [
    { url: 'https://github.com/tuffz' },
    { url: 'https://gitlab.com/tuffz' },
    { url: 'https://www.linkedin.com/in/eric-buettner/' },
    { url: 'https://twitter.com/tuffzCOM' },
  ];

  it('renders social media icons with correct links', () => {
    const { getAllByRole } = render(
      <SocialMediaLinks socialMediaLinks={socialLinks} />,
    );
    const socialIcons = getAllByRole('link');

    expect(socialIcons.length).toBe(socialLinks.length);

    socialIcons.forEach((icon, index) => {
      expect(icon).toHaveAttribute('href', socialLinks[index].url);
    });
  });
});
