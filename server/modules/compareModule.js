const randomNumber = require('./randomModule');
let outputObject = {};
// let ourRandomNumber = randomNumber.makeANumber();
// let ourRandomNumber = 3;
// console.log(ourRandomNumber, 'ourrandmnumber in compmodule');

function compareRandomNumberToGuessesObject (ourObject, ourRandomNumber){
  console.log(ourObject, 'ourObject');
  console.log(ourRandomNumber, 'incompare function');
  outputObject.p1 = parseInt(ourObject.p1) - ourRandomNumber;
  outputObject.p2 = parseInt(ourObject.p2) - ourRandomNumber;
  outputObject.p3 = parseInt(ourObject.p3) - ourRandomNumber;
  outputObject.p4 = parseInt(ourObject.p4) - ourRandomNumber;
console.log(outputObject, 'comparemodule');
  return outputObject;
}

module.exports = compareRandomNumberToGuessesObject;
