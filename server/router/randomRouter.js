const express = require ('express');
const router = express.Router();
const randomModule = require('../modules/randomModule');
let max;

router.post('/', function(request, response){
  max = request.body.max;
  console.log(max);

  let ourRandomNumber=randomModule.makeANumber(max);
  console.log('in randomRouter -- post', ourRandomNumber);
  ourRandomNumberObject = {ourRandomNumber: ourRandomNumber};
  response.send(ourRandomNumberObject);
  response.sendStatus(200);
});

// router.get('/', function(request, response){
//   let rando = randomModule.makeANumber(max);
//   console.log('in randomRouter get', rando);
//   response.send(rando);
// })

module.exports = router;
