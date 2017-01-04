import { GET_FRONTPAGE, GET_ARCHIVES, GET_PAGE, GET_SINGLE } from '../constants'

export const post = (state = {}, action) => {
  let type = action.type
  if (type === GET_FRONTPAGE || type === GET_PAGE || type === GET_SINGLE) {
    const { id, title, content, loading } = action.payload
    return Object.assign({}, state, {
      id: id,
      title: title,
      content: content,
      loading: loading
    })
  }
  return state
}

export const archive = (state = { posts: [] }, action) => {
  if (action.type === GET_ARCHIVES) {
    const {pageNum, totalPages, posts, loading} = action.payload
    return Object.assign({}, state, {
      posts: posts,
      pageNum: pageNum,
      totalPages: parseInt(totalPages),
      loading: loading
    })
  }
  return state
}
