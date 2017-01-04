import React from 'react'
import { Link } from 'react-router'
import { WP_SITE_TITLE } from '../constants'

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>{WP_SITE_TITLE}</Link>
      </h1>
      <nav>
        <ul className='ListInline'>
          <li>
            <Link to='/archives'>Posts</Link>
          </li>
          <li>
            <Link to='/sample-page'>Sample page</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
