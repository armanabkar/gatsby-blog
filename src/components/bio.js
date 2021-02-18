/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
        border: "2px dashed var(--textLink)",
        padding: "0.7rem 0.7rem 0 0.7rem",
        borderRadius: "8px",
      }}
    >
      <div className="hidden-mob">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 100,
            borderRadius: `10%`,
          }}
          imgStyle={{
            borderRadius: `10%`,
          }}
        />
      </div>
      <p style={{ marginBottom: "0.7rem" }}>
        Written by{" "}
        <strong style={{ color: "var(--textLink)" }}>{author.name}</strong>{" "}
        {author.summary}.{` `}
        <br />
        <p>
          You can follow me on{" "}
          <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> or{" "}
          <a href={`https://twitter.com/${social.instagram}`}>Instagram</a>, see
          some of my work on{" "}
          <a href={`https://twitter.com/${social.github}`}>GitHub</a>, or read
          more about me on{" "}
          <a href={`https://twitter.com/${social.linkedin}`}>LinkedIn</a>.
          <br />
          Please feel free to reach me via email at{" "}
          <a href="mailto: armanabkar@gmail.com">armanabkar@gmail.com</a>.
        </p>
      </p>
    </div>
  )
}

export default Bio
