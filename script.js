document.getElementById("searchBtn").addEventListener("click", () => {
  const cityNameString = document.getElementById("cityNameString").value;
  const city = () => {
    return document.getElementById("cityNameString").value;
  };

  if (cityNameString == "" || cityNameString == " ") {
    alert("Invalid City Name");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city()}&appid=d6d47722dc3390a6963bb96230a71b82`
    )
      .then((response) => response.json())
      .then((data) => {
        // Main Temp Checker
        const tempGater = data.main;
        const mainTemp = tempGater.temp;
        const tempCelcius = mainTemp - 273.15;
        document.getElementById("temp").innerHTML =
          tempCelcius.toFixed(2) + " &deg;C";

        // City Name Checker
        document.getElementById("cityName").innerText = data.name;

        // Weather Type Checker
        const weatherType = data.weather[0];
        document.getElementById("weatherType").innerText = weatherType.main;
      });
  }
});
