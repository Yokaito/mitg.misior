import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    defaultColors: {
      black: string;
      gray: string;
      white: string;
    };
    textColors: {
      primary: string;
      secondary: string;
      tertiary: string;
      error: string;
    };
    shadows: {
      primary: string;
      secondary: string;
    };
  }
}
