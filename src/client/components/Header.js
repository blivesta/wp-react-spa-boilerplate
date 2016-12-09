import React from 'react'
import { Link } from 'react-router'
const WP_PARAMETERS = global.WP_PARAMETERS

const Header = (props) => {
  return (
    <header>
      <h1>
        <Link to='/'>{WP_PARAMETERS.SITE_TITLE}</Link>
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
