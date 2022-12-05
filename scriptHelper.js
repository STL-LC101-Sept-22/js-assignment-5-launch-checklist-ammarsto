// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    // let planetNum = pickPlanet(myFetch());
    // let planet = myFetch()[planetNum];
    document.getElementById("missionTarget").innerHTML += `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}

function validateInput(testInput) {
    let entryNum = testInput.length;
    if (entryNum === 0) {
        return "Empty";
    } else if (isNaN(testInput)===true) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty") {
    alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
    alert("Make sure to enter valid information for each field!");
   } else {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
   }
   if (fuelLevel < 10000 || cargoLevel > 10000) {
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
   } else {
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
   }
   if (fuelLevel < 10000) {
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";    
   } else {
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
   }
   if (cargoLevel < 10000) {
    document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
   } else {
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
   }   
}

async function myFetch() {
    let planetsReturned = [];

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length);
    return num;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
