import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { Theme, TemplateThemes } from './types';
import isObject from 'lodash/isObject';
import { themes } from './themes';

export interface IThemeProvider {
    theme: TemplateThemes | Theme;
    themeOverrides: Theme;
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: ${({ theme }) => theme.typography.p.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    margin: ${({ theme }) => theme.typography.h1.margin};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.h2.lineHeight};
    margin: ${({ theme }) => theme.typography.h2.margin};
  }

  /* Add similar styles for h3, h4, h5, h6, p, and other elements as needed */

  button {
    padding: ${({ theme }) => theme.buttons.primary.padding};
    margin: ${({ theme }) => theme.buttons.primary.margin};
    border: ${({ theme }) => theme.buttons.primary.border};
    border-radius: ${({ theme }) => theme.buttons.primary.borderRadius};
    font-size: ${({ theme }) => theme.buttons.primary.fontSize};
    font-weight: ${({ theme }) => theme.buttons.primary.fontWeight};
    cursor: ${({ theme }) => theme.buttons.primary.cursor};
    background-color: ${({ theme }) => theme.buttons.primary.backgroundColor};
    color: ${({ theme }) => theme.buttons.primary.color};

    &:hover {
      background-color: ${({ theme }) => theme.buttons.primary.hover.backgroundColor};
      color: ${({ theme }) => theme.buttons.primary.hover.color};
    }

    &:active {
      background-color: ${({ theme }) => theme.buttons.primary.active.backgroundColor};
      color: ${({ theme }) => theme.buttons.primary.active.color};
    }
  }

  input, textarea, select {
    padding: ${({ theme }) => theme.inputs.text.padding};
    margin: ${({ theme }) => theme.inputs.text.margin};
    border: ${({ theme }) => theme.inputs.text.border};
    border-radius: ${({ theme }) => theme.inputs.text.borderRadius};
    font-size: ${({ theme }) => theme.inputs.text.fontSize};
    font-weight: ${({ theme }) => theme.inputs.text.fontWeight};

    &:focus {
      border-color: ${({ theme }) => theme.inputs.text.focus.borderColor};
      outline: ${({ theme }) => theme.inputs.text.focus.outline};
      box-shadow: ${({ theme }) => theme.inputs.text.focus.boxShadow};
    }
  }
`;

const ThemeProvider = ({
    theme,
    children
}: PropsWithChildren<IThemeProvider>) => {
    const selectedTheme: Theme = isObject(theme) ? theme : themes[theme];

    return (
        <StyledThemeProvider theme={selectedTheme} >
            <GlobalStyle theme={selectedTheme} />
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider;