import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faLaptopHouse, faBreadSlice, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Media, Navbar, Nav, NavItem, Button, NavLink, Collapse, NavbarToggler, NavbarBrand  } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <header className="jumbotron jumbotron-fluid pb-0 pt-5">
                <div className="container">
                    <div className="row pl-5">
                        <div className="col">
                            <div>
                                <a href="index.html">
                                <FontAwesomeIcon icon={faMugHot} id="logo" />
                                </a>
                                <a href="index.html">
                                    <h1>Goldenrod Cafe</h1>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col offset-sm-6 offset-md-7 offset-lg-8">
                            <nav className="navbar navbar-expand-sm navbar-dark">
                                <div className="container">
                                    <button className="navbar-toggler mt-4" type="button" data-toggle="collapse"
                                        data-target="#cafeNavbar">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="cafeNavbar">
                                        <ul className="navbar-nav flex-row">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">
                                                    <FontAwesomeIcon icon={faLaptopHouse} className="navIcon" />
                                                    <br /> Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="menu.html">
                                                    <FontAwesomeIcon icon={faBreadSlice} className="navIcon" />
                                                    <br />Menu
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="sites.html">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="navIcon" />
                                                    <br />Sites
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="careers.html">
                                                    <FontAwesomeIcon icon={faBriefcase} className="navIcon" />
                                                    <br />Careers
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;