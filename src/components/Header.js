import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faLaptopHouse, faBreadSlice, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

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
                                <Link to='/index.html'>
                                    <FontAwesomeIcon icon={faMugHot} id="logo" />
                                </Link>
                                <Link to='/index.html'>
                                    <h1>Goldenrod Cafe</h1>
                                </Link>
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
                                                <Link to='/index.html' className="nav-link">
                                                    <FontAwesomeIcon icon={faLaptopHouse} className="navIcon" />
                                                    <br /> Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/menu.html' className="nav-link">
                                                    <FontAwesomeIcon icon={faBreadSlice} className="navIcon" />
                                                    <br />Menu
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/sites.html' className="nav-link">
                                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="navIcon" />
                                                    <br />Sites
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='/careers.html' className="nav-link">
                                                    <FontAwesomeIcon icon={faBriefcase} className="navIcon" />
                                                    <br />Careers
                                                </Link>
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