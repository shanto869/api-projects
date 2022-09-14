// load meals
const loadMeal = (mealName) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

// display meals
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-Container');
    mealsContainer.textContent = '';

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealsContainer.appendChild(mealDiv);

        mealDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 70)}</p>

                    <!-- Button trigger modal -->
                    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-warning px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                    </button>
                </div>
            </div>
        `
        console.log(meal)
    })
}

// load meal id for meal details
const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

// display meal details
const displayMealDetails = (meal) => {
    const mealDetailContainer = document.getElementById('meal-detail-container');
    mealDetailContainer.textContent = '';

    const mealDetailDiv = document.createElement('div');
    mealDetailDiv.classList.add('modal-body');
    mealDetailContainer.appendChild(mealDetailDiv);

    mealDetailDiv.innerHTML = `
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="card mx-auto" style="width: 25rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="#" class="btn btn-primary">Order Now</a>
            </div>
        </div>
    `
    console.log(mealDetailContainer)
}

// add click event handler for search meals btn
const searchMealBtn = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    searchField.value = '';

    loadMeal(searchFieldValue)
}
