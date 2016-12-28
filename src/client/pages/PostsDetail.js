import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import api from '../middleware/api'

class PostsDetail extends React.Component {

  constructor () {
    super()
    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount () {
    api('single', this.props.params.id).then((res) => {
      console.log(res)
      this.setState({
        id: res.id,
        title: res.title.rendered,
        content: res.content.rendered
      })
    }).catch((err) => {
      console.log(err)
    })
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
}

export default PostsDetail
