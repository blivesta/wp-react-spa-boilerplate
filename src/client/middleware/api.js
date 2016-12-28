import Wpapi from 'wpapi'
import { WP_PARAMS } from '../constants'

const wp = new Wpapi({ endpoint: WP_PARAMS.API })

function api (baseURL, param) {
  let res
  switch (baseURL) {
    case 'frontPage': {
      res = wp.pages().id(WP_PARAMS.PAGE_ON_FRONT).embed()
      break
    }
    case 'page': {
      res = wp.pages().slug(param).embed()
      break
    }
    case 'posts': {
      res = wp.posts().page(param).perPage(WP_PARAMS.POSTS_PER_PAGE).embed()
      break
    }
    case 'single': {
      res = wp.posts().id(param).embed()
      break
    }
    default : {
      res = wp.posts()
      break
    }
  }
  return res
}

export default api
