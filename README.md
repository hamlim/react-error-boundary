# React-Error-Boundary 🚯

An unopinionated `<ErrorBoundary />` React component for React 16+.

```JSX
<div>
  <ErrorBoundary
    onError={logError}
  >
    {error => error
      ? (
        <h1>Oh no an error occurred!</h1>
      )
      : (
        <Application />
      )
    }
  </ErrorBoundary>
</div>
```

## Props:

* `onError` method called after `<ErrorBoundary />` catches an error.
  * type `function`
  * Called with one argument, the `error` object thrown
* `children` function called inside render
  * Called with the error object, will be null initially
  * This is the only thing returned from render, so you have full control over rendering
