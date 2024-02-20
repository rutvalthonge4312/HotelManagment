import React from 'react'
import google_btn from "../assets/cafe1.webp";

function HomePage() {
    return (
        <div className="container1">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        GoodLuck Cafe!
                    </a>
                </div>
            </nav>
            <div className=" headerContainer col-md-12 row">
                <div className='text-overlay'>
                    <h3>Enjoy your happy moment with koffee</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corporis enim cupiditate pariatur consequatur animi fugiat nesciunt corrupti, iure doloribus!</p>
                </div>
                <div className='col-md-12'>
                    <img src={google_btn} alt="" />
                </div>
               
            </div>
        </div>
    )
}

export default HomePage