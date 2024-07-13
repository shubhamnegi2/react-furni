import React from 'react'

import sofaImg from '../../assets/images/sofa.png'
import envelopeUutline from '../../assets/images/envelope-outline.svg'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className="footer-section pt-5 mt-5">
            <div className="container relative">

                <div className="sofa-img">
                    <img src={sofaImg} alt="Image" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center"><span className="me-1"><img src={envelopeUutline} alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

                            <form action="#" className="row g-3">
                                <div className="col-auto">
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap"><NavLink to="#" className="footer-logo">Furni<span>.</span></NavLink></div>
                        <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

                        <ul className="list-unstyled custom-social">
                            <li><NavLink to="#"><span className="fa fa-brands fa-facebook-f"></span></NavLink></li>
                            <li><NavLink to="#"><span className="fa fa-brands fa-twitter"></span></NavLink></li>
                            <li><NavLink to="#"><span className="fa fa-brands fa-instagram"></span></NavLink></li>
                            <li><NavLink to="#"><span className="fa fa-brands fa-linkedin"></span></NavLink></li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="/about">About us</NavLink></li>
                                    <li><NavLink to="/Services">Services</NavLink></li>
                                    <li><NavLink to="/Blog">Blog</NavLink></li>
                                    <li><NavLink to="/Contact">Contact us</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Support</NavLink></li>
                                    <li><NavLink to="#">Knowledge base</NavLink></li>
                                    <li><NavLink to="#">Live chat</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Jobs</NavLink></li>
                                    <li><NavLink to="#">Our team</NavLink></li>
                                    <li><NavLink to="#">Leadership</NavLink></li>
                                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-3">
                                <ul className="list-unstyled">
                                    <li><NavLink to="#">Nordic Chair</NavLink></li>
                                    <li><NavLink to="#">Kruzo Aero</NavLink></li>
                                    <li><NavLink to="#">Ergonomic Chair</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">Copyright ©2024. All Rights Reserved. — Designed with love by  <strong> <NavLink target='_blank' to="https://github.com/shubhamnegi2">Shubham Negi</NavLink></strong>
                            {/* <p className="mb-2 text-center text-lg-start">Copyright ©<script>document.write(new Date().getFullYear());</script>2024. All Rights Reserved. — Designed with love by <NavLink to="https://untree.co">Untree.co</NavLink>  Distributed By <NavLink to="https://themewagon.com">ThemeWagon</NavLink> <!-- License information: https://untree.co/license/ --> */}
                            </p>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><NavLink to="#">Terms &amp; Conditions</NavLink></li>
                                <li><NavLink to="#">Privacy Policy</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}
