
var counterContainer = document.querySelector(".site-counter");
let localStorage = window.localStorage;
let now = localStorage.getItem("newVisit");
let previousVisit = localStorage.getItem("previousVisit");
let toDisplay;
let dayDiff;

if(previousVisit == null) {
  // Logic if its the first time visiting
  localStorage.setItem('previousVisit', new Date());
  toDisplay = "Congrats on visiting our site for the first time!";
  document.getElementsByClassName('site-counter').innerHTML = toDisplay;
} else {
  //logic if visiting again, in days
  localStorage.setItem('newVisit', new Date());
  let previousVisit = Date.parse(localStorage.previousVisit);
  let singleDay = 86400000;
  dayDiff = Date.parse(localStorage.newVisit) - Date.parse(localStorage.previousVisit);
  toDisplayMath = Math.round(dayDiff/singleDay);
  toDisplay = "It has been " + toDisplayMath + " days since you last visited this site.";
  
  //Clear localStorage with below command
  //localStorage.clear('newVisit');
}

var counterContainer = document.querySelector(".site-counter");
var visitCount = toDisplay;
counterContainer.innerHTML = visitCount;

console.log(previousVisit);
console.log(toDisplay);