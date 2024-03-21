import React, { useEffect, useState } from 'react'
import StaffCard from '../components/StaffCard';

function StaffScreen() {
    /*
     const [userData,setUserData]=useState([]);
     const fetchInfo = async () => {
         let empArr = [];
         try {
             let response = await fetch(`https://dummy.restapiexample.com/api/v1/employees`);
             if (!response.ok) {
                 throw new Error('Network response was not ok');
             }
             let data = await response.json();
             if (data) {
 
 
                 if (data.status === 'success') {
                     data.data.map((emp) => {
                         empArr.push(emp);
                     })
                 }
                 setUserData(empArr);
             }
             /* if (data.meals && data.meals.length > 0) {
                  let meal = data.meals[0];
                  setImageUrl(meal.strMealThumb);
                  setImageName(meal.strMeal)
              } else {
                  console.log("Meal not found");
              }
             } catch (error) {
                 console.error('Error fetching data:', error);
             }
         }
         useEffect(() => {
             fetchInfo();
         }, [])
    */

    return (

        <div className="aboutUs p-2">
            <div className="container">
                <h1 className='text-center' ><strong>About <span style={{ color: 'red' }}>Us</span> </strong></h1>
            </div>
            <div className=' p-4 col-md-12 row'>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>
                <div className='col-md-4 col-sm-12 my-2'>
                    <StaffCard ></StaffCard>
                </div>

            </div>
        </div>

    )
}

export default StaffScreen