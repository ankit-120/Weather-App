const baseUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66d2be9238msha4cebd8fecf47eap1cec3bjsnf5ee297abac5',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const displayCityName = (location) =>{
    const cityName = document.getElementById('cityName');
    cityName.innerText = `${location.name},${location.region}`
}
const displayDetails = (data) =>{
    let text = '';
    text += `Temp : ${data.current.temp_c}<br>`;
    text += `Feelslike : ${data.current.feelslike_c}<br>`;
    text += `Max-Temp : ${data.forecast.forecastday[0].day.maxtemp_c}<br>`;
    text += `Min-Temp : ${data.forecast.forecastday[0].day.mintemp_c}`;
    const weatherStats = document.getElementById('weatherStats');
    weatherStats.innerHTML = text;
}
const displayConditon = (condition) =>{
    const conditionImg = document.getElementById('conditionImg');
    conditionImg.src = condition.icon;
    const conditionText = document.getElementById('conditionText');
    conditionText.innerText = condition.text;
}

const getWeather = async(inputCity) =>{
    const url = `${baseUrl}${inputCity}&days=3`;
    const resp = await fetch(url,options);
    const data = await resp.json();
    console.log(data);
    displayCityName(data.location);
    displayConditon(data.current.condition);
    displayDetails(data);
}

const searchCity = () =>{
    const inputCity = document.getElementById('inputCity').value;
    getWeather(inputCity);
}

const searchBtn = document.getElementById('searchBtn');
searchBtn.onclick = () =>{
    searchCity();
}