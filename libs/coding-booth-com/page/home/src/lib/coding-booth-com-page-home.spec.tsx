import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CodingBoothComPageHome } from './coding-booth-com-page-home';

describe('CodingBoothComPageHome', () => {
  test('matches the snapshot', () => {
    const { container } = render(<CodingBoothComPageHome />);
    expect(container).toMatchSnapshot();
  });
});
