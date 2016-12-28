import React from 'react'
import DocumentTitle from 'react-document-title'

const NoMatch = () => {
  const title = 'Not Found'
  return (
    <DocumentTitle title={title}>
      <main>
        <h2>{title}</h2>
      </main>
    </DocumentTitle>
  )
}

export default NoMatch
