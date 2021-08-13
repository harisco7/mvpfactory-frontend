import { createContext, useContext, useReducer } from 'react';
import { movieReducer } from './reducers/movie';

const initialState = {
  searchQuery: null,
  favourites: [],
  count: 12,
  login: () => {},
  logout: () => {},
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
  const [state, dispatch] = useReducer(combineReducers(movieReducer), initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
