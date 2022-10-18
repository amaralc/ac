import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeroSection } from '.';
import { heroSectionPropsMock } from './mocks';

const Story: ComponentMeta<typeof HeroSection> = {
  component: HeroSection,
  title: 'HeroSection',
};
export default Story;

const Template: ComponentStory<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...heroSectionPropsMock,
};
