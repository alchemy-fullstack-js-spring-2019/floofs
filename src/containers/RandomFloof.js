import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Floof from '../components/Floof';
import { fetchFloof } from '../actions/floofActions';
import { getFloofImage, getFloofLoading } from '../selectors/floofSelectors';
import { withFetch } from './withFetch';

const mapStateToProps = state => ({
  image: getFloofImage(state),
  loading: getFloofLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFloof());
  },
  clickHandler() {
    dispatch(fetchFloof());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Floof));
