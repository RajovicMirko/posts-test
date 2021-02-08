import "./posts.scss"
import React from "react"
import { graphql } from "gatsby"
import PostCard from "../components/post-card"

const Posts = ({
  data: {
    allRestApiPosts: { edges },
  },
}) => {
  const posts = edges.map(edge => (
    <PostCard key={edge.node.id} post={edge.node} />
  ))

  return (
    <div className="container">
      <div className="posts">{posts}</div>
    </div>
  )
}

export default Posts

export const pageQuery = graphql`
  query {
    allRestApiPosts {
      edges {
        node {
          id
          userId
          title
          body
        }
      }
    }
  }
`
