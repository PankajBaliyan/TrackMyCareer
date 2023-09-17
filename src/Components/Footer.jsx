import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="facebook-f" />
                    </Link>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="twitter" />
                    </Link>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="google" />
                    </Link>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="instagram" />
                    </Link>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="linkedin" />
                    </Link>
                    <Link to="" className="me-4">
                        <MDBIcon color="" fab icon="github" />
                    </Link>
                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 default-color">
                                TrackMyCareer.ai
                            </h6>
                            <p>
                                TrackMyCareer.ai streamlines job search and
                                application management, helping you succeed in
                                your career journey. Elevate your job hunt with
                                our powerful tools..
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 default-color">
                                Products
                            </h6>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Job Application's Tracker
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    React
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Vue
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Laravel
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 default-color">
                                Useful links
                            </h6>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Pricing
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Settings
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link to="#!" className="text-reset">
                                    Help
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4 default-color">
                                Contact
                            </h6>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="home"
                                    className="me-2"
                                />
                                India
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="envelope"
                                    className="me-3"
                                />
                                pankajbaliyan90@gmail.com
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="phone"
                                    className="me-3"
                                />{' '}
                                + 91 xxxxx xxxxx
                            </p>
                            <p>
                                <MDBIcon
                                    color="secondary"
                                    icon="print"
                                    className="me-3"
                                />{' '}
                                + 91 xxxxx xxxxx
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
            >
                © {currentYear} Copyright:
                <Link
                    className="fw-bold"
                    to="https://codex-portfolio.onrender.com/"
                >
                    CodeWithPankaj
                </Link>
            </div>
        </MDBFooter>
    );
}
