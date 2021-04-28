import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://media.vanityfair.com/photos/606b8b8c085a185aa59af1e2/master/w_2560%2Cc_limit/DMX-2021-GettyImages-517830522.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link" to="/">
                ProjectZero
              </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/countyresources">
                  Resources By County
                </Link>
                <Link className="navbar-item" to="/communityresources">
                  Resources By Community
                </Link>
                <Link className="navbar-item" to="/allresources">
                  Browse All Resources
                </Link>
                <hr className="navbar-divider"></hr>
                <Link className="navbar-item" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to="/sign">
                  <strong>Sign In With Google</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
