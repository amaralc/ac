export interface IHeroSectionProps {
  remoteUrl: string;
}

export type IHeroSection = (props: IHeroSectionProps) => JSX.Element;
