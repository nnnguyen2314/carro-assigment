import React from 'react';
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import styles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from "@material-ui/core/Button";
import logo from '../../assets/images/logo.gif';
import theme from '../../themes';

export default function Header() {
    const classes = styles(theme);
    return (
        <header className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.btnHome}
                        color="inherit"
                        aria-label="menu"
                        href='/'
                        title="Home"
                    >
                        {/*<HomeIcon/>*/}
                        <img src={logo} alt="GIPHY Search" className={classes.logo}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GIPHY Searcher
                    </Typography>
                    <Button
                        color="secondary"
                        href='/'
                        title="Search"
                    >
                        <SearchIcon/>
                        <Typography variant="body1">
                            Search
                        </Typography>
                    </Button>
                    <Button
                        color="primary"
                        href='/favourites'
                        title="Saved"
                    >
                        <FavoriteIcon/>
                        <Typography variant="body1">
                            Saved
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};
