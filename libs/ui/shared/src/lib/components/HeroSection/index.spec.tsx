import { render } from '@testing-library/react';

import { HeroSection } from '.';

describe('UiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroSection />);
    expect(baseElement).toBeTruthy();
  });
});
