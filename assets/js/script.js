const searchBtn = document.getElementById("btn");
const searchInput = document.getElementById("city");
const body = document.getElementById("widget");
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?";
const apiKey = "appid=c3957ed1bb4a29e783bef453669d06e8";

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const cityStateInput = searchInput.value;
    console.log(cityStateInput);
    getWeather(`${baseUrl}q=${cityStateInput}&${apiKey}`);
});

function getWeather(url) {

    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        var day1 = data.list[0];
        var day2 = data.list[8];
        var day3 = data.list[16];
        var day4 = data.list[24];
        var day5 = data.list[32];
        var week = [day1, day2, day3, day4, day5];
        console.log(day1);
        console.log(day2);
        console.log(day3);
        console.log(day4);
        console.log(day5);
        console.log(week)
        console.log(data)
        getLayout(week)}); 
};

function getLayout(week) {

    week.forEach(function (i) {
        var card = document.createElement('section')
        body.appendChild(card);
        card.classList.add('card');
        var date = document.createElement('h2')
        card.appendChild(date);
        date.textContent = i.dt_txt;
        var temp = document.createElement('h4')
        card.appendChild(temp)  
        temp.textContent = "Temprature: " + i.main.temp + " F";
        var humidity = document.createElement('h4')
        card.appendChild(humidity)
        humidity.textContent = "Humidity: " + i.main.humidity + "%";
        var wind = document.createElement('h4')
        card.appendChild(wind)
        wind.textContent = "Wind Speed:" + i.wind.speed + " MPH";
    })
}