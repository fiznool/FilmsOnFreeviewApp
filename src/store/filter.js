export const types = {
  FILTER_CHANGED: '[Filter] Changed',
  FILTER_RESET: '[Filter] Reset'
};

export const actionCreators = {
  filterChanged: filterOptions => ({
    type: types.FILTER_CHANGED,
    payload: filterOptions
  }),
  filterReset: () => ({
    type: types.FILTER_RESET
  })
};

const initialState = {
  minRating: 0,
  minYear: null,
  channels: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_CHANGED:
      return {
        ...state,
        ...action.payload
      };

    case types.FILTER_RESET:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
