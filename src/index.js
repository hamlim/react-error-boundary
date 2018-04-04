import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {
  static propTypes = {
    onCaughtError: PropTypes.func,
    onError: PropTypes.func,
    children: PropTypes.func,
  }
  static defaultProps = {
    onCaughtError() {},
    onError() {},
    children() {},
  }
  state = {
    error: null,
  }
  componentDidCatch(error) {
    this.setState(() => ({ error }))
    this.props.onError(error)
    this.props.onCaughtError(error)
  }
  render() {
    return this.props.children(this.state.error)
  }
}
