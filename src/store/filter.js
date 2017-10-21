export const types = {
  SETUP_FILTER_BOUNDS: '[Films] Setup Filter Bounds'
};

export const actionCreators = {
  setupFilterBounds: function(films) {
    return {
      type: types.SETUP_FILTER_BOUNDS,
      payload: films
    }
  }
};

const initialState = {
  minScore: null,
  maxScore: null,
  minYear: null,
  maxYear: null,
  channels: []
};

export function reducer(state = initialState/* , action */) {
  return state;
}