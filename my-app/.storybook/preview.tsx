import { addDecorator } from "@storybook/react";
import { Theme } from "../src/theme/Theme";

addDecorator((story) => (
  <>
    <Theme>{story()}</Theme>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
