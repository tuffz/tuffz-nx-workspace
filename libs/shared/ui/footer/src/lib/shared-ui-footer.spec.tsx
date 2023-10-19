import { render } from '@testing-library/react';

import SharedUiFooter from './shared-ui-footer';

describe('SharedUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
