import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import axios from 'axios'

const WP_PARAMETERS = global.WP_PARAMETERS

class Frontpage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: 'Home',
      content: ''
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

  componentDidMount () {
    this.getContent()
  }

  getContent () {
    if (WP_PARAMETERS.PAGE_ON_FRONT !== '0') {
      axios.get(`${WP_PARAMETERS.BASE_API}pages/${WP_PARAMETERS.PAGE_ON_FRONT}`).then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title.rendered,
          content: response.data.content.rendered
        })
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      this.setState({
        title: 'Frontpage',
        content: 'No static Frontpage is selected.'
      })
    }
  }

}

export default Frontpage
