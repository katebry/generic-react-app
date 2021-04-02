import { Story, Meta } from "@storybook/react";
import { Button1, Button1Props } from "./Button1";

export default {
  title: "Example/Button1",
  component: Button1,
} as Meta;

const Template: Story<Button1Props> = (args) => <Button1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Button1",
};
