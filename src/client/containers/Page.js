import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPage} from '../actions'
import { WP_SITE_TITLE } from '../constants'
import Post from '../components/Post'
import Loader from '../components/Loader'

class Page extends Component {
  componentWillMount () {
    const {
      getPage,
      route
    } = this.props

    getPage(route)
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
  const { page, isLoading } = state.data
  return {
    id: page.id,
    title: page.title,
    content: page.content,
    loading: isLoading
  }
}

export default connect(mapStateToProps, {getPage})(Page)
