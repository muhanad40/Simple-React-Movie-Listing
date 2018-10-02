import React, { Component } from 'react';
import { getGenres } from '../utils';

const Card = (props) => (
  <a href="#" className="card">
    <div className="card__image" style={{ backgroundImage: `url(${ props.poster_path })` }}>
      <span className="card__year">{ props.release_date.split('-')[0] }</span>
    </div>

    <div className="card__info">
      <div className="card__copy">
        <span className="card__title">{ props.title }</span>

        <p className="card__genres">{ getGenres(props.genre_ids, props.genres) }</p>
      </div>

      <div className="card__rating">
        { props.vote_average }
      </div>
    </div>
  </a>
);

export default Card;
