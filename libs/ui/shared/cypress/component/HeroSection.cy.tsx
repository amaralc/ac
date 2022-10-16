import { HeroSection } from '../../../shared/src/components/HeroSection';

describe('HeroSection.cy.ts', () => {
  it('should navigate user to remote', () => {
    cy.viewport(1800, 720);
    const remoteUrl = 'http://localhost:4200';
    cy.mount(<HeroSection remoteUrl={remoteUrl} />);
    cy.get('a').invoke('attr', 'href').should('eq', remoteUrl);
  });
});
