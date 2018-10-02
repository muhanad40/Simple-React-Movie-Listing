import React from 'react';
import { connect } from "react-redux";

import Filters from '../components/Filters';

const mapStateToProps = (state) => {
  return {
    genres: state.data.availableGenres
  };
};

export default connect(mapStateToProps)(Filters);