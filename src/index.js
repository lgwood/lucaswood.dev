import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import "@fontsource/roboto-mono" 

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#69B9C9',
    },
    secondary: {
      main: '#403F4C',
    },
  },
  typography: {
    fontFamily: [
      'Roboto Mono',
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

  }
});

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);