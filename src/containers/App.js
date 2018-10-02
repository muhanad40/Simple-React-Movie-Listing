import React from 'react';
import { connect } from "react-redux";

const actions = require('../actions');
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    movies: state.data.filteredMovies,
    genres: state.data.genres
  }
};

export default connect(mapStateToProps, actions)(App);