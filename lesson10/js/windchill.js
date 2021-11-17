/*const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8f46d005ff9b2c64a98df419a1a881dd";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const t = JSON.parse((jsObject.main.temp - 273.15) * 9/5) + 32;
    console.log(t);
   const s = JSON.parse(jsObject.wind.speed);
   console.log(s);


//Introducing formula for calculation

let calc = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * t * (Math.pow(s,0.16)));

//Setting to 0 decimals
let result = calc.toFixed(0);
console.log(result);


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


    console.log(result1);

//Output formula results
document.querySelector('#output').innerHTML = (result1);

  });
*/
