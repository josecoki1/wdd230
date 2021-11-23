const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towninfo = jsonObject['towns'];
   for (let i = 0; i < towninfo.length; i++ ) {
  
  let towns = document.createElement('section');
   let tname = document.createElement('h2');
  let motto = document.createElement('h3');
  let yfounded = document.createElement('p');
  let population = document.createElement('p');
  let anrainfall = document.createElement('p');
  let pic = document.createElement('picture');
  let img = document.createElement('img');
  
  tname.textContent = towninfo[i].name;
  motto.textContent = towninfo[i].motto;
  yfounded.textContent = 'Year Founded: ' + towninfo[i].yearFounded;
  population.textContent = 'Population: ' + towninfo[i].currentPopulation;
  anrainfall.textContent = 'Annual Rain Fall: ' + towninfo[i].averageRainfall;
  img.setAttribute('src', 'images/' + towninfo[i].photo);
  img.setAttribute('alt', towninfo[i].photo);

//img.setAttribute('src', prophets[i].imageurl);
//img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
  
  towns.appendChild(tname);
  towns.appendChild(motto);
  towns.appendChild(yfounded);
  towns.appendChild(population);
  towns.appendChild(anrainfall);
  towns.appendChild(img);
  
  document.querySelector('div.townsum').appendChild(towns);

  }
 

  });