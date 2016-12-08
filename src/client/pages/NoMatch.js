import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

class NoMatch extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Not Found.',
      content: ''
    }
  }

  render () {
    return (
      <DocumentTitle title={this.state.title}>
        <main>
          <h2>{this.state.title}</h2>
        </main>
      </DocumentTitle>
    )
  }
}

export default NoMatch
