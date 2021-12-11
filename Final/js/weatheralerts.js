//API Key 8f46d005ff9b2c64a98df419a1a881dd
const alertapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.826&lon=-111.7897&appid=8f46d005ff9b2c64a98df419a1a881dd";
//const alertapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.4555&lon=-109.5287&appid=8f46d005ff9b2c64a98df419a1a881dd";
fetch(alertapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
     //console.log(jsObject);
     var strings = JSON.stringify(jsObject);
     //console.log(strings);

     let alertchallenge = strings.includes("alerts");
     //console.log(alertchallenge);

       if (alertchallenge === false) {
        document.getElementById("closingbanner").style.display = "none";
    }

    else {

    }

   document.getElementById('advisorytitle').textContent = jsObject.alerts[0].event;
   document.getElementById('advisorymsg').textContent = jsObject.alerts[0].description;
    
});