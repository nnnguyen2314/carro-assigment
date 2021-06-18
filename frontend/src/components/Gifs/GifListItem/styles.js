import {createStyles, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        muiFiCard: {
            width: '100%',
            minHeight: 190,
            '-webkit-transition': '1s',
            transition: '1s',
            boxShadow: `0 0 5pt 0.5pt ${theme.palette.common.lightGrey}`,
            '&:hover': {
                boxShadow: `0 0 5pt 2pt ${theme.palette.common.grey}`,
                cursor: 'pointer',
            }
        },
        muiFiCardContent: {
            color: "#ffffff",
            backgroundColor: "rgba(0,0,0,.24)"
        },
        muiFiCardActions: {
            color: "#ffffff",
            backgroundColor: "rgba(0,0,0,.40)",
            width: '100%',
            display: 'inline-flex',
            justifyContent: 'flex-end',
        },
        muiFiCardButtonIcon: {
            width: '1.2em',
            height: '1.2em',
        },
        deleteIcon: {
            color: theme.palette.common.lightGrey,
        },
        favouriteIcon: {
            color: theme.palette.primary.main,
        },
        favouriteHoverIcon: {
            color: theme.palette.primary.light,
        }
    })
);

export default styles;
