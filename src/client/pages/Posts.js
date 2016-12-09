import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import axios from 'axios'

const WP_PARAMETERS = global.WP_PARAMETERS

class Posts extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Posts List',
      data: []
    }
  }

  componentDidMount (pageNum = 1) {
    const api = `${WP_PARAMETERS.BASE_API}posts?_embed&filter[paged]=${pageNum}&filter[posts_per_page]=${WP_PARAMETERS.POSTS_PER_PAGE}`
    axios.get(api, 'posts').then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    const node = this.state.data.map((data) => {
      const url = `/archives/${data.id}`
      return (
        <li key={data.id}>
          <Link to={url}>{data.title.rendered}</Link>
        </li>
      )
    })

    return (
      <DocumentTitle title={this.state.title}>
        <main className='Transition'>
          <h2>{this.state.title}</h2>
          <ReactCSSTransitionGroup
            component='ul'
            transitionName='Transition'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {node}
          </ReactCSSTransitionGroup>
        </main>
      </DocumentTitle>
    )
  }

}

export default Posts
