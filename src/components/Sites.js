import React from 'react';
import downtown from '../img/downtown.jfif';
import university from '../img/university.jfif';
import beacham from '../img/beacham.jfif';
import florence from '../img/florence.jfif'

function Sites(props) {

    return (
        <div className="midPage">
            <div className="container">
                <h2 className="midTitles mt-5">Our Locations</h2>
                <div className="row align-items-center mt-3">
                    <div className="col-sm location downtown">
                        <img className="w-100" src={downtown} />
                        <h3>Downtown</h3>
                        <p>123 Cassidy Ln.</p>
                    </div>
                    <div className="col-sm location university">
                        <img className="w-100" src={university} />
                        <h3>University</h3>
                        <p>123 University Ct.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="locationDescription d-none d-sm-block"><strong>Hours</strong><br/>8a - 8p
                            Daily<br/><br/><strong>Phone</strong><br/>617-555-0120</p>
                    </div>
                    <div className="col">
                        <p className="locationDescription d-none d-sm-block"><strong>Hours</strong><br/>Mon to Fri: 8a - 8p<br/>Weekends: 7a -
                            10p<br/><br/><strong>Phone</strong><br/>617-555-0144</p>
                    </div>
                </div>
                <hr />
                <div className="row align-items-center mb-3">
                    <div className="col-sm location beacham">
                        <img className="w-100" src={beacham} />
                        <h3>Beacham</h3>
                        <p>123 Beacham St.</p>
                    </div>
                    <div className="col-sm location florence">
                        <img className="w-100" src={florence} />
                        <h3>Florence</h3>
                        <p>123 Marks Ave.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="locationDescription d-none d-sm-block"><strong>Hours</strong><br/> 9a - 7p
                            Daily<br/><br/><strong>Phone</strong><br/>617-555-0193</p>
                    </div>
                    <div className="col">
                        <p className="locationDescription d-none d-sm-block"><strong>Hours</strong><br/> 9a - 5p
                            Daily<br/><br/><strong>Phone</strong><br/>617-555-0135</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sites;