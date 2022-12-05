// Write your JavaScript code here!

window.addEventListener("load", function() {
   const submitButton = document.getElementById('formSubmit');
   document.getElementById("faultyItems").style.visibility = "hidden";
   let listedPlanets = [];
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       console.log(listedPlanets);
// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let numPlanet = pickPlanet(listedPlanets);
    let planetName = listedPlanets[numPlanet].name;
    let planetDiameter = listedPlanets[numPlanet].diameter;
    let planetStar = listedPlanets[numPlanet].star;
    let planetDistance = listedPlanets[numPlanet].distance;
    let planetMoons = listedPlanets[numPlanet].moons;
    let planetImage = listedPlanets[numPlanet].image;
    addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage);
    });

    submitButton.addEventListener('click', function() {
        event.preventDefault();

        let faultyItems = document.getElementById("faultyItems");
        let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.getElementById("copilotName").value;
        let fuelLevel = document.getElementById("fuelLevel").value;
        let cargoMass = document.getElementById("cargoMass").value;

        formSubmission(document,faultyItems,pilotName,copilotName,fuelLevel,cargoMass);
    });

});

