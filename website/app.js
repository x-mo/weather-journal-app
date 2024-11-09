// Personal API Key for OpenWeatherMap API
const apiKey = 'dcb343a416106633908dd8e70c52a5ca&units=imperial';

/* Global Variables */
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const generateButton = document.getElementById('generate');
const zipInput = document.getElementById('zip');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

//Fetch project data
async function getData(url) {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

//Fetch weather data
async function getWeather(url) {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

generateButton.addEventListener('click', function () {
    
    const zipcode = zipInput.value;
    const url = `${weatherBaseUrl}&zip=${zipcode}&appid=${apiKey}`;
    getWeather(url);

});

// getData('/all');