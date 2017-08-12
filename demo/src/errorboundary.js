import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      error: null
    }, _temp;
  }

  componentDidCatch(error) {
    this.setState(() => ({ error }));
    this.props.onCaughtError(error);
  }
  render() {
    return this.props.children(this.state.error);
  }
}
ErrorBoundary.propTypes = {
  onCaughtError: PropTypes.func,
  children: PropTypes.func
};
ErrorBoundary.defaultProps = {
  onCaughtError() {},
  children() {}
};
