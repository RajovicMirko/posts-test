import React from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  return <div>{navigate("/posts")}</div>
}

export default IndexPage
