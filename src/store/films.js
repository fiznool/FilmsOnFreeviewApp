import { getAllFilms } from '../api';

const types = {
  FETCH_FILMS: '[Films] Fetch',
  FETCH_FILMS_LOADING: '[Films] Fetch Loading',
  FETCH_FILMS_SUCCESS: '[Films] Fetch Success',
  FETCH_FILMS_ERROR: '[Films] Fetch Error'
};

const fetchFilmsLoading = () => ({
  type: types.FETCH_FILMS_LOADING
});

const fetchFilmsSuccess = films => ({
  type: types.FETCH_FILMS_SUCCESS,
  payload: films
});

const fetchFilmsError = error => ({
  type: types.FETCH_FILMS_ERROR,
  payload: error
});

function fetchFilms() {
  return async function(dispatch) {
    dispatch(fetchFilmsLoading());
    try {
      const films = await getAllFilms();
      dispatch(fetchFilmsSuccess(films));
      return films;
    } catch (e) {
      dispatch(fetchFilmsError(e));
      throw e;
    }
  };
}

export const actionCreators = {
  fetchFilms
};

const initialState = {
  collection: [],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FILMS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case types.FETCH_FILMS_SUCCESS:
      return {
        collection: action.payload,
        isLoading: false,
        error: null
      };

    case types.FETCH_FILMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
