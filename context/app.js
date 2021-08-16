import { createContext, useContext, useReducer } from 'react';
import { searchReducer } from './reducers/search';
import { userReducer } from './reducers/user';

const defaultState = {
  searchQuery: '',
  searchQueryFilters: {},
  searchResults: [],
  searchResultsSort: null,
  searchResultsPage: 1,
  searchResultsTotal: 0,
  favourites: [],
  user: null,
};

const AppContext = createContext(defaultState);

// combine reducer function
export const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
  };

export function AppProvider({ children, initialState }) {
  const mergedState = {
    ...defaultState,
    ...initialState,
  };
  const [state, dispatch] = useReducer(combineReducers(searchReducer, userReducer), mergedState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
