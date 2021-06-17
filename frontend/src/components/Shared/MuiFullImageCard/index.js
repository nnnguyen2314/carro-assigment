import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

export const MuiFullImageCard = withStyles({
    root: {
        position: "relative"
    }
})(Card);

export const MuiFullImageCardActionArea = withStyles({
    root: {
        position: 'relative'
    }
})(CardActionArea);

export const MuiFullImageCardActions = withStyles({
    root: {
        position: 'absolute',
        bottom: 0,
    }
})(CardActions);

export const MuiFullImageCardContent = withStyles({
    root: {
        position: 'relative',
        backgroundColor: 'transparent'
    }
})(CardContent);

export const MuiFullImageCardMedia = withStyles({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: "100%",
        width: "100%"
    }
})(CardMedia);
