const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    //console.log(countries);
    const allCountriesHTML = countries.map(country =>getCountryHTML(country) );
    //console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}
//option 2
const getCountryHTML = (country) =>{
    const {name, flags, area} =country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <img src='${flags.png}'>
        </div>
    
    `
}
//option 1
/*
const getCountryHTML = ({name, flags, area}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <img src='${flags.png}'>
        </div>
    
    `
}
*/
/* orginal one
const getCountryHTML = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src='${country.flags.png}'>
        </div>
    
    `
}
*/
loadCountries();