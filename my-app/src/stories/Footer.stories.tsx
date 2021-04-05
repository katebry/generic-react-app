import { Story, Meta } from "@storybook/react";
import { Footer, FooterProps } from "./Footer";
import { IconType } from "./IconMap";

export default {
  title: "Example/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mainText: 'A string with some stuff in',
  subText: 'Some more string stuff',
  iconRef: IconType.COPYRIGHT
};
