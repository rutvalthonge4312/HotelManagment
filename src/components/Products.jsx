import React, { useEffect, useState } from 'react'

function Products(props) {
    const [imageUrl, setImageUrl] = useState("");
    const [imageName, setImageName] = useState("");
    const fetchImages = async () => {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.i}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            if (data.meals && data.meals.length > 0) {
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
        fetchImages();
      },[]);
    
    
    return (
        
        <div data-aos={(props.i%2===0)? "fade-right":"fade-left"} className="shadow rounded container fade-right col-md-4 w-30 my-3 mx-3 rounded  itemCard" >
            <div className="imgDiv rounded">
                <img src={imageUrl} alt="" className='cardImage  my-1 '  />
            </div>
            <div className="infoDiv">
                <h3>{imageName}</h3>
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit nemo pariatur quos, possimus iste dolores necessitatibus ullam odio blanditiis, sunt neque molestias in architecto placeat.</p>
            </div>
        </div>
    )
}

export default Products