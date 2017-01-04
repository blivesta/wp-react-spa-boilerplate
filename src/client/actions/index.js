import Wpapi from 'wpapi'
import { GET_FRONTPAGE, GET_ARCHIVES, GET_PAGE, GET_SINGLE, WP_API, WP_POSTS_PER_PAGE, WP_PAGE_ON_FRONT } from '../constants'

const wp = new Wpapi({ endpoint: WP_API })

/*
 * frontpage
 */
export const getFrontpage = (loading) => {
  return function (dispatch) {
    dispatch(receivePost(GET_FRONTPAGE, '', '', '', loading = true))
    if (WP_PAGE_ON_FRONT !== '0') {
      wp.pages().id(WP_PAGE_ON_FRONT).embed().then((res) => {
        dispatch(receivePost(GET_FRONTPAGE, res.id, res.title.rendered, res.content.rendered, loading = false))
      }).catch((err) => {
        console.log(err)
      })
    } else {
      const notFrontpage = {
        id: '',
        title: 'Frontpage',
        content: 'No static Frontpage is selected.'
      }
      dispatch(receivePost(GET_FRONTPAGE, notFrontpage.id, notFrontpage.title, notFrontpage.content, loading = false))
    }
  }
}

/*
 * page
 */
export const getPage = (route, loading) => {
  return function (dispatch) {
    dispatch(receivePost(GET_PAGE, '', '', '', loading = true))
    return wp.pages().slug(route.path).embed().then((res) => {
      dispatch(receivePost(GET_PAGE, res[0].id, res[0].title.rendered, res[0].content.rendered, loading = false))
    }).catch((err) => {
      console.log(err)
    })
  }
}

/*
 * single
 */
export const getSingle = (params, loading) => {
  return function (dispatch) {
    dispatch(receivePost(GET_SINGLE, '', '', '', loading = true))
    return wp.posts().id(params.id).embed().then((res) => {
      dispatch(receivePost(GET_SINGLE, res.id, res.title.rendered, res.content.rendered, loading = false))
    }).catch((err) => {
      console.log(err)
    })
  }
}

function receivePost (type, id, title, content, loading) {
  return {
    type: type,
    payload: {
      id: id,
      title: title,
      content: content,
      loading: loading
    }
  }
}

/*
 * archive
 */
export const getArchive = (loading, pageNum = 1, totalPages, posts) => {
  return function (dispatch) {
    dispatch(receiveArchive(loading = true, pageNum, totalPages, posts))
    return wp.posts().page(pageNum).perPage(WP_POSTS_PER_PAGE).embed().then((res) => {
      const totalPages = res._paging.totalPages
      dispatch(receiveArchive(loading = false, pageNum, totalPages, res))
    }).catch((err) => {
      console.log(err)
    })
  }
}

function receiveArchive (loading, pageNum, totalPages, posts) {
  return {
    type: GET_ARCHIVES,
    payload: {
      pageNum: pageNum,
      totalPages: totalPages,
      posts: posts,
      loading: loading
    }
  }
}
