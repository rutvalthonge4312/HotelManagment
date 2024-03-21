import React from 'react'
import formImag1 from '../assets/formImage1.png'
import formImag2 from '../assets/formImage2.png'
function SignUp() {
    return (
        <div className="container">
            <div className="header my-4">
                <h3 className='text-center my-1'><span style={{color:"red"}}>Sign Up Here</span>, To access More!</h3>
                <div  className='text-center container-fluid my-1 w-50 col-sm-12 px-5 '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ad blanditiis beatae, harum adipisci asperiores, laboriosam reiciendis cumque </p>
                </div>
            </div>
            <div className="formBody  col-md-12 row py-1 px-1">
                
                <div className="formHere center my-auto mx-auto col-md-8 ">
                    <form >
                        <div className='col-md-12 row mx-auto my-auto'>
                            <div className='col-md-4 m-1 p-1 '>
                                <label htmlFor="name">Enter Your Name</label>
                                <input className='form-control' type="text" id='name' name='name' placeholder='Enter Name' />
                            </div>
                            <div className='col-md-4 m-1 p-1 '>
                                <label htmlFor="email">Enter Your Email</label>
                                <input className='form-control' type="email" name='email' id='email' placeholder='Enter Your Email' />
                            </div>
                            <div className='col-md-4 m-1 p-1 '>
                                <label htmlFor="mobileNumber">Enter Your Mobile Number</label>
                                <input className='form-control' type="number" name='mobileNumber' id='mobileNumber' placeholder='Enter Mobile Number' />
                            </div>
                            <div className='col-md-4 m-1 p-1 '>
                                <label htmlFor="password">Enter Password</label>
                                <input className='form-control' type="password" name='password' id='password' placeholder='Enter Password' />
                            </div>
                            <div className='col-md-4 m-1 p-1 '>
                                <label htmlFor="retypePassword">Re-Enter Password</label>
                                <input className='form-control' name='retypePassword' id='retypePassword' type="password" placeholder='Retype The Password' />
                            </div>
                            <div>
                                <label htmlFor="">Show Password</label>
                                <input className='mx-1 center' type="checkbox" name="" id="" />
                            </div>
                        </div>
                       <div className='d-flex justify-content-center align-items-center my-3 '>
                       <button className='btn btn-secondary my-3 text-center center w-25'>sign Up!</button>
                       </div>
                    </form>
                </div>
                <div className="right col-md-4 my-auto mx-auto overflow-hidden center text-center">
                    <img src={formImag2} alt=""  />
                </div>
            </div>
        </div>
    )
}

export default SignUp