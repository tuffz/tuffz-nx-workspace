import { render } from '@testing-library/react';

import { CodingBoothComPageHome } from './coding-booth-com-page-home';

describe('CodingBoothComPageHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodingBoothComPageHome />);
    expect(baseElement).toBeTruthy();
  });
});
