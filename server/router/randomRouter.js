const express = require ('express');
const router = express.Router();
const randomModule = require('../modules/randomModule');
const compareModule = require('../modules/compareModule');
let ourRandomNumber;
let max;

router.post('/', function(request, response){
  max = request.body.max;
  console.log(max, 'max');

  ourRandomNumber=randomModule.makeANumber(max);
  console.log('in randomRouter -- post', ourRandomNumber);
  // ourRandomNumberObject = {ourRandomNumber: ourRandomNumber};
  // response.send(ourRandomNumberObject);
  response.sendStatus(200);
});




router.post('/compare', function (request, response){
  let guess = request.body;
  let ourComparison = compareModule(guess, ourRandomNumber);
  console.log('/compare router', ourComparison);
  response.send(ourComparison);
})








// router.get('/', function(request, response){
//   let rando = randomModule.makeANumber(max);
//   console.log('in randomRouter get', rando);
//   response.send(rando);
// })

module.exports = router;
