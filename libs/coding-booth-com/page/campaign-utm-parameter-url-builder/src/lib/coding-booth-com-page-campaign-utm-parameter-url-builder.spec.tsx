import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CodingBoothComPageCampaignUtmParameterUrlBuilder } from './coding-booth-com-page-campaign-utm-parameter-url-builder';

describe('CodingBoothComPageHome', () => {
  test('matches the snapshot', () => {
    const { container } = render(
      <CodingBoothComPageCampaignUtmParameterUrlBuilder />,
    );
    expect(container).toMatchSnapshot();
  });
});
