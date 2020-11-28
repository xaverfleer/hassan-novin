import '../assets/css/style.css'

import React from 'react'
import { Link } from 'gatsby'

const LinkEntry = ({ props }) => (
  <li className="nav__entry">
    <Link className="link" to={props.to}>
      {props.label}
    </Link>
  </li>
)

const Layout = ({ children }) => (
  <div className="wrapper">
    <aside className="aside">
      <Link to="/" className="link logo">
        bern-orient.ch – Orientalisches Catering in Bern
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <LinkEntry props={{ to: '/contact', label: 'Kontakt' }} />
        </ul>
      </nav>
    </aside>
    <main>{children}</main>
    <footer className="footer">
      Created with ♥ by{' '}
      <a className="footer__link" href="mailto:xaver.fleer@gmail.com">
        Xaver Fleer
      </a>
    </footer>
  </div>
)

export default Layout
