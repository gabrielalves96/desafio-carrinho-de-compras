import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '',
      main: "#FF3333",
      dark: "#FA403C",
      contrastText: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: [
      '"Poppins" ,sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;