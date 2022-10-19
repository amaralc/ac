import Link from 'next/link';
import { StyledHeroSectionCard } from './styles';
import { IHeroSection } from './types';

export const HeroSection: IHeroSection = ({ remoteUrl }) => {
  return (
    <Link href={remoteUrl}>
      <a href={remoteUrl}>
        <StyledHeroSectionCard>
          This information is comming from {remoteUrl}
        </StyledHeroSectionCard>
      </a>
    </Link>
  );
};
