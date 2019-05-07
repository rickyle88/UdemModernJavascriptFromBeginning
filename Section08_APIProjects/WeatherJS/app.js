// Init Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather object
// Get city, state from Local Storage
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
   

    // Change location
    weather.changeLocation(city, state);

     // Set local storage
     storage.setLocationData(city, state);

    // Call getWeather() again
    getWeather();

    // Close modal using jQuery
    $('#locModal').modal('hide');

});

// Change location
// weather.changeLocation('Miami', 'FL');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(result => {
            console.log(result);
            ui.paint(result);
        })
        .catch(err => console.log(err));
}
