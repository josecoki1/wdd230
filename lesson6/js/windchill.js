//Gathering Temperature information
let t = parseFloat(document.querySelector('#temp').textContent);

console.log(t);

//Gathering Wind Speed Information
let s = parseFloat(document.querySelector('#windsp').textContent);

console.log(s);



//Introducing formula for calculation

let calc = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * t * (Math.pow(s,0.16)));

//Setting to 0 decimals
let result = calc.toFixed(0);



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