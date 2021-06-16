import React from 'react';
import styles from "./styles";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Footer = ({children}) => {
    const classes = styles();

    return (
        <Grid container className={classes.root}>
            <Grid item md={10} sm={12} xs={12} className={classes.footerContainer}>
                <div className={classes.footerContent}>
                    <Typography variant='body1'>
                        ABC LTD. @2021
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default Footer;
