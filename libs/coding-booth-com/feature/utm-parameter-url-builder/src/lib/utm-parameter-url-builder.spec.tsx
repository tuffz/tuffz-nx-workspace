import { render } from '@testing-library/react';

import { UtmParameterUrlBuilder } from './utm-parameter-url-builder';

describe('UtmParameterUrlBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtmParameterUrlBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
