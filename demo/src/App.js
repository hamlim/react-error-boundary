import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ErrorBoundary from './errorboundary'
const ThrowingElement = _ => {
  throw new Error('Error Message Here!')
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ErrorBoundary>
          {err =>
            err
              ? <h1>
                  {err.message}
                </h1>
              : <h2>
                  No Errors 👍🏼 or are there? <ThrowingElement />
                </h2>}
        </ErrorBoundary>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
