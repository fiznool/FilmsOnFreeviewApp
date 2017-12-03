const types = {
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

const originalState = {
  minRating: 0,
  minYear: null,
  channels: []
};

const initialState = {
  original: {
    ...originalState
  },
  active: {
    ...originalState
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_CHANGED:
      return {
        ...state,
        active: {
          ...state.active,
          ...action.payload
        }
      };

    case types.FILTER_RESET:
      return {
        ...initialState
      };

    default:
      return state;
  }
}
