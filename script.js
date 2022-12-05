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
    let pickedPlanet = pickPlanet(listedPlanets);
    let planetName = pickedPlanet.name;
    let planetDiameter = pickedPlanet.diameter;
    let planetStar = pickedPlanet.star;
    let planetDistance = pickedPlanet.distance;
    let planetMoons = pickedPlanet.moons;
    let planetImage = pickedPlanet.image;
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

