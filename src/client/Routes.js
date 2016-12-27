import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactGA from 'react-ga'

import Defalult from './container/Default'
import About from './pages/About'
import Page from './pages/Pages'
import Frontpage from './pages/Frontpage'
import Posts from './pages/Posts'
import PostsDetail from './pages/PostsDetail'
import NoMatch from './pages/NoMatch'

ReactGA.initialize('UA-000000-01')

function logPageView () {
  console.log(`logPageView: ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

const Routes = () => {
  return (
    <Router history={browserHistory} onUpdate={logPageView} key={Math.random()}>
      <Route path='/' component={Defalult}>
        <IndexRoute component={Frontpage} />
        <Route path='about' component={About} />
        <Route path='sample-page' component={Page} />
        <Route path='archives' component={Posts} />
        <Route path='archives/:id' component={PostsDetail} />
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  )
}

export default Routes
