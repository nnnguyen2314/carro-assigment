import * as ACTION_TYPES from './types';

export const restore_search_options = () => {
    return {
        type: ACTION_TYPES.RESTORE_SEARCH_OPTIONS,
    }
};
export const save_search_options = (searchOptions) => {
    return {
        type: ACTION_TYPES.SAVE_SEARCH_OPTIONS,
        payload: searchOptions,
    }
};

export const search_success = (searchResults) => {
    return {
        type: ACTION_TYPES.SEARCH_SUCCESS,
        payload: searchResults,
    }
};
export const search_failure = (error) => {
    return {
        type: ACTION_TYPES.SEARCH_FAILURE,
        payload: error,
    }
};

export const fetch_favourite_gif_list = () => {
    return {
        type: ACTION_TYPES.FETCH_FAVOURITE_GIF_LIST,
    }
};
export const save_gif_to_favourite = (gif) => {
    return {
        type: ACTION_TYPES.SAVE_GIF_TO_FAVOURITES,
        payload: gif,
    }
};
export const remove_gif_from_favourite = (gif) => {
    return {
        type: ACTION_TYPES.REMOVE_GIF_FROM_FAVOURITES,
        payload: gif,
    }
};

