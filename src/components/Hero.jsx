import React from 'react'
import PrintivoCardAd from "../assets/Card_address.png";
const Hero = () => {
  return (
    <section className='hero-section' >
<div className="d-flex container-fluid justify-content-between p-4 pt-5 ps-lg-5">
    <div className="ps-lg-5 ms-lg-3">
        <h1 className='hero-title'>Quality Prints</h1>
        <h4 className='p-2' style={{color: '#708095' , fontSize: '22px'}}>Shipped to your doorstep</h4>
        <p className='fw-bold pt-4' style={{fontSize: '16px',color: '#384A62'}}>What would you like to print today?</p>
        <div className="search">
    <input type="text" className="search__input" placeholder="Search for Business cards, T-shirts, Mugs, etc" />
    <button className="search__button">
        <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
    </button>
</div>    </div>
    <div className="d-none d-lg-flex">
        <img src={PrintivoCardAd} alt="" width={'400px'} />
    </div>
</div>
<div className="text-center p-4" style={{backgroundColor: '#f3b1cd'}}>
    <h5 className='fw-bold'>Corporate Gifts <a href="" className='text-dark fw-light text-decoration-underline'>Shop now</a></h5>
</div>
    </section>
  )
}

export default Hero