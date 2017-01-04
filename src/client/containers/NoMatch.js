import React from 'react'
import { WP_SITE_TITLE } from '../constants'

const NoMatch = ({ title = 'Not Found' }) => {
  document.title = title + ' | ' + WP_SITE_TITLE

  return (
    <main>
      <h2>{title}</h2>
    </main>
  )
}

export default NoMatch
