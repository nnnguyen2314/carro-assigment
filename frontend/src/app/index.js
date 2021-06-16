import React, {useContext} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {MuiThemeProvider, CssBaseline, Toolbar, AppBar} from '@material-ui/core';
import theme from '../themes';
import Header from "../components/Header";
import './App.css';
import MainMenu from "../components/MainMenu";
import {AppProvider} from "./contexts";
import Footer from "../components/Footer";

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
                        <main className="App-content">
                            <Switch>
                                <Route exact path="/">
                                </Route>
                                <Route path="/favourites">
                                </Route>
                            </Switch>
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
