import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { CharacterCounterTextarea } from './character-counter-textarea';

describe('CharacterCounterTextarea', () => {
  it('updates character count when typing', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <CharacterCounterTextarea />,
    );
    const textarea = getByPlaceholderText(/Type or paste your content here/i);

    fireEvent.change(textarea, { target: { value: 'Hello, world!' } });
    expect(getByTestId('char-count').textContent).toBe('13');

    fireEvent.change(textarea, {
      target: { value: 'This is a test with more words' },
    });
    expect(getByTestId('char-count').textContent).toBe('30');

    fireEvent.change(textarea, {
      target: {
        value: 'This is a test with more words to validate the counter',
      },
    });
    expect(getByTestId('char-count').textContent).toBe('54');
  });
});
