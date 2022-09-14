// load meals
const loadMeals = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadMeals(data.meals))
}

// display load meals
const displayLoadMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.textContent = '';

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealContainer.appendChild(mealDiv);

        mealDiv.innerHTML = `
            <div onclick= "loadMealInfo(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        `
        // console.log(meal)
    })
}

// add click event handler for search btn
const searchMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    searchField.value = ''

    loadMeals(searchFieldValue)
}

// load meal meal id
const loadMealInfo = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals[0]))
    // console.log(url)
}

// add click event handlar for display meal information
const displayMealInfo = (meal) => {
    const displayMealContainer = document.getElementById('display-meal-container');
    displayMealContainer.textContent = ''

    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    displayMealContainer.appendChild(mealDiv);

    mealDiv.innerHTML = ` 
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            <a href="#" class="btn btn-primary">Order Now</a>
        </div>
    `
    console.log(meal)
}
