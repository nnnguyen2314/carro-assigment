import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import styles from './styles';
import logo from '../../assets/images/logo.gif';
import Grid from "@material-ui/core/Grid";

export default function Header({children}) {
    const classes = styles();
    return (
        <Grid container>
            <Grid item md={10} sm={12} xs={12} className={classes.root}>
                <div className={classes.headerContent}>
                    <IconButton
                        edge="start"
                        className={classes.btnHome}
                        color="inherit"
                        aria-label="menu"
                        href='/'
                        title="Home"
                    >
                        <img src={logo} alt="GIPHY Search" className={classes.logo}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        GIPHY Searcher
                    </Typography>
                    {children}
                </div>
            </Grid>
        </Grid>
    );
};
