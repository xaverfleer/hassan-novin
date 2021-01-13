import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default () => {
  const siteDescription =
    'Ihre Nachricht wurde gesende. Vielen Dank für Ihre Nachricht.'

  return (
    <Layout>
      <Helmet>
        <title>bern-orient | Nachricht wurde gesendet</title>
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Nachricht wurde gesendet</h1>
      <p>Vielen Dank für Ihre Nachricht. Ich antworte so bald wie möglich.</p>
    </Layout>
  )
}
