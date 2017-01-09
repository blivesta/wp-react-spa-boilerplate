import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSingle } from '../actions'
import { WP_SITE_TITLE } from '../constants'
import Post from '../components/Post'
import Loader from '../components/Loader'

class Single extends Component {
  componentWillMount () {
    const {
      getSingle,
      params
    } = this.props

    getSingle(params)
  }

  render () {
    const { loading, title } = this.props

    document.title = WP_SITE_TITLE

    if (title) document.title = title + ' | ' + WP_SITE_TITLE

    return (
      <div>
        { loading ? <Loader /> : <Post {...this.props} /> }
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { single, isLoading } = state.data
  return {
    id: single.id,
    title: single.title,
    content: single.content,
    loading: isLoading
  }
}

export default connect(mapStateToProps, {getSingle})(Single)
