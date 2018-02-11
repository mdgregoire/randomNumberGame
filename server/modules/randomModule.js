
let makeARandomNumber = function (max){
  max = Math.floor(max);
  return Math.floor(Math.random() * (1+ max));
}
module.exports = {makeANumber: makeARandomNumber};
