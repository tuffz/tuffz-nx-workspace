import { render } from '@testing-library/react';

import {
  SharedUiImageEmbed,
  SharedUiImageEmbedProps,
} from './shared-ui-image-embed';

describe('SharedUiImageEmbed', () => {
  const defaultProps: SharedUiImageEmbedProps = {
    src: 'image.jpg',
    alt: 'Alternative Text',
  };

  it('renders with required props', () => {
    const { getByAltText } = render(<SharedUiImageEmbed {...defaultProps} />);
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.src);
  });

  it('renders with optional title', () => {
    const customTitle = 'Custom Title';
    const { getByAltText } = render(
      <SharedUiImageEmbed {...defaultProps} title={customTitle} />,
    );
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('title', customTitle);
  });

  it('renders with additional className', () => {
    const customClassName = 'custom-class';
    const { container } = render(
      <SharedUiImageEmbed {...defaultProps} className={customClassName} />,
    );
    const imageElement = container.querySelector('img');
    expect(imageElement).toHaveClass(customClassName);
  });

  it('uses alt as title when title is not provided', () => {
    const { getByAltText } = render(
      <SharedUiImageEmbed {...defaultProps} title={undefined} />,
    );
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toHaveAttribute('title', defaultProps.alt);
  });
});
