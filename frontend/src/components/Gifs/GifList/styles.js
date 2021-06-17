import {createStyles, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

const styles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexFlow: 'row wrap',
            width: '100%',
        },
        listItem: {
            [theme.breakpoints.up('xs')]: {
                flexBasis: '100%',
            },
            [theme.breakpoints.up('sm')]: {
                flexBasis: '50%',
            },
            [theme.breakpoints.up('md')]: {
                flexBasis: '20%',
            },
        }
    })
);

export default styles;
