import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import api from '../middleware/api'

class Page extends React.Component {

  constructor () {
    super()
    this.state = {
      title: 'Loading'
    }
  }

  componentDidMount () {
    api('page', this.props.route.path).then((res) => {
      this.setState({
        id: res[0].id,
        title: res[0].title.rendered,
        content: res[0].content.rendered
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <DocumentTitle title={this.state.title}>
        <main className='Transition'>
          <h2>{this.state.title}</h2>
          <ReactCSSTransitionGroup
            className=''
            component='section'
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

export default Page
