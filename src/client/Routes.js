import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import ReactGA from 'react-ga'
import Root from './containers/Root'
import Frontpage from './containers/Frontpage'
import Archive from './containers/Archive'
import Single from './containers/Single'
import Page from './containers/Page'
import NoMatch from './containers/NoMatch'

ReactGA.initialize('UA-000000-01')

function logPageView () {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const Routes = ({ history }) => {
  return (
    <Router history={history} onUpdate={logPageView} key={Math.random()}>
      <Route path='/' component={Root}>
        <IndexRoute component={Frontpage} />
        <Route path='sample-page' component={Page} />
        <Route path='archives' component={Archive} />
        <Route path='archives/:id' component={Single} />
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  )
}

export default Routes
