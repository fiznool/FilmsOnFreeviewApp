export const types = {
  FILTER_CHANGED: '[Filter] Changed'
};

export const actionCreators = {
  filterChanged: filterOptions => ({
    type: types.FILTER_CHANGED,
    payload: filterOptions
  })
};

const initialState = {
  maxRating: null,
  minYear: null,
  maxYear: null,
  channels: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FILTER_CHANGED:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}
