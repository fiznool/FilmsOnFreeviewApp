import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const FilmShowtimeText = ({style, showtime}) => {
  const showtimeDate = moment(showtime.startsAt).calendar();
  const showtimeChannel = showtime.channel;
  return (
    <Text style={style}>{showtimeDate} on {showtimeChannel}</Text>
  );
};

FilmShowtimeText.propTypes = {
  showtime: PropTypes.object.isRequired,
  style: PropTypes.any
};

export default FilmShowtimeText;