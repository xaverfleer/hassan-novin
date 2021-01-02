import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const page = () => {
  const siteDescription = 'Orientalisches Catering in Bern.'

  return (
    <Layout>
      <Helmet>
        <title>bern-orient.ch | Startseite</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>Orientalisches Catering in Bern</h1>
      <h2>Über mich</h2>
      <p>
        Für mich ist orientalisches Essen ein Fenster in meine Heimat. Gerichte
        zubereiten, wie ich sie aus meiner Heimat kenne, erfüllt mich mit Freude
        und Leben. Und nicht nur mich: wer mein Essen kennt, weiss was ich
        meine.
      </p>
      <h2>Angebot</h2>
      <h3>Beratung</h3>
      <p>
        Gerne Berate ich Sie bei der Wahl des passenden Menüs, perfekt
        abgestimmt auf Ihren Anlass. Von Albalu Polow über Falafel, Kuku,
        Nargesi bis Zeytun parvarde fehlt nichts in meinem Repertoire.
      </p>
      <h3>Kochen, Lieferung und Service</h3>
      <p>
        Ich bereite das Essen in meiner Küche vor und liefere es Essbereit an
        Ihren Anlass. Auf Wunsch serviere ich das Essen am Buffet oder als
        Tellerservice.
      </p>
      <h2>Kostproben für's Auge</h2>
      <p>Kostproben folgen.</p>
      <h2>Kontakt</h2>
      Ich freue mich über Ihre Anfrage, Ihren Spezialwunsch, Ihre Frage, Ihre
      Anregung oder sonstige Nachricht.{' '}
      <Link to={'/contact'}>→ Kontaktformular</Link>
    </Layout>
  )
}

export default page
