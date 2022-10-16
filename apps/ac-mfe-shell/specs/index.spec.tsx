import { render } from '@testing-library/react';

import Index from '../pages/index.page';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Index title={'hi'} remoteUrl={'https://test.com.br'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
