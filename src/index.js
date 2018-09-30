import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./styles/main.scss');
import Filters from './components/Filters';
import Card from './components/Card';

class App extends Component {
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

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
