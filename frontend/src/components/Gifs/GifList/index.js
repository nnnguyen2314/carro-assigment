import React, {useState} from 'react';
import GifListItem from "../GifListItem";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import ConfirmationDialog from "../../ConfirmationDialog";

const GifList = ({gifList, handleClickItem, handleRemoveItem}) => {
    const classes = styles();
    const [openDlgRemoveConfirmation, setOpenDlgRemoveConfirmation] = useState(false);
    const [currentRemovingItem, setCurrentRemovingItem] = useState(null);

    const onRemoveItem = () => {
        setOpenDlgRemoveConfirmation(false);
        handleRemoveItem(currentRemovingItem);
    };

    return (
        <>
            <Box className={classes.root}>
                {
                    gifList.length > 0 && gifList.map((gif) => (
                        <Box p={1} key={gif.id} className={classes.listItem}>
                            <GifListItem id={gif.id} gif={gif} isSaved={false} handleClick={(evt) => {
                                if(handleClickItem && typeof handleClickItem === 'function') {
                                    handleClickItem(gif);
                                }
                            }} handleClickToRemove={(evt) => {
                                setCurrentRemovingItem(gif);
                                setOpenDlgRemoveConfirmation(true);
                            }} />
                        </Box>
                    ))
                }
            </Box>
            <ConfirmationDialog
                title="Do you want to remove this Gif image from favourites?"
                open={openDlgRemoveConfirmation}
                handleConfirmYes={onRemoveItem}
                handleConfirmNo={() => {setOpenDlgRemoveConfirmation(false);}}/>
        </>
    )
};

export default GifList;
