import {createStyles, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        muiFiCard: {
            width: '100%',
            minHeight: 180,
            '-webkit-transition': '1s', /* Safari */
            transition: '1s',
            boxShadow: `0 0 5pt 0.5pt ${theme.palette.common.lightGrey}`,
            '&:hover': {
                boxShadow: `0 0 5pt 2pt ${theme.palette.common.grey}`,
            }
        },
        muiFiCardContent: {
            color: "#ffffff",
            backgroundColor: "rgba(0,0,0,.24)"
        },
        muiFiCardActions: {
            color: "#ffffff",
            backgroundColor: "rgba(0,0,0,.24)",
            width: '100%',
            display: 'inline-flex',
            justifyContent: 'flex-end',
        }
    })
);

export default styles;
