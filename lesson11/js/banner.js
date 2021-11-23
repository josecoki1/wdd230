//show and hide banner if its Friday
var n = new Date();
var d = n.getDay();
var chg = document.querySelector(".banner");

// console.log(d);


function SetDivContent() {
    if (d === 5) {
        chg.style.display = "block";
    }
    else {
        chg.style.display = "none";
    }
}

//    console.log(chg);

SetDivContent();