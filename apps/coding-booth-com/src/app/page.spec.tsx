import { render } from '@testing-library/react';

import IndexPage from './page';

describe('IndexPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IndexPage />);
    expect(baseElement).toBeTruthy();
  });
});
