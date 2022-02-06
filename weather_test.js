const {weatherFunctionPage,weatherAPI,constantsPage,apiHelperPage } = inject();
const assert = require('assert');

Feature('Weather Analysis');
/* 
1. we are comparing same city's temperature from API and UI and failing the assertion if difference is greater than 3 
 2. Also throwing an exception if two compared city's temperature is greater than 10 */
Scenario('Verify user is able to see temperature of different cities and perform assertion', async ({ I }) => {

let jammuTempFromUI = await weatherFunctionPage.getWeatherFromAccuweather(constantsPage.jammuCity,constantsPage.accuweatherJammuCityLandingPage);
I.say('Jammu temperature from Accuweather UI is : '+jammuTempFromUI);

 let jammuTempFromAPI = await weatherAPI.weatherMapAPI(apiHelperPage.apiURL,constantsPage.jammuCity,apiHelperPage.unitMetric,apiHelperPage.apiKey);
I.say('Jammu temperture from OpenWeather API is : '+ jammuTempFromAPI);
assert.equal(weatherFunctionPage.compareAPITempWithUI(jammuTempFromUI,jammuTempFromAPI),true,'Temperature different between API and UI for the Jammu city is more than 6°C');

let bengaluruTempFromUI = await weatherFunctionPage.getWeatherFromAccuweather(constantsPage.bengaluruCity,constantsPage.accuweatherBengaluruCityLandingPage);
I.say('Bengaluru temperature from Accuweather UI is : '+bengaluruTempFromUI );

 let bengaluruTempFromAPI = await weatherAPI.weatherMapAPI(apiHelperPage.apiURL,constantsPage.bengaluruCity,apiHelperPage.unitMetric,apiHelperPage.apiKey);
I.say('Bengaluru temperture from OpenWeather API is : '+ bengaluruTempFromAPI );
assert.equal(weatherFunctionPage.compareAPITempWithUI(bengaluruTempFromUI,bengaluruTempFromAPI),true,'Temperature different between API and UI for the Bengaluru city is more than 6°C');
/*temperature difference between two cities*/
try {
  I.say(await weatherFunctionPage.compareTwoCitiesTemperature(jammuTempFromUI,bengaluruTempFromUI));
} catch (e) {
  console.error(e);
}
});
