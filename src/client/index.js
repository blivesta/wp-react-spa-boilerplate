import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from 'Router'

const rootElm = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElm
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Router').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElm
    )
  })
}
