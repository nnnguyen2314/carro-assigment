import React from 'react';
import GifListItem from "../GifListItem";
import Box from "@material-ui/core/Box";
import styles from "./styles";

const GifList = ({gifList, handleClickItem}) => {
    const classes = styles();

    return (
        <Box className={classes.root}>
            {
                gifList.length > 0 && gifList.map((gif) => (
                    <Box p={1} key={gif.id} className={classes.listItem}>
                        <GifListItem id={gif.id} gif={gif} isSaved={false} handleClick={(evt) => {
                            if(handleClickItem && typeof handleClickItem === 'function') {
                                handleClickItem(gif);
                            }
                        }} />
                    </Box>
                ))
            }
        </Box>
    )
};

export default GifList;
