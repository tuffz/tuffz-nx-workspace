import { render } from '@testing-library/react';

import { CharacterCounter } from './character-counter';

describe('CharacterCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterCounter />);
    expect(baseElement).toBeTruthy();
  });
});
