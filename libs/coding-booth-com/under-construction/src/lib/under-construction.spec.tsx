import { render, screen } from '@testing-library/react';
import { UnderConstruction } from './under-construction';

describe('UnderConstruction', () => {
  test('renders UnderConstruction component', () => {
    const { baseElement } = render(<UnderConstruction />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByText(
        'Exciting updates are on the way! Stay tuned as we build something amazing for you.',
      ),
    ).toBeInTheDocument();
  });

  test('displays the welcome image', () => {
    render(<UnderConstruction />);
    const title = 'Welcome at Coding Booth';
    const image = screen.getByAltText(title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'assets/welcome.png');
    expect(image).toHaveAttribute('title', title);
  });
});
