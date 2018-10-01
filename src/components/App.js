import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filters from './Filters';
import Card from './Card';

export default class App extends Component {
  componentWillMount() {
    this.props.getNowPlaying();
  }

  render() {
    return (
      <div className="now-showing">
        <h1 className="now-showing__heading">Now showing</h1>

        <div className="now-showing__content">
          <Filters />

          <ul className="movies">
            {this.props.movies.map(movie => (
              <li><Card key={ movie.id } { ...movie } /></li>
            ))};
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getNowPlaying: PropTypes.func.isRequired
};
