import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './Routes'

const rootElm = document.getElementById('root')

render(
  <AppContainer>
      <Routes />
  </AppContainer>,
  rootElm
)

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const HotRoutes = require('./Routes').default
    render(
      <AppContainer>
          <HotRoutes />
      </AppContainer>,
      rootElm
    )
  })
}
