
// load rest countries 
const loadRestCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
        .then(res => res.json())
        .then(data => displayRestCountries(data))
}

const displayRestCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-style');
        countriesContainer.appendChild(countryDiv);

        countryDiv.innerHTML = `
            <h4>Name: ${country.name.common}</h4>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick="loadDetailsCountries('${country.cca2}')" class="btn btn-warning px-4">Details</button>
        `
    })
}

// load detail country
const loadDetailsCountries = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

// display country details
const displayCountryDetails = (country) => {
    const countryDetailsContainer = document.getElementById('country-details');
    countryDetailsContainer.classList.add('country-style')

    countryDetailsContainer.innerHTML = `
        <img src="${country.flags.png}" class="w-50">
        <h4 class="mb-0">Name: ${country.name.common}</h4>
        <p class="mb-0">Region: ${country.region}</p>
        <p class="mb-0">Independence Status: ${country.independent ? 'Independent' : 'Not Independent'}</p>
        <p class="mb-0">Population: ${country.population}</p>
    `
}

loadRestCountries()