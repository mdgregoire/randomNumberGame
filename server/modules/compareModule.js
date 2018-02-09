const randomNumber = require('./randomModule');
let outputObject = {};
let ourRandomNumber = randomNumber.makeANumber;

function compareRandomNumberToGuessesObject (ourObject){
  outputObject.p1 = ourObject.p1 - ourRandomNumber;
  outputObject.p2 = ourObject.p2 - ourRandomNumber;
  outputObject.p3 = ourObject.p3 - ourRandomNumber;
  outputObject.p4 = ourObject.p4 - ourRandomNumber;

  return outputObject;
}

module.exports = compareRandomNumberToGuessesObject;
