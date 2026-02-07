const apiKey = "86f5087ef5f542de7753774fe9ca0cf4"; // OpenWeather API key

function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp}°C`;
            document.getElementById("condition").innerText = `☁ Condition: ${data.weather[0].description}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(() => {
            alert("City not found!");
        });
}
