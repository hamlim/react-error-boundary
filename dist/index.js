import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ErrorBoundary extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), Object.defineProperty(this, "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        error: null
      }
    }), _temp;
  }

  componentDidCatch(error) {
    this.setState(() => ({
      error
    }));
    this.props.onCaughtError(error);
  }

  render() {
    return this.props.children(this.state.error);
  }

}
Object.defineProperty(ErrorBoundary, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onCaughtError: PropTypes.func,
    children: PropTypes.func
  }
});
Object.defineProperty(ErrorBoundary, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onCaughtError() {},

    children() {}

  }
});