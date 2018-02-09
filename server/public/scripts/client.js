$(document).ready(onReady);

class Player{
  constructor(guess, prevGuess){
    this.guess = guess,
    this.prevGuess = prevGuess
  }
}

let rando;
let counter = 0;
let players = [];
let player1 = new Player ('None','None');
let player2 = new Player ('None','None');
let player3 = new Player ('None','None');
let player4 = new Player ('None','None');

function onReady(){
  $('#playGame').hide();
  $('#setUpGameButton').on('click', function(event){
    event.preventDefault();
    let maxNumber = $('#maxSelect').val();
    $.ajax({
      type: 'POST',
      url: '/random',
      data: {max: maxNumber}
    }).done(function(response){
      $('#setUpGame').hide();
      playGame(response);
    }).fail(function(response){
      console.log('We suck', response);
    }); // end .ajax post
  }) // end onClick

  $('#playGameButton').on('click', guessesSubmitted);




} //end onReady

function playGame(response){
   $('#playGame').show();

  console.log('in playgame function', response);
  ourRandomNumber = response.ourRandomNumber;
  console.log(ourRandomNumber);
}

function guessesSubmitted(){
  $.ajax({
    type: 'POST',
    url: '/random/compare',
    data: { p1: $('#p1').val(),
            p2: $('#p2').val(),
            p3: $('#p3').val(),
            p4: $('#p4').val(),
          }
  }).done(function(response){
    printDifferences(responses);
  }).fail(function(response){
    console.log('We suck guessesSubmitted', response);
  }); // end .ajax post
}//end guessesSubmitted



function printDifferences(differences){
  let p1comparison = differences.p1;
  let p2comparison = differences.p2;
  let p3comparison = differences.p3;
  let p4comparison = differences.p4;

$('#feedback').empty()

if(p1comparison == 0){
  $('#feedback').append('<div>Player 1 WINS!!!</div>');
}
else if (p1comparison > 0){
  $('#feedback').append('<div>Player 1 Guessed too high</div>');
}
else {
  $('#feedback').append('<div>Player 1 Guessed too low</div>');
}
if(p2comparison == 0){
  $('#feedback').append('<div>Player 2 WINS!!!</div>');
}
else if (p2comparison > 0){
  $('#feedback').append('<div>Player 2 Guessed too high</div>');
}
else {
  $('#feedback').append('<div>Player 2 Guessed too low</div>');
}
if(p3comparison == 0){
  $('#feedback').append('<div>Player 3 WINS!!!</div>');
}
else if (p3comparison > 0){
  $('#feedback').append('<div>Player 3 Guessed too high</div>');
}
else {
  $('#feedback').append('<div>Player 3 Guessed too low</div>');
}
if(p4comparison == 0){
  $('#feedback').append('<div>Player 4 WINS!!!</div>');
}
else if (p4comparison > 0){
  $('#feedback').append('<div>Player 4 Guessed too high</div>');
}
else {
  $('#feedback').append('<div>Player 4 Guessed too low</div>');
}
}//end printDifferences
