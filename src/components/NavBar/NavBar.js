import React from 'react'

const NavBar = props => {
  return (
    // --- Navbar ---
    <nav className="navbar navbar-expand-md navbar-dark primary-color">

      {/* Navbar Brand */}
      <span className="navbar-brand">
        <img src="./assets/svg/click.svg" alt="icon" /> Clicky
      </span>

      <span className="navbar-text white-text">
        Score: {props.score}
      </span>

    </nav>
  )
}

export default NavBar