const { I,locatorsPage,weatherFunctionPage,weatherAPI } = inject();
const assert = require('assert');

Feature('Weather Analysis');
/* 
1. we are comparing same city's temperature from API and UI and failing the assertion if difference is greater than 3 
 2. Also throwing an exception if two compared city's temperature is greater than 5 */
Scenario('Verify user is able to see temperature of different cities and perform assertion', async ({ I }) => {

let jammuTempFromUI = await weatherFunctionPage.getWeatherFromAccuweather(locatorsPage.jammuCity,locatorsPage.accuweatherJammuCityLandingPage);
I.say('Jammu temperature from Accuweather UI is : '+jammuTempFromUI);

 let jammuTempFromAPI = await weatherAPI.weatherMapAPI(locatorsPage.apiURL,locatorsPage.jammuCity,locatorsPage.unitMetric,locatorsPage.apiKey);
I.say('Jammu temperture from OpenWeather API is : '+ jammuTempFromAPI);
assert.equal(weatherFunctionPage.compareAPITempWithUI(jammuTempFromUI,jammuTempFromAPI),true,'Temperature different between API and UI for the Jammu city is more than 6°C');

let bengaluruTempFromUI = await weatherFunctionPage.getWeatherFromAccuweather(locatorsPage.bengaluruCity,locatorsPage.accuweatherBengaluruCityLandingPage);
I.say('Bengaluru temperature from Accuweather UI is : '+bengaluruTempFromUI );

 let bengaluruTempFromAPI = await weatherAPI.weatherMapAPI(locatorsPage.apiURL,locatorsPage.bengaluruCity,locatorsPage.unitMetric,locatorsPage.apiKey);
I.say('Bengaluru temperture from OpenWeather API is : '+ bengaluruTempFromAPI );
assert.equal(weatherFunctionPage.compareAPITempWithUI(bengaluruTempFromUI,bengaluruTempFromAPI),true,'Temperature different between API and UI for the Bengaluru city is more than 6°C');

try {
  I.say(weatherFunctionPage.compareTwoCitiesTemperature(jammuTempFromUI,bengaluruTempFromUI));
} catch (e) {
  console.error(e);
}
});
