import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArchive } from '../actions'
import { WP_SITE_TITLE } from '../constants'
import PostsList from '../components/PostsList'
import Loader from '../components/Loader'

class Archive extends Component {
  componentWillMount () {
    const {
      getArchive,
      pageNum = 1,
      loading = true,
      totalPages,
      posts
    } = this.props

    getArchive(loading, pageNum, totalPages, posts)
  }

  render () {
    const { posts, loading } = this.props
    let list = posts.map((post) => {
      return (
        <PostsList key={post.id} {...post} />
      )
    })

    document.title = 'Archive | ' + WP_SITE_TITLE

    return (
      <div>
        {loading ? <Loader /> : list}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.archive.posts,
    pageNum: state.archive.pageNum,
    totalPages: state.archive.totalPages,
    loading: state.archive.loading
  }
}

export default connect(mapStateToProps, {getArchive})(Archive)
