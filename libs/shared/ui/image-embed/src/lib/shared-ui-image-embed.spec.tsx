import { render } from '@testing-library/react';

import UiImageEmbed from './shared-ui-image-embed';
import { UiImageEmbedProps } from './shared-ui-image-embed';

describe('UiImageEmbed', () => {
  const defaultProps: UiImageEmbedProps = {
    src: 'image.jpg',
    alt: 'Alternative Text',
  };

  it('renders with required props', () => {
    const { getByAltText } = render(<UiImageEmbed {...defaultProps} />);
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.src);
  });

  it('renders with optional title', () => {
    const customTitle = 'Custom Title';
    const { getByAltText } = render(
      <UiImageEmbed {...defaultProps} title={customTitle} />,
    );
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('title', customTitle);
  });

  it('renders with additional className', () => {
    const customClassName = 'custom-class';
    const { container } = render(
      <UiImageEmbed {...defaultProps} className={customClassName} />,
    );
    const imageElement = container.querySelector('img');
    expect(imageElement).toHaveClass(customClassName);
  });

  it('uses alt as title when title is not provided', () => {
    const { getByAltText } = render(
      <UiImageEmbed {...defaultProps} title={undefined} />,
    );
    const imageElement = getByAltText(defaultProps.alt);
    expect(imageElement).toHaveAttribute('title', defaultProps.alt);
  });
});
