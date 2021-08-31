import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';

import Home from './Home';

const useStyles = makeStyles({
  root: {
    background: "red",
    height: "100vh"

  }
})


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44339'
      },
      secondary: {
        main: '#3f51b5'
      }
    },
  })

  const classes = useStyles();

  return (
      <ThemeProvider theme={theme}>
         <Home />
      </ThemeProvider>
     
    
  );
}

export default App;
