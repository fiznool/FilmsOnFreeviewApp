import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Image,
  PixelRatio,
  StyleSheet,
  View
} from 'react-native';

const POSTER_SIZES = [92, 154, 185, 342, 500, 780];

function getPosterSize(targetWidth) {
  for (let size in POSTER_SIZES) {
    if (targetWidth <= size) {
      return `w${size}`;
    }
  }
  return 'original';
}

export default class FilmPosterImage extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      loadError: false
    };
  }

  static propTypes = {
    tmdbImageId: PropTypes.string,
    width: PropTypes.number.isRequired
  };

  handleLoad = () => {
    this.setState({ loaded: true });
  };

  handleError = () => {
    this.setState({ loadError: true });
  };

  render() {
    const { width, tmdbImageId } = this.props;
    const height = width * 1.5;

    if (!tmdbImageId || this.state.loadError) {
      return (
        <Image
          source={require('../assets/film-poster-placeholder.png')}
          style={{ width, height }}
        />
      );
    }

    const widthPixels = PixelRatio.getPixelSizeForLayoutSize(width);
    const remoteImageTargetWidth = getPosterSize(widthPixels);
    const uri = `https://image.tmdb.org/t/p/${remoteImageTargetWidth}/${
      tmdbImageId
    }.jpg`;

    const imageStyle = StyleSheet.flatten([
      styles.posterImage,
      { width, height }
    ]);

    return (
      <View style={{ width, height }}>
        <Image
          style={imageStyle}
          source={{ uri }}
          onLoad={this.handleLoad}
          onError={this.handleError}
        />
        {!this.state.loaded && (
          <ActivityIndicator style={StyleSheet.absoluteFill} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  posterImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch'
  }
});
