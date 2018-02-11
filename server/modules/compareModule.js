const randomNumber = require('./randomModule');
let outputObject = {};

function compareRandomNumberToGuessesObject (ourObject, ourRandomNumber){
  outputObject.p1 = parseInt(ourObject.p1) - ourRandomNumber;
  outputObject.p2 = parseInt(ourObject.p2) - ourRandomNumber;
  outputObject.p3 = parseInt(ourObject.p3) - ourRandomNumber;
  outputObject.p4 = parseInt(ourObject.p4) - ourRandomNumber;
  return outputObject;
}

module.exports = compareRandomNumberToGuessesObject;
