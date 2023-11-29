import { render } from '@testing-library/react';

import UiSocialMediaIcons from './ui-social-media-icons';

describe('UiSocialMediaIcons', () => {
  it('GitHub should render successfully', () => {
    const { baseElement } = render(
      <UiSocialMediaIcons url="http://github.com/tuffz" />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('GitLab should render successfully', () => {
    const { baseElement } = render(
      <UiSocialMediaIcons url="http://gitlab.com/tuffz" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
