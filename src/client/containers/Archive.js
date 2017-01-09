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
      totalPages,
      posts
    } = this.props

    getArchive(pageNum, totalPages, posts)
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
  const { archive, isLoading } = state.data
  return {
    posts: archive.posts,
    pageNum: archive.pageNum,
    totalPages: archive.totalPages,
    loading: isLoading
  }
}

export default connect(mapStateToProps, {getArchive})(Archive)
