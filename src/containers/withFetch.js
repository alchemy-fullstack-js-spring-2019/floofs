import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withFetch = Component => {
  class WithFetchHOC extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      fetch: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      if(this.props.loading) return <h1>LOADING</h1>;

      return <Component {...this.props} />;
    }
  }

  return WithFetchHOC;
};
