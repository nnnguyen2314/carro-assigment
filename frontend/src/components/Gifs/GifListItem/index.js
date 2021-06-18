import React, {useState} from 'react';
import {IconButton} from "@material-ui/core";
import {
    MuiFullImageCard,
    MuiFullImageCardActions,
    MuiFullImageCardMedia
} from '../../Shared/MuiFullImageCard';
import styles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from '@material-ui/icons/Delete';
import Box from "@material-ui/core/Box";
import classNames from "classnames";

const GifListItem = ({gif, handleClick, handleClickToRemove}) => {
    const classes = styles();
    const [hoverState, setHoverState] = useState(false);

    const handleHoverState = (hover) => {
        setHoverState(hover);
    };

    return (
        <MuiFullImageCard className={classes.muiFiCard} onClick={(evt) => {
            if(handleClick && typeof handleClick === 'function') {
                handleClick(evt );
            }
        }} onMouseEnter={(evt) => handleHoverState(true)} onMouseLeave={(evt) => handleHoverState(false)}>
            <MuiFullImageCardMedia
                media="picture"
                alt="Contemplative Reptile"
                image={gif ? gif.images.original.url : 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                title="Contemplative Reptile"
            />
            {
                gif.isSaved && (
                    <MuiFullImageCardActions className={classes.muiFiCardActions}>
                        <Box display="flex" flexDirection="row" flexGrow={1}>
                            <Box display="flex" flexGrow={1} justifyContent="flex-start" alignItems="center">
                                {
                                    hoverState && (
                                        <IconButton
                                            edge="start"
                                            size="small"
                                            title="Liked"
                                            onClick={handleClickToRemove}
                                        >
                                            <DeleteIcon className={classNames(classes.muiFiCardButtonIcon, classes.deleteIcon)} title="Remove from favourite"/>
                                        </IconButton>
                                    )
                                }
                            </Box>
                            <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
                                <FavoriteIcon color="primary" className={classNames(classes.muiFiCardButtonIcon, hoverState ? classes.favouriteHoverIcon : classes.favouriteIcon)} title="Favourite Gif Images"/>
                            </Box>
                        </Box>
                    </MuiFullImageCardActions>
                )
            }
        </MuiFullImageCard>
    );
};

export default GifListItem;
