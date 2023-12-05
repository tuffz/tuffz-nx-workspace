import { render } from '@testing-library/react';

import CareerTimeline from './career-timeline';

describe('CareerTimeline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CareerTimeline />);
    expect(baseElement).toBeTruthy();
  });
});
