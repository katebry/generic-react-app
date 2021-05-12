import { Story, Meta } from "@storybook/react";
import { ProgressIndicator, ProgressIndicatorProps } from "./ProgressIndicator";

export default {
  title: "Example/ProgressIndicator",
  component: ProgressIndicator,
} as Meta;

const Template: Story<ProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  totalPages: 10
};
