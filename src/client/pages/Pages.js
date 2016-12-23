import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import Wpapi from 'wpapi'

const WP_PARAMETERS = global.WP_PARAMETERS
const wp = new Wpapi({ endpoint: WP_PARAMETERS.API })

class Page extends React.Component {

  constructor () {
    super()
    this.state = {
      title: 'Loading'
    }
  }

  render () {
    console.log('render')
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

  componentDidMount () {
    wp.pages().slug(this.props.params.slug).embed().then((res) => {
      this.setState({
        id: res[0].id,
        title: res[0].title.rendered,
        content: res[0].content.rendered
      })
    }).catch((err) => {
      console.log(err)
    })
  }

}

export default Page
