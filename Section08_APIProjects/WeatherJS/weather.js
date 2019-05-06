class Weather{
    
    // Constructor is automatically called while creating an object.
    constructor(city, state){
        this.apiKey = '8d7a49c000ac398530b51586ffbe1e6c';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric
        `);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}