import { render } from '@testing-library/react';

import NotFoundPage from './not-found';

describe('NotFoundPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFoundPage />);
    expect(baseElement).toBeTruthy();
  });
});
