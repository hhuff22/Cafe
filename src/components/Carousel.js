import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cappuccino from '../img/cappuccino.jpeg';
import pumpkinSoup from '../img/pumpkin-soup.webp';
import shakshuka from '../img/shakshuka.webp';
import $ from 'jquery';


class CarouselComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(function () {
            $(".carousel").carousel({
                interval: 2500,
                pause: "false"
            });
            $("#carouselButton").on("click", function () {
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play")
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    $("#carouselButton").children("i").addClass("fa-pause")
                }
            });
        });
    }

    render() {
        return (

            <div id="menuCarousel">
                <div className="container">
                    <div className="row pt-5 pt-lg-0">
                        <div className="col-10 col-md-8 col-lg-6 mx-auto" id="carouselCol">
                            <Link to='/menu.html' className="nav-link">
                                <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={cappuccino}
                                                alt="Breadcrumb Trail Campground" />
                                            <div className="carousel-caption">
                                                <h3>Cappuccino</h3>
                                                <p className="d-none d-sm-block">1/3 espresso + 1/3 steamed milk + 1/3 foam</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={pumpkinSoup}
                                                alt="React Lake Campground" />
                                            <div className="carousel-caption">
                                                <h3>Pumpkin Soup</h3>
                                                <p className="d-none d-sm-block">Creamy pumpkin soup, topped with roasted pumpkin
                                                    seeds.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={shakshuka}
                                                alt="Chrome River Campground" />
                                            <div className="carousel-caption">
                                                <h3>Shakshuka</h3>
                                                <p className="d-none d-sm-block">Simmering tomatoes, onions, garlic, spices and
                                                    gently
                                                    poached eggs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    {/* <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                        <span className="sr-only">Next</span>
                                    </a> *}
                                   {/* <button className="btn btn-dark btn-sm" id="carouselButton">
                                        <i className="fa fa-pause"></i>
                                       </button> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CarouselComponent;