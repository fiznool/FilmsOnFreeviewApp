export const types = {
  SAVE: '[Filter] Save'
};

export const actionCreators = {
  setupFilterBounds: filterOptions => ({
    type: types.SAVE,
    payload: filterOptions
  })
};

const initialState = {
  minScore: null,
  maxScore: null,
  minYear: null,
  maxYear: null,
  channels: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SAVE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

}