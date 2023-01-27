# Weather-App
Provides the weather forecast of different cities

API name - WeatherApi.com  Source-rapidapi.com  https://rapidapi.com/weatherapi/api/weatherapi-com
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66d2be9238msha4cebd8fecf47eap1cec3bjsnf5ee297abac5',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Asansol&days=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
