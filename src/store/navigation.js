export const types = {
  SHOW_FILTER_OPTIONS_MODAL: '[Navigation] Show Filter Options Modal',
  HIDE_FILTER_OPTIONS_MODAL: '[Navigation] Hide Filter Options Modal'
};

export const actionCreators = {
  showFilterOptionsModal: () => ({ type: types.SHOW_FILTER_OPTIONS_MODAL }),
  hideFilterOptionsModal: () => ({ type: types.HIDE_FILTER_OPTIONS_MODAL })
};

const initialState = {
  filterOptionsModalVisible: false
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SHOW_FILTER_OPTIONS_MODAL:
      return {
        ...state,
        filterOptionsModalVisible: true
      }

      case types.HIDE_FILTER_OPTIONS_MODAL:
        return {
          ...state,
          filterOptionsModalVisible: false
        }

      default:
        return state;
  }
}