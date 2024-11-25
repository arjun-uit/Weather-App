const apiKey = "d9f106142c6a3f62950449d15455f219";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

// const humidity = data.main.humidity
// const icon = document.getElementById("icon")
// if(humidity < 60){
//  icon.src = "www.png"     
//     }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +" °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});









