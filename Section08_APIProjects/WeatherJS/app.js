// Init Weather object
// Get city, state from Local Storage
const weather = new Weather('Boston', 'MA');

// Change location
// weather.changeLocation('Miami', 'FL');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
}
