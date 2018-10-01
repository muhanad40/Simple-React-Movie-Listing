import React, { Component } from 'react';
import { connect } from "react-redux";

const actions = require('../actions');
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    movies: state.data.movies
  }
};

export default connect(mapStateToProps, actions)(App);