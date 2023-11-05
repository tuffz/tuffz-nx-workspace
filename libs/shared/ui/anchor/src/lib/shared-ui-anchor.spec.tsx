import { render } from '@testing-library/react';

import SharedUiAnchor from './shared-ui-anchor';

describe('SharedUiAnchor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiAnchor />);
    expect(baseElement).toBeTruthy();
  });
});
