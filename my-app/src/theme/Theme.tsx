import React from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  children: React.ReactNode;
}

export const theme = {
    colours: {
        primary: '#ABA9BF',
        secondary: '#BEB7DF',
        tertiary: '#D4F2D2',
        primaryDary: '#868784',
        secondaryDark: '#34113F',
    },
    font: {
        xsmall: '14px',
        small: '18px',
        medium: '24px',
        large: '32px',
        xlarge: '48px',
    },
    spacing: {
        padding: '10px',
    },
    general: {
        'border-radius': '4px',
        border: '1px solid #D4F2D2',
        margin: '15px'
    }

}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
