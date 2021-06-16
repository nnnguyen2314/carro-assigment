import * as ACTION_TYPES from '../actions/types';

export const initialState = {
    search_options: {
        lang: '',
        default_search_page_size: 0,
    },
    favourites: [],
    favourites_count: 0,
};

export default function appReducer (state, action) {
    switch (action.type) {
        case ACTION_TYPES.RESTORE_SEARCH_OPTIONS:
            let searchOptions = localStorage.getItem('search_options');
            return {
                ...state,
                error: null,
                search_options: searchOptions ? JSON.parse(searchOptions) : initialState.search_options,
            };
        case ACTION_TYPES.SAVE_SEARCH_OPTIONS:
            localStorage.setItem('search_options', JSON.stringify(action.payload));
            return {
                ...state,
                error: null,
                search_options: action.payload,
            };
        case ACTION_TYPES.FETCH_FAVOURITE_GIF_LIST:
            let favourites = localStorage.getItem('favourites');
            return {
                ...state,
                favourites: favourites ? JSON.parse(favourites) : initialState.favourites,
            };
        case ACTION_TYPES.SAVE_GIF_TO_FAVOURITES:
            let currentFavourites = state.favourites;
            currentFavourites.push(action.payload);
            localStorage.setItem('favourites', JSON.stringify(currentFavourites));
            localStorage.setItem('favourites_count', currentFavourites.length.toString());
            return {
                ...state,
                favourites: currentFavourites,
                favourites_count: currentFavourites.length,
            };
        case ACTION_TYPES.REMOVE_GIF_FROM_FAVOURITES:
            let newFavourites = state.favourites.filter((item) => {
                return item.id !== action.payload.id;
            });
            localStorage.setItem('favourites', JSON.stringify(newFavourites));
            localStorage.setItem('favourites_count', newFavourites.length.toString());
            return {
                ...state,
                favourites: newFavourites,
                favourites_count: newFavourites.length,
            };
        case ACTION_TYPES.FETCH_FAVOURITE_GIF_LIST_COUNT:
            let favouritesCount = localStorage.getItem('favourites_count');
            return {
                ...state,
                favourites_count: favouritesCount ? Number(favourites) : initialState.favourites_count,
            };
        default:
            return state;
    }
}
