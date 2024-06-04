import React, { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export interface IThemeProvider {
    theme: {};
};

const ThemeProvider = ({
    theme
}: PropsWithChildren<IThemeProvider>) => {
    return (
        <StyledThemeProvider theme={theme} >

        </StyledThemeProvider>
    )
}

export default ThemeProvider;