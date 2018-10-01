const initialState = {
  filtersOpen: false,
  movies: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_NOW_PLAYING':
      return {
        ...state,
        movies: action.movies
      };

    default:
      return state;
  }
};

export default dataReducer;