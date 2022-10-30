const baseURL = "https://flowerpower-noroff.one/wp-json/wc/store/products";
const movieContainer = document.querySelector(".movies_container");
const loaderContainer = document.querySelector(".loader");

async function getMovies(url){

    try {
        const response = await fetch(url);

        const movies = await response.json();

        console.log(movies);

        movieContainer.innerHTML = "";

        movies.forEach(function(product) {
        movieContainer.innerHTML += `<a href="details.html?id=${product.id}" class="movies"><h2>${product.name}</h2><img class="movies-image" src="${product.images[0].src}" style="max-width: 450px;"></div>`
        
    })
    }

    catch(error) {
        console.log(error);
        movieContainer.innerHTML = displayError("An error occured while calling the API");
    }


    

}

getMovies(baseURL);