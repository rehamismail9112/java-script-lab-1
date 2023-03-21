function temperatureCheck(temperature) {
  return temperature >= 30 ? "HOT" : "Cold";
}

var todayTemperature = 25;
var result = temperatureCheck(todayTemperature);
console.log(result);
  
  window.location.href ="./temp.html"