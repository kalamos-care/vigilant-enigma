import { createMuiTheme } from '@material-ui/core/styles';
import { green, grey, red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    "common": {
      "black": "rgba(31, 18, 53, 1)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(244, 239, 252, 1)",
      "default": "rgba(255, 255, 255, 1)"
    },
    "primary": {
      "light": "rgba(70, 51, 102, 1)",
      "main": "rgba(48, 30, 78, 1)",
      "dark": "rgba(31, 18, 53, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "main": "rgba(255, 110, 108, 1)",
      "contrastText": "rgba(31, 18, 53, 1)"
    },
    "error": {
      "main": "rgba(251, 221, 116, 1)",
      "contrastText": "rgba(31, 18, 53, 1)"
    },
    "text": {
      "primary": "rgba(31, 18, 53, 1)",
      "secondary": "rgba(27, 20, 37, 1)",
      "disabled": "rgba(226, 218, 235, 1)",
      "hint": "rgba(244, 239, 252, 1)"
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
    warning: {
      main: '#ff6e6c',
      dark: '#c73c41',
    },
  },
  typography: {
    fontFamily: "'Arimo', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
