export const SET_RESULTS_PAGE = 'SET_RESULTS_PAGE';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const CHANGE_QUERY_FILTER = 'CHANGE_QUERY_FILTER';
export const CHANGE_RESULTS_SORT = 'CHANGE_RESULTS_SORT';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';

export function searchReducer(state, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        searchResults: [],
        searchResultsPage: 1,
      };
    case CHANGE_QUERY_FILTER:
      return {
        ...state,
        searchQueryFilters: action.payload,
        searchResults: [],
        searchResultsPage: 1,
      };
    case CHANGE_RESULTS_SORT:
      return {
        ...state,
        searchResultsSort: action.payload,
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload.results],
        searchResultsTotal: action.payload.total || 0,
      };
    case SET_RESULTS_PAGE:
      return { ...state, searchResultsPage: action.payload };
    default:
      return state;
  }
}
