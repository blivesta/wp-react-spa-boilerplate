import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import DevTools from '../components/DevTools'

const Root = ({ children }) => {
  let tool

  if (process.env.NODE_ENV !== 'production') {
    tool = <DevTools />
  }

  return (
    <div className='Container Container--slim'>
      <Header />
      {children}
      <Footer />
      {tool}
    </div>
  )
}

export default Root
