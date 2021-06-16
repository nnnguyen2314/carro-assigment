import React, {useReducer, createContext, useEffect} from 'react';
import appReducer, {initialState} from '../reducers';
import * as ACTIONS from '../actions';

export const AppContext = createContext({
    state: initialState,
    dispatch: () => null
});

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    useEffect(() => {
        dispatch(ACTIONS.restore_search_options());
        dispatch(ACTIONS.fetch_favourite_gif_list_count());
    }, []);

    return (
        <AppContext.Provider value={[ state, dispatch ]}>
            {children}
        </AppContext.Provider>
    );
};

