const GRAVITY_ON_EARTH = 9.8;
const GRAVITIES = {
  mercury: 3.7,
  venus: 8.87,
  earth: 9.8,
  mars: 3.711,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15
};

function calculateWeights() {
  var weightInput = document.getElementById('weight');
  var ageInput = document.getElementById('age');
  if(weightInput.value && ageInput.value){
  var weight = parseInt(weightInput.value);
  var div = document.querySelector("#test-alert");
  div.textContent = '';

    if (weight) {
    var results = {};

    for (var planet in GRAVITIES) {
      var gravity = GRAVITIES[planet];
      var weightOnPlanet = (weight * gravity) / GRAVITY_ON_EARTH;
      results[planet] = weightOnPlanet.toFixed(2);
    }

    displayResultsweight(results);
  }
}
else{
  var div = document.querySelector("#test-alert");
  div.textContent = 'Yaşınızı ve kilonuzu birlikte giriniz.';
}
}

function displayResultsweight(results) {
  var resultDiv = document.getElementById('result-weight');
    resultDiv.innerHTML=" <h3>Gezegene Göre Kilo</h3>";

  for (var planet in results) {
    var weightOnPlanet = results[planet];
    var planetResult = document.createElement('p');
    planetResult.textContent = 'Kilonuz ' + weightOnPlanet + ' kg - ' + planet.toUpperCase();
    resultDiv.appendChild(planetResult);
  }
}

const EARTH_ORBITAL_PERIOD = 365.25;
const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

function calculateAges() {
  var weightInput = document.getElementById('weight');
  var ageInput = document.getElementById('age');
  if(weightInput.value && ageInput.value){
  var age = parseInt(ageInput.value);

  if (age) {
    var results = {};

    for (var planet in ORBITAL_PERIODS) {
      var orbitalPeriod = ORBITAL_PERIODS[planet];
      var ageOnPlanet = age / orbitalPeriod;
      results[planet] = ageOnPlanet.toFixed(2);
    }

    displayResultsage(results);
  }
}
}

function displayResultsage(results) {
  var resultDiv = document.getElementById('result-age');
    resultDiv.innerHTML=" <h3>Gezegene Göre Yaş</h3>";
  for (var planet in results) {
    var ageOnPlanet = results[planet];
    var planetResult = document.createElement('p');
    planetResult.textContent = 'Yaşınız ' + ageOnPlanet + ' - ' + planet.toUpperCase();
    resultDiv.appendChild(planetResult);
  }
}
