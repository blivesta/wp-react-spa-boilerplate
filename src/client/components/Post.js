import React from 'react'

const Post = ({ id, title, content }) => {
  return (
    <article key={id}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </article>
  )
}

export default Post
