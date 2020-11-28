import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>f-save | Seite nicht gefunden</title>
        <meta name="description" content="Seite nicht gefunden" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div id="main">
        <h1>Seite nicht gefunden</h1>
        <p>
          Die Seite ist entweder momentan nicht verfügbar, wurde verschoben oder
          existiert nicht mehr.
        </p>
        <Link to="/">← Zurück zur Startseite</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
