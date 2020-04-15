var getLocation = require("../utilites/location");
var getWeather = require("../utilites/weather");
module.exports = async function(location) {

  var myLocation = location || (await getLocation());
  // console.log(myLocation);
  var weather = await getWeather(myLocation);
  // 
  console.log(`Forecast for ${myLocation}`);
  
};
