import { render } from '@testing-library/react';
import ProfessionalBiographyShort from './professional-biography-short';

describe('ProfessionalBiographyShort', () => {
  it('renders the component with the expected structure and content', () => {
    const { getByAltText } = render(<ProfessionalBiographyShort />);

    // Check that the image is rendered with the correct attributes
    const image = getByAltText('Portrait of Eric Büttner');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      '/assets/personal-information/eric-buettner.jpeg'
    );
    expect(image).toHaveAttribute('alt', 'Portrait of Eric Büttner');
    expect(image).toHaveAttribute('title', 'Portrait of Eric Büttner');
  });
});
