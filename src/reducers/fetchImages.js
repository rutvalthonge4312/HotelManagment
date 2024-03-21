const initialData = [];

const  fetchImages = async (state = initialData, action) => {
    if (action.type === 'FETCH_IMAGES') {
        try {
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
            
            let data = await response.json();
            if (data.meals && data.meals.length > 0) {
                let meal = data.meals[0];
                console.log(data)
              //  setImageUrl(meal.strMealThumb);
              //  setImageName(meal.strMeal)
              state=meal;
              return state;
            } else {
                console.log("Meal not found");
                return state;
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }finally{
            return state;
        }
    }
    else {
        return state;
    }
}

export default fetchImages;