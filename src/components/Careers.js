import React from 'react';

function Careers(props) {

    return (
        <div className="midPage">
            <div className="container">
                <div className="row" id="careers">
                    <div className="col-12">
                        <h2 className="midTitles">Apply Today!</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <form>
                            <div className="form-group row">
                                <label for="firstName" className="col-md-2 col-form-label">First Name</label>
                                <div className="col-5">
                                    <input type="text" className="form-control" id="firstName" name="firstName"
                                        placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="lastName" className="col-md-2 col-form-label">Last Name</label>
                                <div className="col-5">
                                    <input type="text" className="form-control" id="lastName" name="lastName"
                                        placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="cellphone" className="col-md-2 col-form-label">Cellphone</label>
                                <div className="col-5">
                                    <input type="tel" className="form-control" id="cellphone" name="cellphone"
                                        placeholder="Tel. Number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="email" className="col-md-2 col-form-label">Email</label>
                                <div className="col-5">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col offset-md-2">
                                    Do you have prior experience working at a cafe?
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" id="applyYes" name="applyRadios"
                                            value="yes" />
                                        <label for="applyYes" className="form-check-label">Yes</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input type="radio" className="form-check-input" id="applyNo" name="applyRadios"
                                            value="no" />
                                        <label for="applyNo" className="form-check-label">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="interest" className="col-md-2 col-form-label">Additional Information</label>
                                <div className="col-md-10">
                                    <textarea className="form-control" id="interest" name="interest" rows="8" placeholder="Tell us why you're interested in a career at the Goldenrod Cafe."></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-2 col-md-10">
                                    <a className="btn bg-info btn-md text-white">Submit</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;