var getLocation = require("../utilites/location");
var getWeather = require("../utilites/weather");
module.exports = async function(location) {
  var myLocation = location || (await getLocation());

  // console.log(myLocation);
  var weather = await getWeather(myLocation);
  // console.log(weather);
  var temp=Math.ceil(weather[0]["the_temp"]);
  var conditions=(weather[0]["weather_state_name"]);
  console.log(`Current conditions in ${myLocation}
            ${temp}°C  ${conditions}    `);
};
