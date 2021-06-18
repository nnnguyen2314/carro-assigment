import React from 'react';
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

const GifListItem = ({gif, handleClick}) => {
    const classes = styles();

    return (
        <MuiFullImageCard className={classes.muiFiCard} onClick={(evt) => {
            if(handleClick && typeof handleClick === 'function') {
                handleClick(evt );
            }
        }}>
            <MuiFullImageCardMedia
                media="picture"
                alt="Contemplative Reptile"
                image={gif ? gif.images.original.url : 'https://material-ui.com/static/images/cards/contemplative-reptile.jpg'}
                title="Contemplative Reptile"
            />
            {
                gif.isSaved && (
                    <MuiFullImageCardActions className={classes.muiFiCardActions}>
                        <FavoriteIcon color="primary" className={classNames(classes.muiFiCardButtonIcon, classes.favouriteIcon)} title="Favourite Gif Images"/>
                    </MuiFullImageCardActions>
                )
            }
        </MuiFullImageCard>
    );
};

export default GifListItem;
