// loading-start
    $(".loading").fadeOut(4000);
// loading-end
// sidebar-start
let sidebarinnerwidth=$(".inner-sidebar").innerWidth()
$(".sidebar").animate({left:-sidebarinnerwidth},0)
$(".bars-icon").on("click",function(){
    $(".close-icon").show(0,function(){
        $(".bars-icon").hide(0)
        $(".sidebar").animate({left:0},1000)
        $(".navbar-nav").toggleClass("visible");

    })
})
$(".close-icon").on("click",function(){
    $(".bars-icon").show(0,function(){
        $(".close-icon").hide(0)
        $(".sidebar").animate({left:-sidebarinnerwidth},1000)
        $(".navbar-nav").removeClass("visible");
        $(".navbar-nav").addClass("hidden");
    })
})
// sidebar-end
// search-start
$(".search-link").on("click",function(){
    $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
    $(".meals").addClass("d-none")
    $(".search").addClass("d-block")
    $(".search").removeClass("d-none")
    $("#results").removeClass("d-none")
    $(".close-icon").hide(0)
    $(".bars-icon").show(0)
    $(".sidebar").animate({left:-sidebarinnerwidth})
    $(".categroies").addClass("d-none")
    $(".categorie-details").addClass("d-none")
    $(".area-details").addClass("d-none")
    $(".Ingredients-details").addClass("d-none")
    $(".navbar-nav").toggleClass("visible");
    $(".meal").addClass("d-none")
    $(".areas").addClass("d-none")
    $(".Ingredients").addClass("d-none")
    $(".contact-us").addClass("d-none")
})

// search-end
// Meal-start
async function fetchData() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
        const mealdata = await response.json();
        if (mealdata.meals) {
            displayMeals(mealdata.meals);
        } else {
            console.error('No meals found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMeals(meals) {
    const container = document.getElementById('col');
    container.innerHTML = (''); 

    meals.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3');
const image=document.createElement('div')
image.classList.add( 'image');
image.setAttribute("id",item.idMeal)
        const img = document.createElement('img');
        img.src = item.strMealThumb; 
        img.alt = item.strMeal; 

        const layer = document.createElement('div');
        layer.classList.add('layer');

        const h2 = document.createElement('h2');
        h2.textContent = item.strMeal; 

        layer.appendChild(h2);
        colDiv.appendChild(image)
        image.appendChild(img);
        image.appendChild(layer);
        container.appendChild(colDiv);
        image.addEventListener('click', function(event) {
            
            document.querySelector(".Ingredients-details").classList.replace("d-block","d-none")
            document.querySelector(".area-details").classList.replace("d-block","d-none")
            $(".Ingredients").addClass("d-none")
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
            $(".sidebar").animate({left:-sidebarinnerwidth})
            $(".loading").fadeIn(0);
            $(".loading").fadeOut(4000);
            const mealId = event.currentTarget.getAttribute("id");
            document.querySelector('.meal').classList.replace("d-block","d-none")
            document.querySelector('.meals').classList.replace("d-none","d-block")
            showMealDetails(mealId);
            displaymealdetails(meals)

        });
    });
}

// Meal-end

// categories-start
$(".cetagories-link").on("click",function(){
    $(".navbar-nav").toggleClass("visible");
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
    $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
    $(".meal").addClass("d-none")
    $(".meals").addClass("d-none")
    $(".areas").addClass("d-none")
    $(".Ingredients").addClass("d-none")
    $(".contact-us").addClass("d-none")
    $(".areeas").addClass("d-none")
    $(".categroies").removeClass("d-none")
    $(".categroies").addClass("d-block")
    $(".search").addClass("d-none")
    $("#results").addClass("d-none")
    $(".sidebar").animate({left:-sidebarinnerwidth})
    document.querySelector('.categorie-details').classList.replace("d-block","d-none")
    document.querySelector('.area-details').classList.replace("d-block","d-none")
    document.querySelector('.Ingredients-details').classList.replace("d-block","d-none")
})
async function categoriesfetchData() {
    try {
        const categoriesresponse = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const categoriedata = await categoriesresponse.json();
       
        if (categoriedata.categories) {
            displaycategories(categoriedata.categories);
        } else {
            console.error('No meals found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function displaycategories(categories) {
    const categoriescontainer = document.getElementById('categroies');
    categoriescontainer.innerHTML = ''; 
    categories.forEach(categoriesitem => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3');
const image=document.createElement('div')
image.classList.add( 'image');
image.setAttribute("categorie",categoriesitem.strCategory);
        const img = document.createElement('img');
        img.src = categoriesitem.strCategoryThumb; 
        img.alt = categoriesitem.strCategory; 
        const layer = document.createElement('div');
        layer.classList.add('layer');
        const p=document.createElement('p');
        p.textContent = categoriesitem.strCategoryDescription.slice(0,106)+'...';
        const h3 = document.createElement('h3');
        h3.textContent = categoriesitem.strCategory; 
        layer.appendChild(h3);
        layer.appendChild(p);
        colDiv.appendChild(image)
        image.appendChild(img);
        image.appendChild(layer);
        categoriescontainer.appendChild(colDiv);
        image.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
            $(".sidebar").animate({left:-sidebarinnerwidth})
            $(".loading").fadeIn(0);
            $(".loading").fadeOut(4000);
            const categorie = event.currentTarget.getAttribute('categorie')
            document.querySelector('.categroies').classList.replace("d-block","d-none")
            document.querySelector('.categorie-details').classList.replace("d-none","d-block")
            document.querySelector('.meals').classList.replace("d-block","d-none")
            showcategories(categorie)
          
        });
    });
   
}

// categories-end
// area-start
$(".areas-link").on("click",function(){
    $(".navbar-nav").toggleClass("visible");
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
    $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
    $(".meal").addClass("d-none")
    $(".meals").addClass("d-none")
    $(".categroies").addClass("d-none")
    $(".Ingredients").addClass("d-none")
    $(".contact-us").addClass("d-none")
    $(".areas").removeClass("d-none")
    $(".areas").addClass("d-block")
    $(".search").addClass("d-none")
    $("#results").addClass("d-none")
    $(".sidebar").animate({left:-sidebarinnerwidth})
    document.querySelector('.categorie-details').classList.replace("d-block","d-none")
    document.querySelector('.area-details').classList.replace("d-block","d-none")
    document.querySelector('.Ingredients-details').classList.replace("d-block","d-none")
})
async function areasfetchdata() {
        try {
            const areasresponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const areasdata = await areasresponse.json();
            if (areasdata.meals) {
                displayareas(areasdata.meals);
            } else {
                console.error('No meals found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } 
    function displayareas(areas){
        const areascontainer=document.getElementById('areas')
        areascontainer.innerHTML=('')
        areas.forEach(areasitem=>{
            const colDiv=document.createElement('div')
            colDiv.classList.add("col-md-3")
            const locationicon=document.createElement('div')
            locationicon.classList.add("location-icon")
            locationicon.setAttribute("areaname",areasitem.strArea)
            locationicon.innerHTML=(`<i class="fa-solid fa-house-laptop"></i>`)
            const h2=document.createElement('h2')
            h2.textContent=areasitem.strArea
areascontainer.appendChild(colDiv)
colDiv.appendChild(locationicon)
locationicon.appendChild(h2)
locationicon.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
    $(".sidebar").animate({left:-sidebarinnerwidth})
    $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
    const areaname = event.currentTarget.getAttribute('areaname')
    document.querySelector('.areas').classList.replace("d-block","d-none")
    document.querySelector('.area-details').classList.replace("d-none","d-block")
    document.querySelector('.meals').classList.replace("d-block","d-none")
    showareas(areaname)

});
        })
    }
    
    // area-end
    // Ingredients-start
    $(".Ingredients-link").on("click",function(){
        $(".bars-icon").show(0)
        $(".close-icon").hide(0)
        $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
        $(".meal").addClass("d-none")
        $(".meals").addClass("d-none")
        $(".categroies").addClass("d-none")
        $(".areas").addClass("d-none")
        $(".contact-us").addClass("d-none")
        $(".Ingredients").removeClass("d-none")
        $(".Ingredients").addClass("d-block")
        $(".search").addClass("d-none")
        $("#results").addClass("d-none")
        $(".sidebar").animate({left:-sidebarinnerwidth})
        document.querySelector('.categorie-details').classList.replace("d-block","d-none")
        document.querySelector('.area-details').classList.replace("d-block","d-none")
        document.querySelector('.Ingredients-details').classList.replace("d-block","d-none")
    })
    async function Ingredientsfetchdata() {
            try {
                const Ingredientsresponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
                const Ingredientsdata = await Ingredientsresponse.json();
                if (Ingredientsdata.meals) {
                    
                    displayIngredients(Ingredientsdata.meals);
                } else {
                    console.error('No meals found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } 
        function displayIngredients(Ingredients){
            const Ingredientscontainer=document.getElementById('Ingredients')
            Ingredientscontainer.innerHTML=('')
            Ingredients.forEach(Ingredientsitem=>{
                const colDiv=document.createElement('div')
                colDiv.classList.add("col-md-3")
                const Ingredientsicon=document.createElement('div')
                Ingredientsicon.classList.add('location-icon')
                Ingredientsicon.setAttribute("id",Ingredientsitem.strIngredient)
                Ingredientsicon.innerHTML=(`<i class="fa-solid fa-drumstick-bite"></i>`)
                const h3=document.createElement('h3')
                h3.textContent=Ingredientsitem.strIngredient
                const p= document.createElement('p')
                p.textContent = Ingredientsitem.strDescription.slice(0,106) +'...'; 
                Ingredientscontainer.appendChild(colDiv)
                colDiv.appendChild(Ingredientsicon)
                Ingredientsicon.appendChild(h3)
                Ingredientsicon.appendChild(p)
                Ingredientsicon.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
                    $(".sidebar").animate({left:-sidebarinnerwidth})
                    $(".loading").fadeIn(0);
                    $(".loading").fadeOut(4000);
                    const Ingredientsname = event.currentTarget.getAttribute('id')
                    document.querySelector('.Ingredients').classList.replace("d-block","d-none")
                    document.querySelector('.Ingredients-details').classList.replace("d-none","d-block")
                    document.querySelector('.categorie-details').classList.replace("d-block","d-none")
                    document.querySelector('.area-details').classList.replace("d-block","d-none")
                    document.querySelector('.meals').classList.replace("d-block","d-none")
                    showIngredients(Ingredientsname)
                console.log(Ingredientsname)
                });
            })
        }
        window.onload = function() {
            fetchData();
            categoriesfetchData();
            areasfetchdata();
            Ingredientsfetchdata()
        };
    // Ingredients-end
    // contactus-start
    $(".contact-us-link").on("click",function(){
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
        $(".loading").fadeIn(0);
    $(".loading").fadeOut(4000);
        $(".meal").addClass("d-none")
        $(".meals").addClass("d-none")
        $(".categroies").addClass("d-none")
        $(".Ingredients").addClass("d-none")
        $(".contact-us").removeClass("d-none")
        $(".contact-us").addClass("d-block")
        $(".search").addClass("d-none")
        $("#results").addClass("d-none")
        $(".sidebar").animate({left:-sidebarinnerwidth})
        $('.categorie-details').hide(0)
        $('.area-details').hide(0)
        $('.Ingredients-details').hide(0)
    })
    // contactus-end
    // search-start
    document.getElementById('search').addEventListener("input",async function(){
        const searchInput = document.getElementById('search').value;
             await searchdata(searchInput);
             if (searchInput === '') {
                document.getElementById('results').innerHTML = '';
                return;
            }
    })
        async function searchdata(name) {
            try {
                const searchResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
                const searchData = await searchResponse.json();
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ''; 
                if (searchData.meals) {
                    searchData.meals.forEach(meal => {
                        const mealDiv = document.createElement('div');
                        mealDiv.classList.add('col-md-3');
                        const h2 = document.createElement('h2');
                        h2.textContent = meal.strMeal; 
                        const image=document.createElement("div")
                        image.classList.add("image")
                        image.setAttribute("id",meal.idMeal)
                        const img = document.createElement('img');
                        img.src = meal.strMealThumb; 
                        img.alt = meal.strMeal; 
                        const layer =document.createElement("div")
                        layer.classList.add("layer")
                        layer.appendChild(h2);
                        image.appendChild(layer)
                        image.appendChild(img);
                        mealDiv.appendChild(image);
                        resultsDiv.appendChild(mealDiv);
                        image.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
                            $(".sidebar").animate({left:-sidebarinnerwidth})
                            $(".loading").fadeIn(0);
                            $(".loading").fadeOut(4000);
                            const mealId = event.currentTarget.getAttribute("id");
                            document.querySelector('.search').classList.add("d-none")
                            $("#results").addClass("d-none")
                            document.querySelector('.meals').classList.replace("d-none","d-block")
                            showMealDetails(mealId);
                            displaysearchdata(meal)
                        });
                        
                      
                    });
                } else {
                    resultsDiv.innerHTML = '<p class="text-white">No meals found.</p>'; 
                }
            } catch (error) {
                console.error('Fetch error:', error);
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = '<p class="text-white">An error occurred while fetching data.</p>';
            }
        }
        // searchwithletter
        document.getElementById('lettersearch').addEventListener("input", async function () {
            const searchInput = document.getElementById('lettersearch').value.trim();
            if (searchInput === '') {
                document.getElementById('results').innerHTML = '';
                return;
            }
            const firstLetter = searchInput.charAt(0).toUpperCase();
            await searchdataletter(firstLetter);
        });
        async function searchdataletter(letter) {
            try {
                const searchResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
                const searchData = await searchResponse.json();
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ''; 
                if (searchData.meals) {
                    searchData.meals.forEach(meal => {
                        const mealDiv = document.createElement('div');
                        mealDiv.classList.add('col-md-3');
                        const h2 = document.createElement('h2');
                        h2.textContent = meal.strMeal; 
                        const image=document.createElement("div")
                        image.classList.add("image")
                        image.setAttribute("id",meal.idMeal)
                        const img = document.createElement('img');
                        img.src = meal.strMealThumb; 
                        img.alt = meal.strMeal; 
                        const layer =document.createElement("div")
                        layer.classList.add("layer")
                        layer.appendChild(h2);
                        image.appendChild(layer)
                        image.appendChild(img);
                        mealDiv.appendChild(image);
                        resultsDiv.appendChild(mealDiv);
                        image.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
                            $(".sidebar").animate({left:-sidebarinnerwidth})
                            $(".loading").fadeIn(0);
                            $(".loading").fadeOut(4000);
                            const mealId = event.currentTarget.getAttribute("id");
                            document.querySelector('.search').classList.add("d-none")
                            $("#results").addClass("d-none")
                            document.querySelector('.meals').classList.replace("d-none","d-block")
                            showMealDetails(mealId);
                            displaysearchdata(meal)
                        });
                    });
                } else {
                    resultsDiv.innerHTML = '<p>No meals found starting with that letter.</p>'; 
                }
            } catch (error) {
                console.error('Fetch error:', error);
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
            }
        }
         // searchwithletter-end
        //  meal-details-start
async function showMealDetails(mealId){
    const showmealfetch= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
const meal=await showmealfetch.json()
const meals= meal.meals[0]

displaymealdetails(meals)


}

function displaymealdetails(mealsdata){
    const container= document.getElementById('meal')
       const ingredientsList = [];
       for (let i = 1; i <=20; i++) {
           const ingredient = mealsdata[`strIngredient${i}`];
           const measure = mealsdata[`strMeasure${i}`];
           if (ingredient) {
               ingredientsList.push(`<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`);
           }
    container.innerHTML=`
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="image-details">
              <img class="w-100" src="${mealsdata.strMealThumb}" alt="${mealsdata.strMeal}">
              <h2 class="text-white">${mealsdata.strMeal}</h2>
            </div>
          </div>
          <div class="col-md-8 text-white">
            <h3>Instructions</h3>
            <p>${mealsdata.strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${mealsdata.strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${mealsdata.strCategory}</h3>
             <h3>Ingredients:</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredientsList.join('')}
                </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap text-white">
              ${mealsdata.strSource ? `<a target="_blank" href="${mealsdata.strSource}" class="btn btn-success text-white me-2">Source</a>` : ''}
              ${mealsdata.strYoutube ? `<a target="_blank" href="${mealsdata.strYoutube}" class="btn btn-danger text-white">Youtube</a>` : ''}
            </ul>
          </div>
        </div>
      </div>
    `
 }}
//  meal-details-end
// displaysearchmealdetails-start

function displaysearchdata(meal) {
    const container = document.getElementById('meal');
    const ingredientsList = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        
        if (ingredient) {
            ingredientsList.push(`<li class="alert alert-info m-2 p-1">${measure} ${ingredient}</li>`);
        }
    }
    container.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="image-details">
              <img class="w-100" src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h2 class="text-white">${meal.strMeal}</h2>
            </div>
          </div>
          <div class="col-md-8 text-white">
            <h3>Instructions</h3>
            <p>${meal.strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
            <h3>Ingredients:</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${ingredientsList.join('')}
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap text-white">
              ${meal.strSource ? `<a target="_blank" href="${meal.strSource}" class="btn btn-success text-white me-2">Source</a>` : ''}
              ${meal.strYoutube ? `<a target="_blank" href="${meal.strYoutube}" class="btn btn-danger text-white">Youtube</a>` : ''}
            </ul>
          </div>
        </div>
      </div>
    `;
}
// categroies-start
async function showcategories(categoriename){
    const showcategoriefetch= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriename}`)
const categories= await showcategoriefetch.json()
const categorie= categories.meals;
const container= document.getElementById("categroiesdetails")
container.innerHTML=''
categorie.forEach(categoriemeal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col-md-3');
    const h2 = document.createElement('h2');
    h2.textContent = categoriemeal.strMeal; 
    const image=document.createElement("div")
    image.classList.add("image")
    image.setAttribute("id",categoriemeal.idMeal)
    const img = document.createElement('img');
    img.src = categoriemeal.strMealThumb; 
    img.alt = categoriemeal.strMeal; 
    const layer =document.createElement("div")
    layer.classList.add("layer")
    layer.appendChild(h2);
    image.appendChild(layer)
    image.appendChild(img);
    mealDiv.appendChild(image);
    container.appendChild(mealDiv);
    image.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
        $(".sidebar").animate({left:-sidebarinnerwidth})
        $(".loading").fadeIn(0);
        $(".loading").fadeOut(4000);
        const mealId = event.currentTarget.getAttribute("id");
        $('.categorie-details').hide(0)
        document.querySelector('.meals').classList.replace("d-none","d-block")
        document.querySelector('.categorie-details').classList.replace("d-block","d-none")
        showMealDetails(mealId);
    });
});
}
// categroies-end
// area-start
async function showareas(areaname){
    const showareafetch= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaname}`)
const areasdata= await showareafetch.json()
const areas= areasdata.meals;
const container= document.getElementById("areadetails")
container.innerHTML=''
areas.forEach(areasmeal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col-md-3');
    const h2 = document.createElement('h2');
    h2.textContent = areasmeal.strMeal; 
    const image=document.createElement("div")
    image.classList.add("image")
    image.setAttribute("id",areasmeal.idMeal)
    const img = document.createElement('img');
    img.src = areasmeal.strMealThumb; 
    img.alt = areasmeal.strMeal; 
    const layer =document.createElement("div")
    layer.classList.add("layer")
    layer.appendChild(h2);
    image.appendChild(layer)
    image.appendChild(img);
    mealDiv.appendChild(image);
    container.appendChild(mealDiv);
    image.addEventListener('click', function(event) {
        $(".bars-icon").show(0)
        $(".close-icon").hide(0)
        $(".sidebar").animate({left:-sidebarinnerwidth})
        $(".loading").fadeIn(0);
        $(".loading").fadeOut(4000);
        const mealId = event.currentTarget.getAttribute("id");
        document.querySelector('.meals').classList.replace("d-none","d-block")
        document.querySelector('.area-details').classList.replace("d-block","d-none")
        showMealDetails(mealId);
    });
});
}
// area-end
// Ingredients-start
async function showIngredients(Ingredientsname){
    const showIngredientsnamefetch= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredientsname}`)
const Ingredientsdata= await showIngredientsnamefetch.json()
const Ingredients= Ingredientsdata.meals;
console.log(Ingredients)
const container= document.getElementById("Ingredientsdetails")
container.innerHTML=''
Ingredients.forEach(Ingredientsmeal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col-md-3');
    const h2 = document.createElement('h2');
    h2.textContent = Ingredientsmeal.strMeal; 
    const image=document.createElement("div")
    image.classList.add("image")
    image.setAttribute("id",Ingredientsmeal.idMeal)
    const img = document.createElement('img');
    img.src = Ingredientsmeal.strMealThumb; 
    img.alt = Ingredientsmeal.strMeal; 
    const layer =document.createElement("div")
    layer.classList.add("layer")
    layer.appendChild(h2);
    image.appendChild(layer)
    image.appendChild(img);
    mealDiv.appendChild(image);
    container.appendChild(mealDiv);
    image.addEventListener('click', function(event) {
    $(".bars-icon").show(0)
    $(".close-icon").hide(0)
        $(".sidebar").animate({left:-sidebarinnerwidth})
        $(".loading").fadeIn(0);
        $(".loading").fadeOut(4000);
        const mealId = event.currentTarget.getAttribute("id");
        $('.Ingredients-details').hide(0)
        document.querySelector('.meals').classList.replace("d-none","d-block")
        document.querySelector('.Ingredients-details').classList.replace("d-block","d-none")
        showMealDetails(mealId);
    });
});
}
// Ingredients-end