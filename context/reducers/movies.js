export const GET_RESULTS_PAGE = 'GET_RESULTS_PAGE';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';

export function moviesReducer(state, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return { ...state, searchQuery: action.payload };
    case UPDATE_RESULTS:
      return { ...state, searchResults: action.payload.results, searchResultsTotal: action.payload.total };
    case GET_RESULTS_PAGE:
      return { ...state, searchResultsPage: action.payload };
    default:
      return state;
  }
}
