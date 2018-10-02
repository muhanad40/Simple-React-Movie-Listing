import React, { Component, Fragment } from 'react';

export default class Filters extends Component {
  constructor() {
    super();
    this.onFilterChange = this.onFilterChange.bind(this);
    this.state = {
      selectedGenreIds: []
    };
  }

  onFilterChange(e) {
    const isChecked = e.target.checked;
    let selectedGenreIds = this.state.selectedGenreIds;

    if (isChecked) {
      selectedGenreIds = [
        ...this.state.selectedGenreIds,
        parseInt(e.target.value, 10)
      ];
    } else if (!isChecked) {
      selectedGenreIds = this.state.selectedGenreIds.filter(genreId => genreId !== parseInt(e.target.value, 10));
    }

    this.setState({
      selectedGenreIds
    }, () => {
      this.props.filterByGenre(selectedGenreIds);

      // If last filter is unchecked, show all movies (aka clone movies for filter)
      if (selectedGenreIds.length === 0) {
        this.props.cloneMoviesForFiltering();
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="filters-device-overlay"></div>

        <aside className="filters">
          <div className="filters__device-close-btn">
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.783 13.635l-5.518-5.518 5.518-5.52a1.518 1.518 0 0 0 0-2.15 1.517 1.517 0 0 0-2.15 0L8.115 5.966 2.597.446a1.517 1.517 0 0 0-2.15 0 1.518 1.518 0 0 0 0 2.152l5.518 5.519-5.518 5.518a1.518 1.518 0 0 0 0 2.151 1.517 1.517 0 0 0 2.15 0l5.518-5.519 5.518 5.52a1.517 1.517 0 0 0 2.15 0 1.525 1.525 0 0 0 0-2.152z" fill="currentColor" fillRule="nonzero"/>
            </svg>
          </div>

          <div className="filters__item">
            <h2 className="filters__title">Genres</h2>

            <ul className="genres">
              {this.props.genres.map(genre => (
                <li key={ genre.id + genre.name }>
                  <input onChange={ this.onFilterChange } value={ genre.id } type="checkbox" id={ `genre-${ genre.id }` } />

                  <label htmlFor={ `genre-${ genre.id }` }>{ genre.name }</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filters__item">
            <h2 className="filters__title">Rating</h2>

            <div className="slider">
              <div className="slider__handle">
                <span>3</span>
              </div>

              <div className="slider__bar">
                <div className="slider__fill" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </aside>
      </Fragment>
    );
  }
}