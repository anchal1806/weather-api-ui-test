module.exports = {

async weatherMapAPI(apiURL,queryCity,unitMetric,apiKey){
  /*Using this function,getting temperature of given city from API */
  return new Promise((resolve, reject) => {
  let apiResponse = '';
const https = require('https');

const req = https.get(apiURL+queryCity+unitMetric+apiKey, (resp) => {
    let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;  
  });
 
  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    apiResponse = JSON.parse(data).main.temp;
    resolve(apiResponse);
  });
});
req.on("error", (err) => {
  console.log("Error: " + err.message);
});
req.end();
});
}
}

   