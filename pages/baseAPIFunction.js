class baseAPI
{
baseAPI(){
}
baseAPI (apiURL,apiKey){
    this.apiURL = apiURL;
    this.apiKey = apiKey;
}
baseAPI(apiURL,cityName,apiKey){
    this.apiURL = apiURL;
    this.cityName = cityName;
    this.apiKey = apiKey;
}
baseAPI(apiURL,cityName,unitMetric,apiKey){
    this.apiURL = apiURL;
    this.cityName = cityName;
    this.unitMetric = unitMetric;
    this.apiKey = apiKey;
}
}