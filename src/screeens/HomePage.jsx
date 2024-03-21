import React, { useState } from 'react'
import google_btn from "../assets/cafe1.webp";
import OurProducts from './OurProducts';
import { Link } from "react-router-dom";
import SignUp from './SignUp';
import { CButton, CModal, CModalBody, CModalFooter } from '@coreui/react';
import LogInModal from '../components/LogInModal';


function HomePage() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    }
    return (
        <div className='page-body'>
            <div>
                <CModal
                    visible={showModal}
                    backdrop="static"
                    aria-labelledby="ScoreNow"
                >
                    <CModalBody>
                        <LogInModal></LogInModal>
                    </CModalBody>
                    <CModalFooter>
                        <CButton
                            color="secondary"
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            Ok
                        </CButton>
                    </CModalFooter>
                </CModal>
            </div>
            <div className="container1  " data-aos="fade-up">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className='btn' onClick={openModal}>
                                        Log In
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className='btn'>Sign Up</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container-fluid my-3 text-center justify-center col-md-12 row headerPart h-100 px-3 py-5">
                    <div className='text-overlay col-md-6 my-auto  h-100'>
                        <h3>Enjoy your happy moment with koffee</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis enim cupiditate pariatur consequatur animi fugiat nesciunt corrupti, iure doloribus!</p>
                        <button className='btn btn-secondary my-3 w-50 w-sm-25 h-100  rounded'>Go There!</button>
                    </div>
                    <div className='col-md-6 my-auto'>
                        <img src={google_btn} alt="" className='headerImage rounded' />
                    </div>

                </div>
            </div>
            <OurProducts></OurProducts>
            <SignUp></SignUp>
        </div>

    )
}

export default HomePage