import * as actionTypes from './actionTypes';

// ================================= //
//           FETCHING MOVIES         //
// ================================= //
export const fetchMoviesInit = () => {
  return { type: actionTypes.FETCH_MOVIES_INIT };
}

export const fetchMoviesStart = ({listLength, imgConfig, movieGenres}) => {
  return { type: actionTypes.FETCH_MOVIES_START, listLength, imgConfig, movieGenres };
}

export const fetchMoviesInitSuccess = (fetchedMovies) => {
  return { type: actionTypes.FETCH_MOVIES_INIT_SUCCESS, fetchedMovies };
}

export const fetchMoviesInitFail = (error) => {
  return { type: actionTypes.FETCH_MOVIES_INIT_FAIL, error };
}

// ================================= //
//            MOVIE DETAILS          //
// ================================= //

export const getMovieDetailsStart = () => {
  return { type: actionTypes.GET_MOVIE_DETAILS_START }
}

export const getMovieDetails = (movieId) => {
  return { type: actionTypes.GET_MOVIE_DETAILS, movieId }
}

export const getMovieDetailsSuccess = (fetchedDetails, config) => {
  return { type: actionTypes.GET_MOVIE_DETAILS_SUCCESS, fetchedDetails, config }
}

export const getMovieDetailsFail = (error) => {
  return { type: actionTypes.GET_MOVIE_DETAILS_FAIL, error }
}

export const clearMovieDetails = () => {
  return { type: actionTypes.CLEAR_MOVIE_DETAILS }
}

export const resetTranslateMovie = () => {
  return { type: actionTypes.RESET_TRANSLATE_MOVIE }
}

// ================================= //
//              CAROUSEL             //
// ================================= //
export const changeCarouselMovie = (movieId, element) => {
  return { type: actionTypes.CHANGE_CAROUSEL_MOVIE, movieId, element };
}

export const changeCarouselMovieArrow = (arrowDirection, element, showLength) => {
  return { type: actionTypes.CHANGE_CAROUSEL_MOVIE_ARROW, arrowDirection, element, showLength };
}

export const resizeCarouselSlide = (element) => {
  return { type: actionTypes.RESIZE_CAROUSEL_SLIDE, element };
}