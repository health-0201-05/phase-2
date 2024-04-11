const foods = [
    { name: 'Chicken', calories: 165, carbs: 0, protein: 31, fat: 3.5 },
    { name: 'Rice', calories: 206, carbs: 28, protein: 2.7, fat: 0.4 },
    { name: 'Pasta', calories: 131, carbs: 25, protein: 5, fat: 1.1 },
    { name: 'Broccoli', calories: 55, carbs: 11, protein: 3.7, fat: 0.6 },
    { name: 'Apple', calories: 95, carbs: 25, protein: 0.5, fat: 0.3 },
    { name: 'Beef', calories: 250, carbs: 0, protein: 26, fat: 15 },
    { name: 'Salmon', calories: 206, carbs: 0, protein: 22, fat: 12 },
    { name: 'Eggs', calories: 155, carbs: 1.1, protein: 13, fat: 11 },
    { name: 'Potato', calories: 163, carbs: 37, protein: 4.3, fat: 0.2 },
    { name: 'Spinach', calories: 23, carbs: 3.6, protein: 2.9, fat: 0.4 },
    { name: 'Banana', calories: 89, carbs: 23, protein: 1.1, fat: 0.3 },
    { name: 'Yogurt', calories: 59, carbs: 3.6, protein: 10, fat: 0.4 },
    { name: 'Milk', calories: 42, carbs: 5, protein: 3.4, fat: 1 },
    { name: 'Cheese', calories: 402, carbs: 1.3, protein: 25, fat: 33 },
    { name: 'Bread', calories: 265, carbs: 49, protein: 9, fat: 3.2 }
];

const progress = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
};

let addedFoods = [];

document.getElementById('add-food-btn').addEventListener('click', function() {
    document.getElementById('food-menu').style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('food-menu').style.display = 'none';
});

function goHome() {
    window.location.replace("index.html?data="+window.location.href.split('?data=')[1]);
}

function populateFoods() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';
    foods.forEach((food, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${food.name} - Calories: ${food.calories}, Carbs: ${food.carbs}g, Protein: ${food.protein}g, Fat: ${food.fat}g
            <div class="input-button-container">
                <input type="number" value="1" min="0" step="any" id="food-quantity-${index}">
                <button onclick="addFood(${index})">Add</button>
            </div>
        `;
        foodList.appendChild(li);
    });
}

function addFood(index) {
    const quantity = parseFloat(document.getElementById(`food-quantity-${index}`).value);
    const food = foods[index];
    const foodId = Date.now(); 
    const foodContribution = {
        id: foodId,
        calories: food.calories * quantity,
        carbs: food.carbs * quantity,
        protein: food.protein * quantity,
        fat: food.fat * quantity
    };
    addedFoods.push(foodContribution);
    progress.calories += foodContribution.calories;
    progress.carbs += foodContribution.carbs;
    progress.protein += foodContribution.protein;
    progress.fat += foodContribution.fat;
    displayAddedFood(food, quantity, foodId);
    updateProgressBars();
}

function displayAddedFood(food, quantity, foodId) {
    const addedFoodsList = document.getElementById('added-foods-list');
    const foodItemContainer = document.createElement('div');
    foodItemContainer.classList.add('added-food-item');
    foodItemContainer.setAttribute('data-food-id', foodId);
    const foodName = document.createElement('div');
    foodName.classList.add('added-food-name');
    foodName.textContent = `${quantity.toFixed(1)} serving(s) of ${food.name}`;
    const foodMacros = document.createElement('div');
    foodMacros.classList.add('added-food-macros');
    foodMacros.innerHTML = `Calories: ${(food.calories * quantity).toFixed(1)}, Carbs: ${(food.carbs * quantity).toFixed(1)}g, Protein: ${(food.protein * quantity).toFixed(1)}g, Fat: ${(food.fat * quantity).toFixed(1)}g`;
    foodItemContainer.appendChild(foodName);
    foodItemContainer.appendChild(foodMacros);
    foodItemContainer.addEventListener('click', function() {
        removeFoodNutrients(foodId);
        this.remove();
    });
    addedFoodsList.appendChild(foodItemContainer);
}

function removeFoodNutrients(foodId) {
    const foodIndex = addedFoods.findIndex(food => food.id === foodId);
    if (foodIndex > -1) {
        const food = addedFoods[foodIndex];
        progress.calories -= food.calories;
        progress.carbs -= food.carbs;
        progress.protein -= food.protein;
        progress.fat -= food.fat;
        addedFoods.splice(foodIndex, 1);
        updateProgressBars();
    }
}

function updateProgressBars() {
    ['calories', 'carbs', 'protein', 'fat'].forEach(nutrient => {
        const progressBar = document.querySelector(`#${nutrient}-progress progress`);
        progressBar.value = progress[nutrient];
        progressBar.addEventListener('click', () => {
            alert(`${progressBar.value.toFixed(1)}/${progressBar.max} ${nutrient}`);
        });
    });
}

document.addEventListener('DOMContentLoaded', populateFoods);