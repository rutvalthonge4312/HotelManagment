import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LogInModal() {
    return (
        <div className=' p-1'>
            <form action="">
                <div className="container-fluid ">
                    <div className="col-md-12 ">
                        <div className="username">
                            <label htmlFor="">Username</label>
                            <input type="text" className='form-control' placeholder='Enter Username' />
                        </div>
                        <div className="password">
                            <label htmlFor="">Password</label>
                            <input type="text" className='form-control' placeholder='Enter Password' />
                        </div>
                        <div className="logInButton my-2 text-center">
                            <button className='btn btn-secondary w-50 rounded'>Log In</button>
                        </div>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <div className='col-md-5  btn border rounded w-100 my-1'>
                            <h6><span><FontAwesomeIcon icon="fa-brands fa-google" style={{color: "#000000",}} />Log In With Google </span></h6>
                        </div>
                        <div className='col-md-5 btn border rounded w-100'>
                            <h6> <span><FontAwesomeIcon icon="fa-solid fa-mobile" />Log In With Mobile Number</span></h6>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LogInModal