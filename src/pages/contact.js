import { navigate } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const contactEmail = 'essen@bern-orient.ch'

const ContactFormEntry = ({ props }) => {
  function handleInputChange(e) {
    const inputElement = e.target
    const entryElement = e.target.parentElement
    const hasInput = 0 < inputElement.value.length

    hasInput
      ? entryElement.classList.add('contact-form__entry--non-empty')
      : entryElement.classList.remove('contact-form__entry--non-empty')
  }

  const inputId = `contact-form-${props.name}`

  return (
    <div className="contact-form__entry">
      {props.type === 'text' && (
        <input
          className="contact-form__input"
          id={inputId}
          name={props.name}
          onInput={handleInputChange}
          required={props.required}
          title={props.label}
          type={props.type}
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          className="contact-form__input"
          id={`contact-form-${props.name}`}
          name={props.name}
          onInput={handleInputChange}
          required={props.required}
          rows="8"
          title={props.label}
        ></textarea>
      )}
      <label className="contact-form__label" for={inputId}>
        {props.label}
        <span class="contact-form__required-indicator">
          {props.required && '*'}
        </span>
      </label>
    </div>
  )
}

function getFormData(formElem) {
  return [].slice
    .call(formElem)
    .map(({ name, value }) => ({ name, value }))
    .filter(({ name }) => name !== 'submit')
    .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {})
}

function getPayload(formElem) {
  const formData = getFormData(formElem)
  return JSON.stringify({ formData, recipient: contactEmail })
}

function handleError() {
  alert(
    `Senden der Nachricht fehlgeschlagen.\nBitte versuchen Sie es später noch einmal oder kontaktieren Sie mich unter ${contactEmail}.`
  )
}

function handleSuccess(formElem) {
  formElem.reset()
  navigate('/message-submitted/')
}

function handleSubmit(event) {
  event.preventDefault()
  const formElem = event.currentTarget
  const payload = getPayload(formElem)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', `/.netlify/functions/sendMessage`)
  xhr.send(payload)
  xhr.addEventListener('load', () => {
    switch (xhr.status) {
      case 200:
        handleSuccess(formElem)
        break
      default:
        handleError()
        break
    }
  })
  xhr.addEventListener('error', () => {
    handleError()
  })
}

const page = () => {
  const siteDescription = 'bern-orient | Kontakt'

  return (
    <Layout>
      <Helmet>
        <title>{siteDescription}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>Kontakt</h1>
      <p>
        Ich freue mich über Ihre Anfrage, Ihren Spezialwunsch, Ihre Frage, Ihre
        Anregung oder sonstige Nachricht.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__entries">
          <ContactFormEntry
            props={{
              label: 'Name',
              name: 'name',
              type: 'text',
              required: true,
            }}
          />
          <ContactFormEntry
            props={{
              label: 'Telefon oder E-Mail',
              name: 'contact',
              type: 'text',
              required: true,
            }}
          />
          <ContactFormEntry
            props={{
              label: 'Nachricht',
              name: 'message',
              type: 'textarea',
              required: true,
            }}
          />
        </div>
        <button className="contact-form__submit" name="submit">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default page
