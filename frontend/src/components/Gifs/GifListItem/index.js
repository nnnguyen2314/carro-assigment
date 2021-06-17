import React from 'react';
import {IconButton} from "@material-ui/core";
import {
    MuiFullImageCard,
    MuiFullImageCardActions,
    MuiFullImageCardMedia
} from '../../Shared/MuiFullImageCard';
import styles from "./styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const GifListItem = ({gif, handleClick}) => {
    const classes = styles();

    return (
        <MuiFullImageCard className={classes.muiFiCard} onClick={handleClick}>
            <MuiFullImageCardMedia
                media="picture"
                alt="Contemplative Reptile"
                image={gif ? gif.images.original.url : 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                title="Contemplative Reptile"
            />
            {
                gif.isSaved && (
                    <MuiFullImageCardActions className={classes.muiFiCardActions}>
                        <IconButton
                            edge="start"
                            size="small"
                            title="Liked"
                        >
                            <FavoriteIcon color='primary' title="Favourite Gif Images"/>
                        </IconButton>
                    </MuiFullImageCardActions>
                )
            }
        </MuiFullImageCard>
    );
};

export default GifListItem;
