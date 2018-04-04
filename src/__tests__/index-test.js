import React from 'react'
import { render } from 'react-testing-library'
import ErrorBoundary from '../index.js'

const Throw = () => {
  throw Error('Error!')
}

// Workaround react bug, see: https://github.com/facebook/react/issues/12485
const pauseErrorLogging = codeToRun => {
  const logger = console.error
  console.error = () => {}

  codeToRun()

  console.error = logger
}

describe('ErrorBoundary', () => {
  it('correctly renders children', () => {
    const children = jest.fn()
    const wrappedChildren = () => {
      children()
      return null
    }
    render(<ErrorBoundary>{wrappedChildren}</ErrorBoundary>)
    expect(children).toHaveBeenCalledTimes(1)
  })

  it('correctly calls the onError handler', () => {
    pauseErrorLogging(() => {
      const onError = jest.fn()
      render(
        <ErrorBoundary onError={onError}>
          {error => {
            if (error) {
              return <div>fallback</div>
            } else {
              return <Throw />
            }
          }}
        </ErrorBoundary>,
      )
      expect(onError).toHaveBeenCalledTimes(1)
    })
  })

  // Legacy API
  it('correctly calls the onCaughtError handler', () => {
    pauseErrorLogging(() => {
      const onCaughtError = jest.fn()
      render(
        <ErrorBoundary onCaughtError={onCaughtError}>
          {error => {
            if (error) {
              return <div>fallback</div>
            } else {
              return <Throw />
            }
          }}
        </ErrorBoundary>,
      )
      expect(onCaughtError).toHaveBeenCalledTimes(1)
    })
  })
})
