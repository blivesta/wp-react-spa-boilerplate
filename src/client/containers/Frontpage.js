import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFrontpage } from '../actions'
import { WP_SITE_TITLE } from '../constants'
import Post from '../components/Post'
import Loader from '../components/Loader'

class Frontpage extends Component {
  componentWillMount () {
    const {
      getFrontpage,
      loading
    } = this.props

    getFrontpage(loading)
  }

  render () {
    const { loading, title } = this.props

    document.title = WP_SITE_TITLE

    if (title) document.title = title + ' | ' + WP_SITE_TITLE

    return (
      loading ? <Loader /> : <Post {...this.props} />
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

export default connect(mapStateToProps, {getFrontpage})(Frontpage)
