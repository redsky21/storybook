import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: `'Roboto','Noto Sans',sans-serif`,
  },
  components: {},
  palette: {
    primary: {
      light: colors['primary-300'],
      main: colors['primary-500'],
      dark: colors['primary-700'],
    },
  },
});

export default theme;
