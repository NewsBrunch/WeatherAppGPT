function getWeather() {
  const apiKey = '268cf55ebddfbfb9abddb986a8d1e548'; // Replace with your weather API key
  const location = document.getElementById('locationInput').value;

  // Make the API call to fetch weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Parse the JSON response and update the weather forecast section
      const weatherForecast = document.getElementById('weatherForecast');
      weatherForecast.innerHTML = `
        <h2>Weather forecast for ${data.name}</h2>
        <p>Temperature: ${(data.main.temp-273.15).toFixed(2)} Degree Celcius</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Country: ${data.sys.country}</p>
      `;
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}
