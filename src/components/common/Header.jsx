import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import userImg from '/react-furni/images/user.svg'
import cartImg from '/react-furni/images/cart.svg'
import CartContex from '../../contex/CartContex'
export default function Header() {
    const [showNav, setShowNav] = useState(false)
    const { cart } = useContext(CartContex)

    const location = useLocation();

    useEffect(() => {
        setShowNav(false);
    }, [location.pathname]);
    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

            <div className="container">
                <NavLink className="navbar-brand" to="/">Furni<span>.</span></NavLink>

                <button className="navbar-toggler" type="button" onClick={() => setShowNav(prev => !prev)} data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showNav ? 'd-block' : ''}`} id="navbarsFurni2" >
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 navItems">
                        <li className="nav-item ">
                            <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="/">Home</NavLink>
                        </li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="shop">Shop</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="about">About us</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="services">Services</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="blog">Blog</NavLink></li>
                        <li><NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ''}`} to="contact">Contact us</NavLink></li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><NavLink className="nav-link" to="/login"><img src={userImg} /></NavLink></li>
                        <li><NavLink className="nav-link position-relative" to="cart"><img src={cartImg} /><span className='cartCount'>{cart.ids.length}</span></NavLink></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
