import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { IntroSection } from './intro-section';

describe('IntroSection', () => {
  test('matches the snapshot', () => {
    const { container } = render(<IntroSection />);
    expect(container).toMatchSnapshot();
  });
});
