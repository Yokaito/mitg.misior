import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    defaultColors: {
      black: string;
      gray: string;
      white: string;
    };
    backgrounds: {
      root: string;
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      senary: string;
    };
    textColors: {
      primary: string;
      secondary: string;
      tertiary: string;
      error: string;
    };
    borders: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    shadows: {
      primary: string;
      secondary: string;
    };
  }
}
