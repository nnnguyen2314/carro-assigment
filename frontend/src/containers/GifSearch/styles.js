import {createStyles, fade, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: 10,
            marginBottom: 30,
        },
        search: {
            position: 'relative',
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            backgroundColor: fade(theme.palette.common.white, 0.7),
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.common.lightGrey}`,
            '-webkit-transition': '1s', /* Safari */
            transition: '1s',
            '&:hover': {
                backgroundColor: theme.palette.common.white,
                boxShadow: `0 0 5pt 0.5pt ${theme.palette.common.lightGrey}`,
            },
            '&:focus': {
                boxShadow: `0 0 5pt 2pt ${theme.palette.common.lightGrey}`,
                backgroundColor: theme.palette.common.white,
            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
        },

    })
);

export default styles;
