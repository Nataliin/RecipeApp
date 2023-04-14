const searchBtn = document.getElementById('search-btn');
const mealItemsList = document.getElementById('meal-items');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealItemsList );

// get meal list that matches with the ingredients 
function getMealItemsList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}