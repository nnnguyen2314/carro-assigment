import {createStyles, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: '0 auto',
        },
        headerContent: {
            display: 'flex',
            flexGrow: 1,
        },
        title: {
            display: 'inline-flex',
            flexGrow: 1,
            color: theme.palette.secondary.main,
            alignItems: 'center',
        },
        btnHome: {
            marginRight: theme.spacing(1),
            borderRadius: 'none',
        },
        logo: {
            height: '3rem',
            pointerEvents: 'none',
        },
    })
);

export default styles;
