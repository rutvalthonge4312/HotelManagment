import React from 'react'
import Products from '../components/Products'

function OurProducts() {
    return (
        <div className="container-fluid col-md-12 ourProducts" >
            <div className="headingInProducts col-md-12">
                <h3><strong>Our Products!</strong></h3>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus fugiat explicabo possimus vitae autem.</p>
            </div>
            <div className="cardDiv px-2 py-3 container-fluid border col-md-12 row">
                   <Products i={52772}></Products> 
                   <Products i={52773}></Products> 
                   <Products i={52774}></Products> 
                   <Products i={52775}></Products> 
            </div>
        </div>
    )
}

export default OurProducts