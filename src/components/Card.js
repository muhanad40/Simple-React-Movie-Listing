import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <a href="#" className="card">
        <div className="card__image" style={{ backgroundImage: 'url(https://via.placeholder.com/238x304' }}>
          <span className="card__year">2007</span>
        </div>

        <div className="card__info">
          <div className="card__copy">
            <span className="card__title">Logan</span>

            <p className="card__genres">Action, Adventure, Fantasy</p>
          </div>

          <div className="card__rating">
            4.0
          </div>
        </div>
      </a>
    );
  }
}