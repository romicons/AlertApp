import { createTheme } from '@mui/material/styles';

// Supports weights 200-700
import '@fontsource-variable/yanone-kaffeesatz';

import '@fontsource/carrois-gothic-sc';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#daa034',
    },
    secondary: {
      main: '#f9f7ff',
    },
    tertiary: {
        main: '#18171c'
    }
  },
  typography: {
    fontFamily: 'Yanone Kaffeesatz Variable',
    h1: {
        fontFamily: 'Carrois Gothic SC',
        color: '#daa034'
    },
    h2: {
        fontFamily: 'Carrois Gothic SC',
        color: '#daa034'
    }
  },
});