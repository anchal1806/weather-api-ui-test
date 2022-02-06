const { setHeadlessWhen } = require('@codeceptjs/configure');
const path = require('path');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.accuweather.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    weatherFunctionPage: './pages/weatherFunction.js',
    locatorsPage: './pages/locators.js',
    weatherAPI: './pages/openWeatherAPI.js', 
    commonPage: './pages/common.js', 
    constantsPage: './pages/constants.js', 
    apiHelperPage: './pages/apiHelper.js', 
  },
  bootstrap: null,
  mocha: {},
  name: 'weatherInfoTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}