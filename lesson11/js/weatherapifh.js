//API Key 8f46d005ff9b2c64a98df419a1a881dd

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=8f46d005ff9b2c64a98df419a1a881dd";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const ctemp = Math.round(JSON.parse((jsObject.main.temp - 273.15) * 9/5) + 32);
    //console.log(ctemp);
    document.getElementById('temp').textContent = ctemp;
    document.getElementById('currentw').textContent = jsObject.weather[0].main;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('currentwicon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('currentwicon').setAttribute('alt', desc);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windsp').textContent = jsObject.wind.speed;

    const t = JSON.parse((jsObject.main.temp - 273.15) * 9/5) + 32;
   // console.log(t);
   const s = JSON.parse(jsObject.wind.speed);
   //console.log(s);


//Introducing formula for calculation

let calc = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * t * (Math.pow(s,0.16)));

//Setting to 0 decimals
let result = calc.toFixed(0);
//console.log(result);


//Set conditional criteria

    if (t >= 50) {
        result1 = "N/A";
    }
    else if (s <= 3) {
        result1 = "N/A";
    }
    else {
        result1 = result + "&#176 F"
    }


    // console.log(result1);

//Output formula results
document.querySelector('#output').innerHTML = (result1);
  });

  
