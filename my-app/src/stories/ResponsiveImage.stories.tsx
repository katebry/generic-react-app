import { Story, Meta } from "@storybook/react";
import { ResponsiveImage, ResponsiveImageProps } from "./ResponsiveImage";
import { IconType } from "./IconMap";

export default {
  title: "Example/ResponsiveImage",
  component: ResponsiveImage,
} as Meta;

const Template: Story<ResponsiveImageProps> = (args) => <ResponsiveImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://images.unsplash.com/photo-1620750722956-eff01b8db791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
};
