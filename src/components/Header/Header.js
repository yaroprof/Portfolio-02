import React, { useState } from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'


import logo from '../pic/logo.png'


const Header = () => {

    // - scroll header at top position
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header')
        header.classList.toggle('active', window.scrollY > 100)
    })
    // - toggle menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                    </div>
                    <div className='navLink'>
                        <ul className='link f_flex uppercase'>
                            {/* <ul className='link f_flex uppercase' /> */}
                            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)} />

                            <li><a href='#home'>home</a></li>
                            <li><a href='#features'>features</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#resume'>resume</a></li>
                            <li><a href='#clients'>clients</a></li>
                            <li><a href='#blog'>blog</a></li>
                            <li><a href='#contact'>contact</a></li>
                            <li><button className='home-btn'>BUY NOW</button></li>
                        </ul>
                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <FontAwesomeIcon icon={faXmark} className='close home-btn' /> :
                                <FontAwesomeIcon icon={faBars} className='open' />}

                        </button>
                    </div>

                </div>
            </header>

            {/* <section className='demo'>
                
            </section> */}
        </>
    )
}

export default Header