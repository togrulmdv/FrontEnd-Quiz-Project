// async function checkWeather(){

// }
// fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.40&lon=49.86&appid=25e6b15217a429db2159a5489522b44d")
// .then(response => response.json())
// .then(data => {console.log(data)})
async function checkWeather(){
    const response=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.40&lon=49.86&appid=25e6b15217a429db2159a5489522b44d");
var data= await response.json()
}