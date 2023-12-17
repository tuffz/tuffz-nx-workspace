import { ProfileImage } from './profile-image';
import { render } from '@testing-library/react';

describe('ProfileImage Component', () => {
  test('renders ProfileImage component with given props', () => {
    const imageUrl = 'https://www.ericbuettner.com/profile/ericbuettner.jpg';
    const altText = 'alternative text';

    const { getByAltText } = render(
      <ProfileImage src={imageUrl} alt={altText} />,
    );

    const imageElement = getByAltText(altText);

    // Assertions
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageUrl);
    expect(imageElement).toHaveAttribute('alt', altText);
  });
});
