import React from 'react'
import { Link } from 'react-router'

const PostsList = ({ id, title, date }) => {
  const url = `archives/${id}`
  return (
    <Link to={url} key={id}>
      <h2>{title.rendered}</h2>
      <p>{date}</p>
    </Link>
  )
}

export default PostsList
