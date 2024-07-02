import { createTheme } from '@mui/material/styles';

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
  },
  typography: {
    fontFamily: 'Yanone Kaffeesatz Variable',
    h1: {
        fontFamily: 'Carrois Gothic SC',
        color: '#daa034'
    },
    h2: {
        fontFamily: 'Carrois Gothic SC',
    }
  },
});