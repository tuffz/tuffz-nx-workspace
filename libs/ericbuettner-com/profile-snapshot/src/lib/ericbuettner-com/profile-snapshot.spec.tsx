import { render } from '@testing-library/react';
import ProfileSnapshot from './profile-snapshot';

describe('ProfileSnapshot', () => {
  it('renders the component with the expected structure and content', () => {
    const { getByAltText } = render(
      <ProfileSnapshot
        first_name="Eric"
        last_name="Büttner"
        latest_job_company="allmyhomes GmbH"
        latest_job_position="Head of Software Engineering"
        location_city="Eberswalde"
        location_state="Brandenburg"
        location_country="Germany"
      />,
    );

    // Check that the image is rendered with the correct attributes
    const image = getByAltText('Portrait of Eric Büttner');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/profile/eric-buettner.jpeg');
    expect(image).toHaveAttribute('alt', 'Portrait of Eric Büttner');
    expect(image).toHaveAttribute('title', 'Portrait of Eric Büttner');
  });
});
