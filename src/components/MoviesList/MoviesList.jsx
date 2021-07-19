import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard, movieCardTypes } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieCardTypes).isRequired,
};