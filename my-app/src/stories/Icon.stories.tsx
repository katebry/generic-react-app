import { Story, Meta } from "@storybook/react";
import { Icon, IconProps } from "./Icon";
import { IconType } from "./IconMap";

export default {
  title: "Example/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = () => <Icon iconRef={IconType.CART} />;

export const Primary = Template.bind({});
Primary.args = {
  iconRef: IconType.CART,
};

