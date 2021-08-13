import { createContext, useContext, useReducer } from 'react';
import { moviesReducer } from './reducers/movies';

const initialState = {
  searchQuery: '',
  searchResults: [],
  searchResultsPage: 1,
  searchResultsTotal: 0,
  favourites: [],
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
  const [state, dispatch] = useReducer(combineReducers(moviesReducer), initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
