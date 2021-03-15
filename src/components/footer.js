import React from "react"

const Footer = () => {
  return (
    <footer className="text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by {` `}
      <a href="/#">Lorem Ipsum</a>.
    </footer>
  )
}

export default Footer
