import React from 'react'
import Products from '../components/Products'

function OurProducts() {
    return (
        <div className="container-fluid col-md-12 ourProducts " style={{marginTop:"5rem"}} >
            <div className="headingInProducts container my-3  col-md-12">
                <h1 style={{textAlign:"center"}}><strong>Our Products!</strong></h1>

                <p style={{textAlign:"center"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus fugiat explicabo possimus vitae autem.</p>
            </div>
            <div className="cardDiv px-2 py-3 container-fluid  row flex justify-content-center">
                   <Products i={52772}></Products> 
                   <Products i={52773}></Products> 
                   <Products i={52774}></Products> 
                   <Products i={52775}></Products> 
            </div>
        </div>
    )
}

export default OurProducts