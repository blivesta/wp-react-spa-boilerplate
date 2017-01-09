import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  REQUEST_API,
  RECEIVE_ARCHIVES,
  RECEIVE_PAGE
} from '../constants'

function isLoading (state = true, action) {
  switch (action.type) {
    case REQUEST_API:
      return true
    case RECEIVE_ARCHIVES:
    case RECEIVE_PAGE:
      return false
    default:
      return state
  }
}

function archive (state = { posts: [] }, action) {
  switch (action.type) {
    case RECEIVE_ARCHIVES:
      return Object.assign({}, state, {
        posts: action.payload.posts,
        pageNum: action.payload.pageNum,
        totalPages: parseInt(action.payload.totalPages)
      })
    default:
      return state
  }
}

function page (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PAGE:
      return Object.assign({}, state, {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content
      })
    default:
      return state
  }
}

const data = combineReducers({
  isLoading,
  page: page,
  archive: archive,
  single: page
})

const rootReducer = combineReducers({
  data,
  routing: routerReducer
})

export default rootReducer
