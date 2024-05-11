import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CharacterCounter } from './character-counter';

jest.mock('./intro-section', () => ({
  IntroSection: () => <div data-testid="intro-section">IntroSection</div>,
}));
jest.mock('./character-counter-textarea', () => ({
  CharacterCounterTextarea: () => (
    <div data-testid="character-counter-textarea">CharacterCounterTextarea</div>
  ),
}));

describe('CharacterCounter', () => {
  test('renders intro section and character counter textarea', () => {
    // Arrange
    const { getByTestId } = render(<CharacterCounter />);

    // Act
    const introSection = getByTestId('intro-section');
    const characterCounterTextarea = getByTestId('character-counter-textarea');

    // Assert
    expect(introSection).toBeInTheDocument();
    expect(characterCounterTextarea).toBeInTheDocument();
  });
});
