import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { Theme } from "../theme/Theme";

const customRender = (component: any) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={Theme}>{component}</ThemeProvider>
    </MemoryRouter>
  );
};

export { customRender as render };
