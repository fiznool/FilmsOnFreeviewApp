// Would like to be able to use reselect here,
// but the apollo state can't be reliably read here.

import moment from 'moment';

const produceScheduleOfFilms = ({ films, filter }) => {
  const now = Date.now();
  return films
    .reduce(filmReducer, [])
    .filter(filmFilter)
    .sort(filmSorter);

  function filmReducer(films, film) {
    const showtimes = film.showtimes.nodes.reduce(showtimeReducer, []);
    if (showtimes.length) {
      films.push({
        ...film,
        showtimes,
        nextShowtime: showtimes[0]
      });
    }
    return films;
  }

  function filmFilter(film) {
    return filterFilmByRating(film) && filterFilmByYear(film);
  }

  function filterFilmByRating(film) {
    return filter.minRating === 0 || film.tmdbRating >= filter.minRating;
  }

  function filterFilmByYear(film) {
    return filter.minYear === null || film.year >= filter.minYear;
  }

  function filmSorter(a, b) {
    if (a.nextShowtime.startsAt < b.nextShowtime.startsAt) {
      return -1;
    }

    if (a.nextShowtime.startsAt > b.nextShowtime.startsAt) {
      return 1;
    }

    return 0;
  }

  function showtimeReducer(showtimes, showtime) {
    if (moment(showtime.startsAt).isAfter(now)) {
      showtimes.push(showtime);
    }
    return showtimes;
  }
};

export const getFilter = state => state.filter;

export const filmsSelector = ({ films = [], filter }) =>
  produceScheduleOfFilms({ films, filter });
