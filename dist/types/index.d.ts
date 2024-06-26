import React from 'react';
import { Theme, TemplateThemes } from './types';
export declare const GlobalStyle: React.NamedExoticComponent<import("styled-components").ExecutionProps & {
    theme: Theme;
    overrides: Partial<Theme['colors']>;
}>;
export declare const fetchDefaultTheme: (theme: TemplateThemes | Theme) => Theme;
export { FontPickerSchema } from './payload/blocks/FontPicker/schema';
