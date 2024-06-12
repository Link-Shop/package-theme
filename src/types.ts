export interface Colors {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    text: string;
    success: string;
    error: string;
    warning?: string;
};

export interface Typography {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number | string;
    lineHeight?: string;
    margin?: string;
}

export interface ButtonStyles {
    backgroundColor?: string;
    color?: string;
    padding?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: number | string;
    cursor?: string;
    hover?: {
        backgroundColor?: string;
        color?: string;
    };
    active?: {
        backgroundColor?: string;
        color?: string;
    };
}

export interface InputStyles {
    padding?: string;
    margin?: string;
    border?: string;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: number | string;
    focus?: {
        borderColor?: string;
        outline?: string;
        boxShadow?: string;
    };
}

export interface Theme {
    typography?: {
        h1?: Typography;
        h2?: Typography;
        h3?: Typography;
        h4?: Typography;
        h5?: Typography;
        h6?: Typography;
        p?: Typography;
        other?: Typography;
    };
    buttons?: {
        primary?: ButtonStyles;
        secondary?: ButtonStyles;
        link?: ButtonStyles;
    };
    inputs?: {
        text?: InputStyles;
        textarea?: InputStyles;
        select?: InputStyles;
    };
    colors?: Colors;
}

export type TemplateThemes = "pulse";