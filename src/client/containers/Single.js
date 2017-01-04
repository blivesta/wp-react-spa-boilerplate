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
      params,
      loading
    } = this.props

    getSingle(params, loading)
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
  return {
    id: state.post.id,
    title: state.post.title,
    content: state.post.content,
    loading: state.post.loading
  }
}

export default connect(mapStateToProps, {getSingle})(Single)
