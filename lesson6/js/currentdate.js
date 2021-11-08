const event = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString(undefined, options));

function getCurrentDate() {
    return event.toLocaleDateString('en-UK',options);
};

document.getElementById("currentDateString").textContent = getCurrentDate();