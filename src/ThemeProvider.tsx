'use client';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { Theme, TemplateThemes } from './types';
import isObject from 'lodash/isObject';
import { themes } from './themes';

export interface IThemeProvider {
    theme: TemplateThemes | Theme;
    themeOverrides?: Theme;
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: ${({ theme }) => theme?.typography?.p?.fontFamily || 'sans-serif'};
    background-color: ${({ theme }) => theme?.colors?.background || '#ffffff'};
    color: ${({ theme }) => theme?.colors?.text || '#000000'};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({theme}) => theme?.colors?.text};
  }

  h1 {
    font-size: ${({ theme }) => theme?.typography?.h1?.fontSize || '2rem'};
    font-weight: ${({ theme }) => theme?.typography?.h1?.fontWeight || 700};
    line-height: ${({ theme }) => theme?.typography?.h1?.lineHeight || '1.2'};
    margin: ${({ theme }) => theme?.typography?.h1?.margin || '0 0 1rem 0'};
  }

  h2 {
    font-size: ${({ theme }) => theme?.typography?.h2?.fontSize || '1.75rem'};
    font-weight: ${({ theme }) => theme?.typography?.h2?.fontWeight || 600};
    line-height: ${({ theme }) => theme?.typography?.h2?.lineHeight || '1.3'};
    margin: ${({ theme }) => theme?.typography?.h2?.margin || '0 0 1rem 0'};
  }

  /* Add similar styles for h3, h4, h5, h6, p, and other elements as needed */

  button {
    padding: ${({ theme }) => theme?.buttons?.primary?.padding || '0.75rem 1.25rem'};
    margin: ${({ theme }) => theme?.buttons?.primary?.margin || '0.5rem 0'};
    border: ${({ theme }) => theme?.buttons?.primary?.border || 'none'};
    border-radius: ${({ theme }) => theme?.buttons?.primary?.borderRadius || '0.25rem'};
    font-size: ${({ theme }) => theme?.buttons?.primary?.fontSize || '1rem'};
    font-weight: ${({ theme }) => theme?.buttons?.primary?.fontWeight || 600};
    cursor: ${({ theme }) => theme?.buttons?.primary?.cursor || 'pointer'};
    background-color: ${({ theme }) => theme?.buttons?.primary?.backgroundColor || '#007BFF'};
    color: ${({ theme }) => theme?.buttons?.primary?.color || '#ffffff'};

    &:hover {
      background-color: ${({ theme }) => theme?.buttons?.primary?.hover?.backgroundColor || '#0056b3'};
      color: ${({ theme }) => theme?.buttons?.primary?.hover?.color || '#ffffff'};
    }

    &:active {
      background-color: ${({ theme }) => theme?.buttons?.primary?.active?.backgroundColor || '#004085'};
      color: ${({ theme }) => theme?.buttons?.primary?.active?.color || '#ffffff'};
    }
  }

  input, textarea, select {
    padding: ${({ theme }) => theme?.inputs?.text?.padding || '0.5rem'};
    margin: ${({ theme }) => theme?.inputs?.text?.margin || '0.5rem 0'};
    border: ${({ theme }) => theme?.inputs?.text?.border || '1px solid #ced4da'};
    border-radius: ${({ theme }) => theme?.inputs?.text?.borderRadius || '0.25rem'};
    font-size: ${({ theme }) => theme?.inputs?.text?.fontSize || '1rem'};
    font-weight: ${({ theme }) => theme?.inputs?.text?.fontWeight || 400};

    &:focus {
      border-color: ${({ theme }) => theme?.inputs?.text?.focus?.borderColor || '#80bdff'};
      outline: ${({ theme }) => theme?.inputs?.text?.focus?.outline || 'none'};
      box-shadow: ${({ theme }) => theme?.inputs?.text?.focus?.boxShadow || '0 0 0 0.2rem rgba(0,123,255,.25)'};
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