
let getLatitude;
let getLongitude;
const p = document.querySelector('#toBeFilled');
let inputData = document.querySelector('#inputName');

let mainButton = document.querySelector('#mainButton');

mainButton.addEventListener('click', getLatitudeLongitude);
mainButton.addEventListener('click', getWeatherData);

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=642c0a4363047047940de08c3294a647


function getLatitudeLongitude(){
    let urlToGetLatitudeAndLongitude = `http://api.openweathermap.org/geo/1.0/direct?q=${inputData.value}&limit=5&appid=642c0a4363047047940de08c3294a647`;
    fetch(urlToGetLatitudeAndLongitude)
    .then((response) => response.json())
    .then((data) => {
        getLatitude = data[0].lat;
        getLongitude = data[0].lon;
        console.log(`the latitude is ${getLatitude}, and longitude is ${getLongitude}`)
    })
}

function getWeatherData(){
    setTimeout(() => {
        let urlToGetWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${getLatitude}&lon=${getLongitude}&appid=642c0a4363047047940de08c3294a647&units=metric`;

        fetch(urlToGetWeather)
        .then((response) => response.json())
        .then((data) => {
            const message = `It is currently <span>` + data.main.temp + `</span>°C in ${inputData.value}`
            p.innerHTML = message;
        })
        
    }, 500);
}



let link = document.querySelector('#link');
link.addEventListener('click', aboutThis);

function aboutThis(){
    const paragraphAboutThis = document.querySelector('#aboutThis');
    paragraphAboutThis.innerHTML = 'This website uses the Fetch method to connect with two APIs from <a href="https://openweathermap.org/" target="_blank">OpenWeather</a> to show this information. The first is Geocoding, which allows us to get geographical coordinates data by using the location (name of the city) inserted by the user. The second, Current Weather, allow us to access the current weather data of over 200.000 cities.'
}






