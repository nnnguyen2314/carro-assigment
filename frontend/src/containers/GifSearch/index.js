import React, {useContext, useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import GifListList from "../../components/Gifts/GifList";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import {AppContext} from "../../app/contexts";
import * as gifService from "../../services/gifs";
import {remove_gif_from_favourite, save_gif_to_favourite, save_search_options, search_failure} from "../../app/actions";
import CustomCircularProgress from "../../components/Shared/CustomCircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const GifSearch = () => {
    const classes = styles();
    const [loading, setLoading] = useState(false);
    const [advancedPageNo, setAdvancedPageNo] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [inputValues, setInputValues] = useState({
        keyword: ''
    });
    const [searchResults, setSearchResults] = useState([]);
    const [state, dispatch] = useContext(AppContext);

    const doSearch = (value, lang, limit, offset) => {
        setLoading(true);
        gifService.doSearch(value, lang, limit, offset)
            .then((res) => {
                if (!res.isError) {
                    let currentResults = searchResults;
                    currentResults.push(...res.data.data);
                    setSearchResults(currentResults);

                    const currentPageNo = (res.data.pagination.offset / res.data.pagination.count) + 1;
                    setAdvancedPageNo(currentPageNo + 1);

                    setTotalResults(res.data.pagination.total_count);
                    dispatch(save_search_options({
                        default_search_page_size: res.data.pagination.count
                    }));
                } else {
                    dispatch(search_failure(res.error));
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSaveToFavourite = (gifItem) => {
        console.log(gifItem);
        const favourites = state.favourites;
        const existingIndex = favourites.findIndex((item) => item.id === gifItem.id);

        if (existingIndex >= 0) {
            gifItem['isSaved'] = false;
            favourites.slice(existingIndex, 1);
            dispatch(remove_gif_from_favourite(gifItem));
        } else {
            gifItem['isSaved'] = true;
            dispatch(save_gif_to_favourite(gifItem));
        }
    };

    const handleLoadMore = () => {
        const limit = state.search_options.default_search_page_size;
        const offset = (advancedPageNo - 1) * limit;
        doSearch(inputValues['keyword'], 'en', limit, offset);
    };

    const handleSearch = (evt) => {
        const limit = state.search_options.default_search_page_size;
        doSearch(inputValues['keyword'], 'en', limit, 0);
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item md={12}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        name="keyword"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(e);
                            }
                        }}
                    />
                </div>
            </Grid>
            <Grid item md={12}>
                {
                    (searchResults.length > 0) && (
                        <>
                            <div style={{display: 'flex', justifyContent: "flex-start", alignItems: "center"}}>
                                <Typography variant="h6">
                                    About {totalResults} results
                                </Typography>
                            </div>
                            <GifListList id="list" gifList={searchResults} handleClickItem={handleSaveToFavourite}/>
                            <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                                {
                                    !loading && (
                                        <Button onClick={handleLoadMore} color="secondary">Load More</Button>
                                    )
                                }
                            </div>
                        </>
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

export default GifSearch;
