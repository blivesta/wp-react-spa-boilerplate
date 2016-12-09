import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactGA from 'react-ga'

import Defalult from 'container/Default'
import About from 'pages/About'
import Page from 'pages/Pages'
import Frontpage from 'pages/Frontpage'
import Posts from 'pages/Posts'
import PostsDetail from 'pages/PostsDetail'
import NoMatch from 'pages/NoMatch'

ReactGA.initialize('UA-000000-01')

class Root extends React.Component {
  _logPageView () {
    console.log(`_logPageView: ${window.location.pathname}`)
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }

  render () {
    return (
      <Router history={browserHistory} onUpdate={this._logPageView}>
        <Route path='/' component={Defalult}>
          <IndexRoute component={Frontpage} />
          {/* about */}
          <Route path='about' component={About} />
          {/* archives */}
          <Route path='archives' component={Posts} />
          <Route path='archives/:id' component={PostsDetail} />
          {/* Pages(page.php) */}
          <Route path='/:slug' component={Page} />
          {/* 404(404.php) */}
          <Route path='*' component={NoMatch} />
        </Route>
      </Router>
    )
  }
}

export default Root
