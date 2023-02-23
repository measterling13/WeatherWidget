const searchBtn = document.getElementById("btn");
const searchInput = document.getElementById("city");
const body = document.getElementById("widget");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const cityStateInput = searchInput.value;
    console.log(cityStateInput);
    getWeather(`${baseUrl}q=${cityStateInput}&${apiKey}`);
});
