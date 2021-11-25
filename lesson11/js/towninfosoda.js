const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.log(jsonObject);

   
    let towninfo = jsonObject['towns'];
   towninfo.forEach((eventitem) => {
     if (eventitem.name == "Soda Springs"){
  
  let eventsdatasection = document.createElement('section');
   let events1 = document.createElement('p');
  let events2 = document.createElement('p');
  let events3 = document.createElement('p');

 

  events1.innerHTML = eventitem.events[0];
  events2.innerHTML = eventitem.events[1];
  events3.innerHTML = eventitem.events[2];

  eventsdatasection.appendChild(events1);
  eventsdatasection.appendChild(events2);
  eventsdatasection.appendChild(events3);

  document.querySelector('div.upevents').appendChild(eventsdatasection);
   }
   })
  });
