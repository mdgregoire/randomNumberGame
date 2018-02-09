
let makeARandomNumber = function (max){
  max = Math.floor(max);
  return Math.floor(Math.random() * (1+ max));
}

//let ourRandomNumber = makeARandomNumber(max);

//console.log(ourRandomNumber);
module.exports = {makeANumber: makeARandomNumber};
