import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import theme from '../../themes';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ConfirmationDialog = ({ title, children, open, handleConfirmYes, handleConfirmNo }) => {
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Dialog
                open={open}
                fullScreen={fullScreen}
                disableBackdropClick
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title || "Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmNo} color="primary" autoFocus>
                        No
                    </Button>
                    <Button onClick={handleConfirmYes} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

};

export default ConfirmationDialog;
