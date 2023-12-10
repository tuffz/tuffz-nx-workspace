import { render } from '@testing-library/react';
import { ProfileInformation } from './profile-information'; // Update the import path as needed

describe('ProfileInformation Component', () => {
  test('renders ProfileInformation component with provided props', () => {
    const props = {
      first_name: 'John',
      last_name: 'Doe',
      latest_job_company: 'ABC Inc.',
      latest_job_position: 'Software Engineer',
      location_city: 'New York',
      location_state: 'NY',
      location_country: 'USA',
    };

    const { getByText } = render(<ProfileInformation {...props} />);

    // Assertions
    const fullName = getByText(`${props.first_name} ${props.last_name}`);
    const jobInfo = getByText(
      `${props.latest_job_position} at ${props.latest_job_company}`,
    );
    const formattedLocation = getByText('New York, NY, USA');

    expect(fullName).toBeInTheDocument();
    expect(jobInfo).toBeInTheDocument();
    expect(formattedLocation).toBeInTheDocument();
  });

  test('renders ProfileInformation component without latest_job_company', () => {
    const props = {
      first_name: 'Jane',
      last_name: 'Smith',
      latest_job_position: 'Product Manager',
      location_city: 'San Francisco',
      location_state: 'CA',
      location_country: 'USA',
    };

    const { getByText, queryByText } = render(
      <ProfileInformation {...props} />,
    );

    // Assertions
    const fullName = getByText(`${props.first_name} ${props.last_name}`);
    const jobPosition = getByText(`${props.latest_job_position}`);
    const formattedLocation = getByText('San Francisco, CA, USA');
    const jobInfo = getByText(`${props.latest_job_position}`);
    const jobCompany = queryByText('at');

    expect(fullName).toBeInTheDocument();
    expect(jobPosition).toBeInTheDocument();
    expect(formattedLocation).toBeInTheDocument();
    expect(jobInfo).toBeInTheDocument();
    expect(jobCompany).toBeNull();
  });
});
