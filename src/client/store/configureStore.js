import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from '../components/DevTools'

export default function configureStore (reducer, initialState) {
  let store
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

  if (process.env.NODE_ENV === 'production') {
    store = createStoreWithMiddleware(reducer, initialState)
  } else {
    const enhancer = compose(DevTools.instrument())

    store = createStoreWithMiddleware(reducer, initialState, enhancer)

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(require('../reducers').default)
      })
    }
  }

  return store
}
