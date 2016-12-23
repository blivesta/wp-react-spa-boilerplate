import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import Wpapi from 'wpapi'

const WP_PARAMETERS = global.WP_PARAMETERS
const wp = new Wpapi({ endpoint: WP_PARAMETERS.API })

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
    wp.posts().id(this.props.params.id).embed().then((res) => {
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

}

export default PostsDetail
