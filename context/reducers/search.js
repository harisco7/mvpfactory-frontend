export const SET_RESULTS_PAGE = 'SET_RESULTS_PAGE';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const CHANGE_QUERY_FILTER = 'CHANGE_QUERY_FILTER';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';

export function searchReducer(state, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return { ...state, searchQuery: action.payload, searchResults: [], searchResultsPage: 1 };
    case CHANGE_QUERY_FILTER:
      return {
        ...state,
        searchQueryFilters: action.payload,
        searchResults: [],
        searchResultsPage: 1,
      };
    case UPDATE_RESULTS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload.results],
        searchResultsTotal: action.payload.total,
      };
    case SET_RESULTS_PAGE:
      return { ...state, searchResultsPage: action.payload };
    default:
      return state;
  }
}
