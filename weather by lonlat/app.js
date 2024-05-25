let weather = {
    apiKey: "5cbf2eccb87c55d69401aef0c629ec01",
    fetchWeather: function (longitude,lattitude) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lattitude + "&lon=" + longitude +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const {temp_min,temp_max} = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = (temp) + "°C";
      document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
      document.querySelector(".temprange").innerText="Min/Max Temp. : "+ (temp_min) + "°C" + " / " + (temp_max) + "°C";
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')";
      document.querySelector(".weather").classList.remove("loading");
    },
};

document.querySelector(".button").addEventListener("click", function () {
  const m= document.querySelector(".search-bar1").value;
  const n= document.querySelector(".search-bar2").value;
  weather.fetchWeather(m,n);
});

