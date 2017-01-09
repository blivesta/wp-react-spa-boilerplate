import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import rootReducer from './reducers'
import configureStore from './store/configureStore'
import Routes from './Routes'

const store = configureStore(rootReducer)
const history = syncHistoryWithStore(browserHistory, store)
const rootElm = document.getElementById('root')

render(
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </AppContainer>,
  rootElm
)

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const HotRoutes = require('./Routes').default
    render(
      <AppContainer>
        <Provider store={store}>
          <HotRoutes history={history} />
        </Provider>
      </AppContainer>,
      rootElm
    )
  })
}
