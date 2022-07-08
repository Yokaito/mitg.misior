import { DefaultTheme } from 'styled-components';
import { lightenDarkenColor } from '@/sdk/utils/lighten-darken-color';

export const defaultTheme: DefaultTheme = {
  defaultColors: {
    black: `#000000`,
    white: `#ffffff`,
    gray: `#f0f0f0`,
  },
  colors: {
    primary: {
      default: `#ffd698`,
      hover: lightenDarkenColor(`#ffd698`, 20),
      active: `#ffd698`,
      focus: `#ffd698`,
      disabled: lightenDarkenColor(`#ffd698`, 80),
    },
    secondary: {
      default: `#f1fbec`,
      hover: lightenDarkenColor(`#f1fbec`, 20),
      active: `#f1fbec`,
      focus: `#f1fbec`,
      disabled: lightenDarkenColor(`#f1fbec`, 80),
    },
    tertiary: {
      default: `#fede59`,
      hover: lightenDarkenColor(`#fede59`, 20),
      active: `#fede59`,
      focus: `#fede59`,
      disabled: lightenDarkenColor(`#fede59`, 80),
    },
    quaternary: {
      default: `#5a2800`,
      hover: lightenDarkenColor(`#5a2800`, 20),
      active: `#5a2800`,
      focus: `#5a2800`,
      disabled: lightenDarkenColor(`#5a2800`, 80),
    },
  },
  backgrounds: {
    root: {
      default: `#181816`,
      darken: lightenDarkenColor(`#181816`, -20),
      lighten: lightenDarkenColor(`#181816`, 20),
    },
    primary: {
      default: `#fff2db`,
      darken: lightenDarkenColor(`#fff2db`, -20),
      lighten: lightenDarkenColor(`#fff2db`, 20),
    },
    secondary: {
      default: `#debb9d`,
      darken: lightenDarkenColor(`#debb9d`, -20),
      lighten: lightenDarkenColor(`#debb9d`, 20),
    },
    tertiary: {
      default: `#83d283`,
      darken: lightenDarkenColor(`#83d283`, -20),
      lighten: lightenDarkenColor(`#83d283`, 20),
    },
    quaternary: {
      default: `#5f4d41`,
      darken: lightenDarkenColor(`#5f4d41`, -20),
      lighten: lightenDarkenColor(`#5f4d41`, 20),
    },
    quinary: {
      default: `#f1e0c5`,
      darken: lightenDarkenColor(`#f1e0c5`, -20),
      lighten: lightenDarkenColor(`#f1e0c5`, 20),
    },
    senary: {
      default: `#505050`,
      darken: lightenDarkenColor(`#505050`, -20),
      lighten: lightenDarkenColor(`#505050`, 20),
    },
    septenary: {
      default: `#d4c0a1`,
      darken: lightenDarkenColor(`#d4c0a1`, -20),
      lighten: lightenDarkenColor(`#d4c0a1`, 20),
    },
    octonary: {
      default: `#14433F`,
      darken: lightenDarkenColor(`#14433F`, -20),
      lighten: lightenDarkenColor(`#14433F`, 20),
    },
  },
  shadows: {
    primary: {
      default: `#2c2c2c`,
      darken: lightenDarkenColor(`#2c2c2c`, -20),
      lighten: lightenDarkenColor(`#2c2c2c`, 20),
    },
    secondary: {
      default: `#875f3e`,
      darken: lightenDarkenColor(`#875f3e`, -20),
      lighten: lightenDarkenColor(`#875f3e`, 20),
    },
  },
  borders: {
    primary: {
      default: `#3a3738`,
      darken: lightenDarkenColor(`#3a3738`, -20),
      lighten: lightenDarkenColor(`#3a3738`, 20),
    },
    secondary: {
      default: `#793d03`,
      darken: lightenDarkenColor(`#793d03`, -20),
      lighten: lightenDarkenColor(`#793d03`, 20),
    },
    tertiary: {
      default: `#55636c`,
      darken: lightenDarkenColor(`#55636c`, -20),
      lighten: lightenDarkenColor(`#55636c`, 20),
    },
    quaternary: {
      default: `#faf0d7`,
      darken: lightenDarkenColor(`#faf0d7`, -20),
      lighten: lightenDarkenColor(`#faf0d7`, 20),
    },
    quinary: {
      default: `#4b7874`,
      darken: lightenDarkenColor(`#4b7874`, -20),
      lighten: lightenDarkenColor(`#4b7874`, 20),
    },
  },
  system: {
    error: `#f44336`,
    warning: `#ff9800`,
    info: `#2196f3`,
    success: `#4caf50`,
  },
  typography: {
    basefontFamily: `'Fondamento', Martel, 'Poppins', 'Roboto'`,
    baseFontSize: `16px`,
    fontsFamily: {
      fondamento: `Fondamento`,
      martel: `Martel`,
      poppins: `Poppins`,
      roboto: `Roboto`,
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    title: {
      h1: `2.75rem`,
      h2: `2.5rem`,
      h3: `2.25rem`,
      h4: `2rem`,
      h5: `1.75rem`,
      h6: `1.5rem`,
    },
    text: {
      xxxsmall: `0.7rem`,
      xxsmall: `0.875rem`,
      xsmall: `0.75rem`,
      small: `0.875rem`,
      regular: `1rem`,
      medium: `1.125rem`,
      large: `1.25rem`,
      xlarge: `1.375rem`,
    },
  },
};
