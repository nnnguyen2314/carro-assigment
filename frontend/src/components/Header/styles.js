import {createStyles, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            color: theme.palette.secondary.main,
        },
        btnHome: {
            marginRight: theme.spacing(1),
            borderRadius: 'none',
        },
        logo: {
            height: '3rem',
            pointerEvents: 'none',
        }
    })
);

export default styles;
