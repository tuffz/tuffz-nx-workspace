import { render } from '@testing-library/react';
import ProfileSnapshot from './profile-snapshot';

describe('ProfileSnapshot Component', () => {
  const mockProps = {
    first_name: 'John',
    last_name: 'Doe',
    latest_job_position: 'Software Engineer',
    latest_job_company: 'ABC Inc',
    location_city: 'New York',
    location_state: 'NY',
    location_country: 'USA',
  };

  it('renders components correctly', () => {
    render(<ProfileSnapshot {...mockProps} />);

    expect(document.querySelector('.profile-image')).toBeInTheDocument();
    expect(document.querySelector('.profile-information')).toBeInTheDocument();
    expect(document.querySelector('.social-media-links')).toBeInTheDocument();
  });
});
