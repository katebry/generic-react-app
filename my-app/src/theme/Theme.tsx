import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  children: React.ReactNode;
}

const theme = {
    colours: {
        primary: '#ABA9BF',
        secondary: '#BEB7DF',
        tertiary: '#D4F2D2',
        primaryDary: '#868784',
        secondaryDark: '#34113F',
    },
    font: {}
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
