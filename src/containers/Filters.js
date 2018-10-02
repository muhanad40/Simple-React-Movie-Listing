import React from 'react';
import { connect } from "react-redux";

import * as actions from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = (state) => {
  return {
    genres: state.data.availableGenres
  };
};

export default connect(mapStateToProps, actions)(Filters);