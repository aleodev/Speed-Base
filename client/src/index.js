import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'regenerator-runtime/runtime'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import App from './js/App'

/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./js/App', () => {
    // eslint-disable-next-line
    const nextApp = require('./js/App').default;
    render(nextApp)
  })
}
