const express = require ('express');
const router = express.Router();
const randomModule = require('../modules/randomModule');
const compareModule = require('../modules/compareModule');
let ourRandomNumber;
let max;

router.post('/', function(request, response){
  max = request.body.max;
  ourRandomNumber=randomModule.makeANumber(max);
  response.sendStatus(200);
});//end router post randomModule

router.post('/compare', function (request, response){
  let guess = request.body;  
  let ourComparison = compareModule(guess, ourRandomNumber);
  response.send(ourComparison);
})//end router post compare module

module.exports = router;
