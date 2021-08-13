export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';

export function movieReducer(state, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload };
    case DECREASE_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
