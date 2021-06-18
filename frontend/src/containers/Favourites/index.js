import React, {useContext, useEffect, useState} from 'react';
import { GifList } from "../../components/Gifs";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import {AppContext} from "../../app/contexts";
import {
    fetch_favourite_gif_list, remove_gif_from_favourite,
} from "../../app/actions";
import CustomCircularProgress from "../../components/Shared/CustomCircularProgress";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const FavouriteGifs = () => {
    const classes = styles();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        setLoading(true);
        dispatch(fetch_favourite_gif_list());
        setLoading(false);
    }, []);

    const handleRemoveFromFavourites = (gifItem) => {
        gifItem['isSaved'] = false;
        dispatch(remove_gif_from_favourite(gifItem));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item md={12}>
                {
                    (state.favourites.length > 0) ? (
                        <>
                            <div style={{display: 'flex', justifyContent: "flex-start", alignItems: "center"}}>
                                <Typography variant="h6">
                                    You have {state.favourites.length} favourites
                                </Typography>
                            </div>
                            <GifList id="list" gifList={state.favourites} handleRemoveItem={handleRemoveFromFavourites} />
                        </>
                    ) : (
                        <div style={{display: 'flex', justifyContent: "flex-start", alignItems: "center"}}>
                            <Typography variant="h6">
                                You didn't have any gif images in favourites.
                                Start to find some <Link href="/">here</Link>
                            </Typography>
                        </div>
                    )
                }
                {
                    loading && (
                        <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                            <CustomCircularProgress />
                        </div>
                    )
                }
            </Grid>
        </Grid>
    );
};

export default FavouriteGifs;
