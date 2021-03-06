import React from 'react';
import { Link } from 'react-router-dom';
import downtown from '../img/downtown.jfif';
import university from '../img/university.jfif';
import beacham from '../img/beacham.jfif';
import florence from '../img/florence.jfif'

function Locations(props) {

    return (
        <div className="midPage">
            <div className="container">
                <h2 className="midTitles mt-4">Our Locations</h2>
                <div className="row align-items-center mt-3">
                    <div className="col-sm location downtown">
                        <Link to='/sites.html'>
                            <img className="w-100" src={downtown} />
                            <h3>Downtown</h3>
                            <p>123 Cassidy Ln.</p>
                        </Link>
                    </div>
                    <div className="col-sm location university">
                        <Link to='/sites.html'>
                            <img className="w-100" src={university} />
                            <h3>University</h3>
                            <p>123 University Ct.</p>
                        </Link>
                    </div>
                </div>
                <div className="row align-items-center mb-3">
                    <div className="col-sm location beacham">
                        <Link to='/sites.html'>
                            <img className="w-100" src={beacham} />
                            <h3>Beacham</h3>
                            <p>123 Beacham St.</p>
                        </Link>
                    </div>
                    <div className="col-sm location florence">
                        <Link to='/sites.html'>
                            <img className="w-100" src={florence} />
                            <h3>Florence</h3>
                            <p>123 Marks Ave.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations;