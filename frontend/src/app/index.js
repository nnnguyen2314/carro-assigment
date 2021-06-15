import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import theme from '../themes';
import Header from "../components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<AppProvider>*/}
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container>
            <Grid item sm={12} className="App-content">
              <Grid container spacing={3}>
                <Grid item md={12} className="mt10 non-padding">
                  <Header/>
                </Grid>
                <Grid item md={12} className="mt10 non-padding">
                  <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route path="/favourites">
                    </Route>
                  </Switch>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
        {/*</AppProvider>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
