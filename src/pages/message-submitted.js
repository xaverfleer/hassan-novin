import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default () => {
  const siteDescription =
    'Your message was submitted. Thank you for your message.'

  return (
    <Layout>
      <Helmet>
        <title>bern-orient | Message is submitted</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Message is submitted</h1>
      <p>
        Thank you very much for your message. I will reply as soon as possible.
      </p>
    </Layout>
  )
}
