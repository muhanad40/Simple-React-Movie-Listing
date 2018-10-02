import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FiltersContainer from '../containers/Filters';
import Card from './Card';

export default class App extends Component {
  componentWillMount() {
    this.props.getConfiguration()
      .then(this.props.getGenres)
      .then(this.props.getNowPlaying);
  }

  render() {
    return (
      <div className="now-showing">
        <h1 className="now-showing__heading">Now showing</h1>

        <div className="now-showing__content">
          <FiltersContainer />

          <ul className="movies">
            {this.props.movies.map(movie => (
              <li key={ movie.id }><Card { ...movie } genres={ this.props.genres } /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getNowPlaying: PropTypes.func.isRequired
};
