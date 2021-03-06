import {createStyles, makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) =>
    createStyles({
        root: {
            paddingLeft: '24px',
            paddingRight: '24px',
        },
        footerContainer: {
            margin: '0 auto',
        },
        footerContent: {
            display: 'inline-flex',
            alignItems: 'center',
        }
    })
);

export default styles;
