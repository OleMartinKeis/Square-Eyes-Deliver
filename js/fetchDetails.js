const detailContainer = document.querySelector(".movie-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://flowerpower-noroff.one/wp-json/wc/store/products/" + id;

async function fetchMovie() {

    try {
        const response = await fetch(url);
        const movieDetails = await response.json();

        createHTML(movieDetails);
    }

    catch(error) {
        console.log(error)
        detailContainer.innerHTML = displayError("An error occured while calling the API");
    }

}

fetchMovie()

function createHTML(movieDetails) {
    detailContainer.innerHTML = `<h1>${movieDetails.name}</h1><div class="movie-details"><img src="${movieDetails.images[0].src}"<p>${movieDetails.description}`
}