import React from 'react';


function Footer(props) {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p>All Rights Reserved<br/>Goldenrod Cafe<br/><br/>Copyright 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;