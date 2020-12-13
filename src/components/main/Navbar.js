import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-default ">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link 
                        className="navbar-brand" 
                        to="/"
                    >
                        <img src="assets/img/logo.png" alt="" />
                    </Link>


                </div>

                <div className="collapse navbar-collapse yamm" id="navigation">
                    <div className="button navbar-right">
                        <NavLink className="navbar-btn nav-button wow bounceInRight login navbar__like-button" to="/login">Login</NavLink>
                        <NavLink className="navbar-btn nav-button wow fadeInRight navbar__like-button" to="/">Submit</NavLink>
                    </div>
                    <ul className="main-nav nav navbar-nav navbar-right">
                        <li className="wow fadeInDown" data-wow-delay="0.2s">
                            <NavLink className="" to="/">Home</NavLink>
                        </li>
                        <li className="wow fadeInDown" data-wow-delay="0.2s">
                            <NavLink className="" to="/properties">Imóveis</NavLink>
                        </li>
                        {/* <li className="wow fadeInDown" data-wow-delay="0.2s">
                            <NavLink className="" to="/">Home</NavLink>
                        </li> */}
                        {/* <li className="wow fadeInDown" data-wow-delay="0.2s"><a className="" href="properties.html">Properties</a></li>
                        <li className="wow fadeInDown" data-wow-delay="0.3s"><a className="" href="property.html">Property</a></li> */}
                        <li className="dropdown yamm-fw" data-wow-delay="0.4s">
                            <a href="http://www/google.com" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="200">Template <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="yamm-content">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h5>Home pages</h5>
                                                <ul>
                                                    <li>
                                                        <a href="index.html">Home Style 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home Style 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-3.html">Home Style 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-4.html">Home Style 4</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-5.html">Home Style 5</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Pages and blog</h5>
                                                <ul>
                                                    <li><a href="blog.html">Blog listing</a>  </li>
                                                    <li><a href="single.html">Blog Post (full)</a>  </li>
                                                    <li><a href="single-right.html">Blog Post (Right)</a>  </li>
                                                    <li><a href="single-left.html">Blog Post (left)</a>  </li>
                                                    <li><a href="contact.html">Contact style (1)</a> </li>
                                                    <li><a href="contact-3.html">Contact style (2)</a> </li>
                                                    <li><a href="contact_3.html">Contact style (3)</a> </li>
                                                    <li><a href="faq.html">FAQ page</a> </li> 
                                                    <li><a href="404.html">404 page</a>  </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Property</h5>
                                                <ul>
                                                    <li><a href="property-1.html">Property pages style (1)</a> </li>
                                                    <li><a href="property-2.html">Property pages style (2)</a> </li>
                                                    <li><a href="property-3.html">Property pages style (3)</a> </li>
                                                </ul>

                                                <h5>Properties list</h5>
                                                <ul>
                                                    <li><a href="properties.html">Properties list style (1)</a> </li> 
                                                    <li><a href="properties-2.html">Properties list style (2)</a> </li> 
                                                    <li><a href="properties-3.html">Properties list style (3)</a> </li> 
                                                </ul>                                               
                                            </div>
                                            <div className="col-sm-3">
                                                <h5>Property process</h5>
                                                <ul> 
                                                    <li><a href="submit-property.html">Submit - step 1</a> </li>
                                                    <li><a href="submit-property.html">Submit - step 2</a> </li>
                                                    <li><a href="submit-property.html">Submit - step 3</a> </li> 
                                                </ul>
                                                <h5>User account</h5>
                                                <ul>
                                                    <li><a href="register.html">Register / login</a>   </li>
                                                    <li><a href="user-properties.html">Your properties</a>  </li>
                                                    <li><a href="submit-property.html">Submit property</a>  </li>
                                                    <li><a href="change-password.html">Change password</a> </li>
                                                    <li><a href="user-profile.html">Your profile</a>  </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="wow fadeInDown" data-wow-delay="0.5s"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
