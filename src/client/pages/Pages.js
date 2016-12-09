import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import DocumentTitle from 'react-document-title'
import axios from 'axios'

const WP_PARAMETERS = global.WP_PARAMETERS

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
          <h2 key='aaa'>{this.state.title}</h2>
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
    axios.get(`${WP_PARAMETERS.BASE_API}pages?_embed&filter[name]=${this.props.params.slug}`).then((response) => {
      this.setState({
        id: response.data[0].id,
        title: response.data[0].title.rendered,
        content: response.data[0].content.rendered
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

}

export default Page
