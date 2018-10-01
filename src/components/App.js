import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Filters from './Filters';
import Card from './Card';

export default class App extends Component {
  componentWillMount() {
    this.props.getNowPlaying();
    this.props.getGenres();
  }

  render() {
    return (
      <div className="now-showing">
        <h1 className="now-showing__heading">Now showing</h1>

        <div className="now-showing__content">
          <Filters />

          <ul className="movies">
            <li><Card /></li>

            <li><Card /></li>

            <li><Card /></li>

            <li><Card /></li>

            <li><Card /></li>
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getNowPlaying: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired
};
