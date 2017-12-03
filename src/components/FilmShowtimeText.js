import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const FilmShowtimeText = ({ style, showtime }) => {
  const showtimeDate = showtime.startsAtMoment.calendar();
  const showtimeChannel = showtime.channel;
  return (
    <Text style={style}>
      {showtimeDate} on {showtimeChannel}
    </Text>
  );
};

FilmShowtimeText.propTypes = {
  showtime: PropTypes.object.isRequired,
  style: PropTypes.any
};

export default FilmShowtimeText;
