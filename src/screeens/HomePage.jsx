import React from 'react'
import google_btn from "../assets/cafe1.webp";
import OurProducts from './OurProducts';

function HomePage() {
    return (
        <div className='page-body'>
            <div className="container1 ">
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            GoodLuck Cafe!
                        </a>
                    </div>
                </nav>
                <div className="container-fluid my-3 text-center justify-center col-md-12 row headerPart h-100 px-3 py-5">
                    <div className='text-overlay col-md-6 my-auto  h-100'>
                        <h3>Enjoy your happy moment with koffee</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis enim cupiditate pariatur consequatur animi fugiat nesciunt corrupti, iure doloribus!</p>
                        <button className='btn btn-secondary my-3 w-25 h-25 '>Go There!</button>
                    </div>
                    <div className='col-md-6 my-auto'>
                        <img src={google_btn} alt="" className='headerImage rounded' />
                    </div>

                </div>
            </div>
            <OurProducts></OurProducts>
        </div>

    )
}

export default HomePage