import { render } from '@testing-library/react';

import ProfessionalBiographyShort from './professional-biography-short';

describe('ProfessionalBiographyShort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfessionalBiographyShort />);
    expect(baseElement).toBeTruthy();
  });
});
