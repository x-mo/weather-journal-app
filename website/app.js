/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = 'appid=dcb343a416106633908dd8e70c52a5ca&units=imperial';

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
    
    const res = await fetch(url+apiKey);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const zip = 'zip=11765&';

// getWeather(weatherBaseUrl+zip);
getData('/all');