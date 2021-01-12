import { Link, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

const page = ({ data }) => {
  const siteDescription = 'Orientalisches Catering in Bern.'

  const { frontmatter } = data.md

  return (
    <Layout>
      <Helmet>
        <title>bern-orient.ch | Startseite</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>{frontmatter.heading}</h1>
      <h2>{frontmatter.aboutMe.heading}</h2>
      <p>{frontmatter.aboutMe.description}</p>
      <h2>{frontmatter.offer.heading}</h2>
      {frontmatter.offer.offers.map((o) => (
        <>
          <h3>{o.heading}</h3>
          <p>{o.description}</p>
        </>
      ))}
      <h2>{frontmatter.gallery.heading}</h2>
      <div className="gallery">
        {frontmatter.gallery.entries.map((e) => (
          <article className="gallery__entry">
            <Img fluid={e.img.childImageSharp.fluid} />
            <h3>{e.heading}</h3>
            <p>{e.description}</p>
          </article>
        ))}
      </div>
      <h2>{frontmatter.contact.heading}</h2>
      <p>
        {frontmatter.contact.description}{' '}
        <Link to={'/contact'}>→&nbsp;Kontaktformular</Link>
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    md: markdownRemark(frontmatter: { templateKey: { eq: "landingPage" } }) {
      frontmatter {
        heading
        aboutMe {
          heading
          description
        }
        offer {
          heading
          offers {
            heading
            description
          }
        }
        gallery {
          heading
          entries {
            alt
            description
            heading
            img {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        contact {
          heading
          description
        }
      }
    }
  }
`

export default page
