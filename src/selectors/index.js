// Would like to be able to use reselect here,
// but the apollo state can't be reliably read here.

import moment from 'moment';

const produceScheduleOfFilms = ({ films = [], filter }) => {
  const now = Date.now();
  return films
    .reduce(filmReducer, [])
    .filter(filmFilter)
    .sort(filmSorter);

  function filmReducer(films, film) {
    const showtimes = film.showtimes.reduce(showtimeReducer, []);
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

  function filmSorter(first, second) {
    const firstStartsAtMoment = first.nextShowtime.startsAtMoment;
    const secondStartsAtMoment = second.nextShowtime.startsAtMoment;

    if (firstStartsAtMoment.isBefore(secondStartsAtMoment)) {
      return -1;
    }

    if (firstStartsAtMoment.isAfter(secondStartsAtMoment)) {
      return 1;
    }

    return 0;
  }

  function showtimeReducer(showtimes, showtime) {
    // Only show films which are starting in the future.
    const startsAtMoment = toShowtimeMoment(
      showtime.startsAtDate,
      showtime.startsAtTime
    );
    const endsAtMoment = toShowtimeMoment(
      showtime.endsAtDate,
      showtime.endsAtTime
    );
    if (startsAtMoment.isAfter(now)) {
      showtimes.push({
        ...showtime,
        startsAtMoment,
        endsAtMoment
      });
    }
    return showtimes;
  }
};

function toShowtimeMoment(startsAtDate, startsAtTime) {
  return moment(`${startsAtDate} ${startsAtTime}`, 'YYYY-MM-DD HH:mm');
}

export const getFilter = state => state.filter;
export const getOriginalFilter = state => state.filter.original;
export const getActiveFilter = state => state.filter.active;

export const getFilms = state => state.films;
export const getFilmsCollection = state => state.films.collection;
export const getFilmsLoading = state => state.films.isLoading;

export const getFilteredFilms = state => {
  const films = getFilmsCollection(state);
  const filter = getActiveFilter(state);
  return produceScheduleOfFilms({ films, filter });
};
