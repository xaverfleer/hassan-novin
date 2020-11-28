import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const page = () => {
  const siteDescription = 'f-save | Contact'

  return (
    <Layout>
      <Helmet>
        <title>{siteDescription}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <p>
        Kennst du andere Lebensmittel de gerettet werden können? Ist einer der
         Einträge nicht mehr aktuell? Hast du sonstige Fragen oder Anregungen?
      </p>
      <p>
        Wir freuen uns über auf deine Nachricht. Am besten erreichst du uns
        unter <a href="mailto:xaver.fleer+f-save.ch">xaver.fleer+f-save.ch</a>.
      </p>
    </Layout>
  )
}

export default page
