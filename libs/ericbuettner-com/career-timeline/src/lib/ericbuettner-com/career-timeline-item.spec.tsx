import { render } from '@testing-library/react';

import { CareerTimelineItem } from './career-timeline-item';

const input = {
  position: 'Software Engineer',
  company: 'Example Inc',
  date_start: new Date('May, 2021'),
  date_end: new Date('Oct, 2023'),
  location: 'BERLIN_GERMANY',
};

describe('CareerTimelineItem', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CareerTimelineItem {...input} />);

    expect(getByText(input.position)).toBeInTheDocument();
    expect(getByText(input.company)).toBeInTheDocument();
    expect(getByText('May 2021 - Oct 2023'));
    expect(getByText('Berlin, Berlin, Germany')).toBeInTheDocument();
  });
});
