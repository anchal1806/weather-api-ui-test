const { I,locatorsPage } = inject();
module.exports = {
    async getWeatherFromAccuweather(city_state_country,landingPageURL){
    /**This function hit https://www.accuweather.com/ url, input city name and 
     * gets temperature of entered city and call split function to get only 
     * temperature's value.
      */
    I.amOnPage('/');
    I.waitForVisible(locatorsPage.accuweatherSearchBar,locatorsPage.waitLimit);
    I.fillField(locatorsPage.accuweatherSearchBar,city_state_country);
    I.pressKey(locatorsPage.enterKey);
    I.waitInUrl(landingPageURL,30);
    const temp = await I.grabTextFromAll(locatorsPage.accuweatherTemperature);
    let convertTemp = temp.toString().split('°C');
    return convertTemp[0];
    },

    compareAPITempWithUI(temperatureFromUI,temperatureFromAPI){
    /* Here,Accepting temperature difference of +-3 from API and UI for the same city */
    if(Math.abs(temperatureFromAPI-temperatureFromUI)<=3){
         return true;
     }
         return false;
   },

    async compareTwoCitiesTemperature(tempCity1,tempCity2){ 
    /* This function compare two city's temperature if temperature is greater than 5 it throws custom
        exception saying There is more than 10°C difference in temperature between two cities  */
    if(Math.abs(tempCity1-tempCity2)>=10){
     throw 'There is more than 10°C difference in temperature between two cities';
    }
     else return 'Temperature difference between two city is within permissible limit that is less than or equal to 10°C';
},
    
  }
  