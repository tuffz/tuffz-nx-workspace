import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { PageHome } from './page-home';

describe('PageHome', () => {
  test('matches the snapshot', () => {
    const { container } = render(<PageHome />);
    expect(container).toMatchSnapshot();
  });
});
