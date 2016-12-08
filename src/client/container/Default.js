import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Defalult = ({ children, location }) => {
  return (
    <div className='Wrapper'>
      <Header />
      <ReactCSSTransitionGroup
        className=''
        component='section'
        transitionName='Transition'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {React.cloneElement(children, {
          key: location.pathname
        })}
      </ReactCSSTransitionGroup>
      <Footer />
    </div>
  )
}

export default Defalult
