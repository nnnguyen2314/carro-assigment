import React, {useContext} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from "@material-ui/core/Button";
import styles from "./styles";
import {Typography} from "@material-ui/core";
import {AppContext} from "../../app/contexts";

const MainMenu = () => {
    const classes = styles();
    const [state, dispatch] = useContext(AppContext);

    return (
        <nav className={classes.root}>
            <Button
                color="secondary"
                href='/'
            >
                <SearchIcon title="Search Gif Image"/>
                <Typography variant="body1">
                    Search
                </Typography>
            </Button>
            <Button
                color="primary"
                href='/favourites'
            >
                <FavoriteIcon title="Favourite Gif Images"/>
                <Typography variant="body1">
                    Saved ({state.favourites_count || 0})
                </Typography>
            </Button>
        </nav>
    );
};

export default MainMenu;
