const searchInput = document.querySelector(".search");
const suggestionContainer = document.querySelector(".suggestions")

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)

const citiesState = [];

fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
    .then((response) => response.json())
    .then((responseData) => {
        citiesState.push(...responseData);
    })


function findMatches(wordToMatch,citiesState) {
    return citiesState.filter((citiesState) => {
        const regX = new RegExp(wordToMatch, "gi");

        return citiesState.city.match(regX) || citiesState.state.match(regX);
    })
}

function displayMatches() {
    const findArray = findMatches(this.value, citiesState)
    
    const matchCity = findArray.map((place) => {
        const regX = new RegExp(this.value, "gi");

        const cityName = place.city.replace(
            regX,
            `<span class="highlight">${this.value}</span>`
        )
        const stateName = place.city.replace(
            regX,
            `<span class="highlight">${this.value}</span>`
        )

        return `<li class="name">${cityName}, ${stateName}</li>`
    }).join("")

    suggestionContainer.innerHTML = matchCity
}
