module.exports = {
  //UI locators and city's name and url
  waitLimit:"60",
  accuweatherSearchBar: '//div[@class="searchbar-content"]//input[@class="search-input"]',
  accuweatherTemperature:"//div[@class='forecast-container']//div[@class='temp']",
  jammuCity:'Jammu,Jammu and Kashmir,IN',
  bengaluruCity:'bengaluru,Karnataka,IN',
  accuweatherBengaluruCityLandingPage: "https://www.accuweather.com/en/in/bengaluru",
  accuweatherJammuCityLandingPage:"https://www.accuweather.com/en/in/jammu",
  enterKey:'Enter',
  getTemperature:"//div[@class='forecast-container']//div[@class='temp']",
//API related Data 
  apiURL : 'https://api.openweathermap.org/data/2.5/weather?q=',
  unitMetric: '&units=metric',
  apiKey: '&appid=7fe67bf08c80ded756e598d6f8fedaea'
}
