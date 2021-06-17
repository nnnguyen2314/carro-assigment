import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline, Toolbar, AppBar} from '@material-ui/core';
import theme from '../themes';
import Header from "../components/Header";
import './App.css';
import MainMenu from "../components/MainMenu";
import {AppProvider} from "./contexts";
import Footer from "../components/Footer";
import GifSearch from "../containers/GifSearch";
import Grid from "@material-ui/core/Grid";
import FavouriteGifs from "../containers/Favourites";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="App">
                        <AppBar position="static" color="inherit" className="App-header">
                            <Toolbar>
                                <Header>
                                    <MainMenu/>
                                </Header>
                            </Toolbar>
                        </AppBar>
                        <main className="App-main">
                            <Grid container>
                                <Grid item md={10} sm={12} xs={12} style={{margin: '10px auto'}} className="App-main-content">
                                    <Switch>
                                        <Route exact path="/">
                                            <GifSearch />
                                        </Route>
                                        <Route path="/favourites">
                                            <FavouriteGifs />
                                        </Route>
                                    </Switch>
                                </Grid>
                            </Grid>
                        </main>
                        <footer className="App-footer">
                            <Footer />
                        </footer>
                    </div>
                </MuiThemeProvider>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
