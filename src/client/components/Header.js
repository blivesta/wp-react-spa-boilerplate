import React from 'react'
import { Link } from 'react-router'
import { WP_PARAMS } from '../constants'

const Header = (props) => {
  return (
    <header>
      <h1>
        <Link to='/'>{WP_PARAMS.SITE_TITLE}</Link>
      </h1>
      <nav id='primary'>
        <ul className='ListInline'>
          <li>
            <Link to='/archives'>Posts</Link>
          </li>
          <li>
            <Link to='/sample-page'>Sample page</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
