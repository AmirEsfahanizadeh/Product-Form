import profilePicture from 'assets/images/profile.jpg'
import React from 'react'

const Header = () => {
  return (
    <header className="topbar navbarbg" data-navbarbg="skin6">
      <nav className="navbar navbar-light h-100">
        <div className="collapse navbarbg show">
          <div className="dropdown">
            <img
              src={profilePicture}
              alt="user"
              className="rounded-circle"
              width="31"
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
