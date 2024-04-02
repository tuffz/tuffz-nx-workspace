import { render } from '@testing-library/react';

import { SharedUiSocialMediaIcons } from './shared-ui-social-media-icons';

describe('SharedUiSocialMediaIcons', () => {
  it('GitHub should render successfully', () => {
    const { baseElement } = render(
      <SharedUiSocialMediaIcons url="http://github.com/tuffz" />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('GitLab should render successfully', () => {
    const { baseElement } = render(
      <SharedUiSocialMediaIcons url="http://gitlab.com/tuffz" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
