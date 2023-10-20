import React from 'react'
import './Navbar.css'
import WhatsappIcon from '../assets/whatsapp-icon.svg'
import NigFlag from '../assets/flag-for-nigeria.svg'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div className="container-fluid justify-content-around">
  <ul className="nav d-lg-flex d-none gap-5">
        <li className="nav-item">
          <a className="nav-link" href="#">Cost Calculator</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Discover Stores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Track Orders</a>
        </li>
     
      </ul>
      <ul className="nav gap-lg-5">
        <li className="nav-item">
          <a className="nav-link d-flex" href="#"><span className='d-none d-md-flex'>Need help? Call:</span> <span className='text-primary'>+2348091084333</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><img src={WhatsappIcon} alt="" /></a>
        </li>
        <li className="nav-item border border-2 rounded-5">
          <a className="nav-link" href="#"><img src={NigFlag} alt=""  /> Nigeria</a>
        </li>
      </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar