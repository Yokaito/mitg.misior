import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultColors: {
      black: string;
      gray: string;
      white: string;
    };
    colors: {
      primary: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
      secondary: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
      tertiary: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
      quaternary: {
        default: string;
        hover: string;
        active: string;
        focus: string;
        disabled: string;
      };
    };
    backgrounds: {
      root: {
        default: string;
        darken: string;
        lighten: string;
      };
      primary: {
        default: string;
        darken: string;
        lighten: string;
      };
      secondary: {
        default: string;
        darken: string;
        lighten: string;
      };
      tertiary: {
        default: string;
        darken: string;
        lighten: string;
      };
      quaternary: {
        default: string;
        darken: string;
        lighten: string;
      };
      quinary: {
        default: string;
        darken: string;
        lighten: string;
      };
      senary: {
        default: string;
        darken: string;
        lighten: string;
      };
      septenary: {
        default: string;
        darken: string;
        lighten: string;
      };
      octonary: {
        default: string;
        darken: string;
        lighten: string;
      };
    };
    shadows: {
      primary: {
        default: string;
        darken: string;
        lighten: string;
      };
      secondary: {
        default: string;
        darken: string;
        lighten: string;
      };
    };
    borders: {
      primary: {
        default: string;
        darken: string;
        lighten: string;
      };
      secondary: {
        default: string;
        darken: string;
        lighten: string;
      };
      tertiary: {
        default: string;
        darken: string;
        lighten: string;
      };
      quaternary: {
        default: string;
        darken: string;
        lighten: string;
      };
      quinary: {
        default: string;
        darken: string;
        lighten: string;
      };
    };
    system: {
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    typography: {
      basefontFamily: string;
      baseFontSize: string;

      fontsFamily: {
        fondamento: string;
        martel: string;
        poppins: string;
        roboto: string;
      };

      weight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
      text: {
        xxxsmall: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        regular: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      title: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
    };
  }
}
