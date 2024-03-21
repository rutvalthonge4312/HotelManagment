import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import userProfile from '../assets/userProfile.png'

function StaffCard() {
  return (
    <div className='container center  cold-md-12'>
        <div data-aos= "fade-down" className="card p-2 rounded shadow w-100">
            <div className='text-center'>
                <img className='container-fluid' src={userProfile} h-50 w-50 alt="" />
            </div>
            <div className="info">
                <h3>Rutval B Thonge</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, corporis.</p>
            </div>
        </div>
    </div>
  )
}

export default StaffCard