import React from 'react';
import CarouselComponent from './Carousel';
import AboutUs from './AboutUs'
import Locations from './Locations'

function Main(props) {

    return (
        <React.Fragment>
            <CarouselComponent />
            <AboutUs />
            <Locations />
        </React.Fragment>
    )
}

export default Main;