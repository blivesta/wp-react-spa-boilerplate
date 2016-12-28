import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { WP_PARAMS } from '../constants'
import api from '../middleware/api'

class Frontpage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Home',
      content: ''
    }
  }

  componentDidMount () {
    if (WP_PARAMS.PAGE_ON_FRONT !== '0') {
      api('frontPage').then((res) => {
        this.setState({
          id: res.id,
          title: res.title.rendered,
          content: res.content.rendered
        })
      }).catch((err) => {
        console.log(err)
      })
    } else {
      this.setState({
        title: 'Frontpage',
        content: 'No static Frontpage is selected.'
      })
    }
  }

  render () {
    return (
      <DocumentTitle title={this.state.title}>
        <main className='Transition'>
          <h2>{this.state.title}</h2>
          <ReactCSSTransitionGroup
            transitionName='Transition'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <article key={this.state.id} dangerouslySetInnerHTML={{__html: this.state.content}} />
          </ReactCSSTransitionGroup>
        </main>
      </DocumentTitle>
    )
  }
}

export default Frontpage
