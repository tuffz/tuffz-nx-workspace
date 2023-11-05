import { render } from '@testing-library/react';

import SharedUiImageEmbed from './shared-ui-image-embed';
import { SharedUiImageEmbedProps } from './shared-ui-image-embed';

describe('SharedUiImageEmbed', () => {
  const defaultProps: SharedUiImageEmbedProps = {
    src: 'image.jpg',
    alt: 'Alternative Text',
    title: 'Image Title',
    className: 'image-class',
  };

  it('renders the image with correct attributes', () => {
    const { getByAltText } = render(<SharedUiImageEmbed {...defaultProps} />);

    const image = getByAltText('Alternative Text');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'image.jpg');
    expect(image).toHaveAttribute('title', 'Image Title');
    expect(image).toHaveClass('image-class');
  });

  it('renders the image without a title and class when not provided', () => {
    const { getByAltText, queryByTitle, queryByTestId } = render(
      <SharedUiImageEmbed src="image.jpg" alt="Alternative Text" />
    );

    const image = getByAltText('Alternative Text');
    expect(image).toBeInTheDocument();
    expect(queryByTitle('Image Title')).not.toBeInTheDocument();
    expect(queryByTestId('image-class')).toBeNull();
  });
});
