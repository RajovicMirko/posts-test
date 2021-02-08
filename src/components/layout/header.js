import "./header.scss"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title }) => (
  <header>
    <div className="container">
      <p className="title">{title}</p>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: "Title sample",
}

export default Header
