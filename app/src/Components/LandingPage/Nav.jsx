import React from 'react'

function Nav() {
  return (
    <div className='nav'>
        <div className="logo_container">
            Logo
        </div>

        <div className="nav_main_items">
            <div className="nm_item">Who are we?</div>
            <div className="nm_item">For Learning</div>
            <div className="nm_item">For Fund</div>
            <div className="nm_item">Using Project Name</div>
            <div className="nm_item">Media</div>
            <div className="nm_item">Contact</div>
        </div>

        <div className="nav_auth_items">
            <div className="na_item solid">Register</div>
            <div className="na_item">Login</div>
        </div>
        
    </div>
  )
}

export default Nav