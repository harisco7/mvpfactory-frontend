import { createContext, useContext, useReducer } from 'react';
import { searchReducer } from './reducers/search';

const initialState = {
  searchQuery: '',
  searchQueryFilters: {},
  searchResults: [],
  searchResultsSort: null,
  searchResultsPage: 1,
  searchResultsTotal: 0,
  favourites: [],
  user: null,
};

const AppContext = createContext(initialState);

// combine reducer function
export const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
  };

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(combineReducers(searchReducer), initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
