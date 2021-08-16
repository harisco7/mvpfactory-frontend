export const LOGGED_IN_USER = 'LOGGED_IN_USER';

export function userReducer(state, action) {
  switch (action.type) {
    case LOGGED_IN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
