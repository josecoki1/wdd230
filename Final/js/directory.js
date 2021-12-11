const requestURL = "json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    for (let i = 0; i < members.length; i++ ) {
  
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let bd = document.createElement('p');
  let bp = document.createElement('p');
  let ad = document.createElement('p');
 
  h2.textContent = members[i].name;
  bd.textContent = 'Phone Number: ' + members[i].phonenumber;
  bp.textContent = members[i].website;
  ad.textContent = 'Address: ' + members[i].Address;

  card.appendChild(h2);
  card.appendChild(bd);
  card.appendChild(bp);
  card.appendChild(ad);
  
  document.querySelector('div.cards').appendChild(card);
 

  }});

