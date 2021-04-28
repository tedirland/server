import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://media.vanityfair.com/photos/606b8b8c085a185aa59af1e2/master/w_2560%2Cc_limit/DMX-2021-GettyImages-517830522.jpg"
              alt="logo"
            />
          </a>
          <a
            role="button"
            href="/"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/">
                  About
                </a>
                <a className="navbar-item" href="/">
                  Resources By County
                </a>
                <a className="navbar-item" href="/">
                  Resources By Community
                </a>
                <a className="navbar-item" href="/">
                  Browse All Resources
                </a>
                <hr classname="navbar-divider"></hr>
                <a className="navbar-item" href="/">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/">
                  <strong>Sign Up</strong>
                </a>
                <a className="button is-light" href="/">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
