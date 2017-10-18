import moment from 'moment';

const POSTER_SIZES = [
  92,
  154,
  185,
  342,
  500,
  780
]

export function getPosterSize(targetWidth) {
  for(let size in POSTER_SIZES) {
    if(targetWidth <= size) {
      return `w${size}`;
    }
  }
  return 'original';
}

export function produceScheduleOfFilms(films) {
  const now = Date.now();
  return films
    .reduce(filmReducer, [])
    .sort(filmSorter);

  function filmReducer(films, film) {
    const showtimes = film.showtimes.nodes.reduce(showtimeReducer, []);
    if(showtimes.length) {
      films.push({...film, showtimes, nextShowtime: showtimes[0] });
    }
    return films;
  }

  function filmSorter(a, b) {
    if(a.nextShowtime.startsAt < b.nextShowtime.startsAt) {
      return -1;
    }

    if(a.nextShowtime.startsAt > b.nextShowtime.startsAt) {
      return 1;
    }

    return 0;
  }

  function showtimeReducer(showtimes, showtime) {
    if(moment(showtime.startsAt).isAfter(now)) {
      showtimes.push(showtime);
    }
    return showtimes;
  }
}

const MIN_HUE = 10;
const MAX_HUE = 120;
const LOWER_RATING_THRESHOLD = 45;
const HIGHER_RATING_THRESHOLD = 75;

export function generateRatingColor(rating) {
  let hue;

  if(rating < LOWER_RATING_THRESHOLD) {
    hue = MIN_HUE;
  } else if (rating > HIGHER_RATING_THRESHOLD) {
    hue = MAX_HUE;
  } else {
    hue = ((rating - LOWER_RATING_THRESHOLD) / (HIGHER_RATING_THRESHOLD - LOWER_RATING_THRESHOLD)) * MAX_HUE;
  }

  return `hsl(${hue}, 70%, ${ hue < 20 ? '35%' : '25%'})`;
}