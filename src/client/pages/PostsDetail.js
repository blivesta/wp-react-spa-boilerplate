import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import axios from 'axios'

const WP_PARAMETERS = global.WP_PARAMETERS

class PostsDetail extends React.Component {

  constructor () {
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  render () {
    return (
      <DocumentTitle title={this.state.title}>
        <main className='Transition'>
          <ReactCSSTransitionGroup
            component='main'
            transitionName='Transition'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <h2 key={this.state.title}>{this.state.title}</h2>
            <article key={this.state.id} dangerouslySetInnerHTML={{__html: this.state.content}} />
          </ReactCSSTransitionGroup>
        </main>
      </DocumentTitle>
    )
  }

  componentDidMount () {
    axios.get(`${WP_PARAMETERS.BASE_API}posts/?filter[name]=${this.props.params.slug}`).then((response) => {
      console.log(response)
      this.setState({
        id: response.data[0].id,
        title: response.data[0].title.rendered,
        content: response.data[0].content.rendered,
        slug: this.props.params.slug
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

}

export default PostsDetail
