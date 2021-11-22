const requestforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8f46d005ff9b2c64a98df419a1a881dd";

fetch(requestforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const forecast1 = jsObject.list;
    console.log(forecast1);


 /* Filter array items based on search criteria (query)
 */

  var results = forecast1.filter(({ dt_txt} ) => dt_txt.includes('18:00:00'));
console.log(results);

const daysofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = 0;

results.forEach(weaforecast => {
  let eventdate = new Date(weaforecast.dt_txt);
  let forcasttemp = weaforecast.main.temp
  document.querySelector(`#forcastdayvalue${day + 1}`).textContent = daysofweek[eventdate.getDay()];
  document.querySelector(`#forcasttempvalue${day + 1}`).textContent = forcasttemp.toFixed(0);
  day++;
});

});

/*
const weatherforecast = results['main'];
   for (let i = 0; i < weatherforecast.temp; i++ ) {

    let foretemp = document.createElement('td');
    let foretempval = document.createElement('a');

    foretemp.textContent = weatherforecast[i].main.temp;

    foretemp.appendChild(foretempval);

    document.querySelector('tr.forecast-results').appendChild(foretempval);
  }

*/