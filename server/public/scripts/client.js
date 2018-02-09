$(document).ready(onReady);

class Player{
  constructor(guess, prevGuess){
    this.guess = guess,
    this.prevGuess = prevGuess
  }
}//end player construction

let rando;
let counter = 0;
let players = [];
let maxNumber;


function onReady(){
  $('#playGame').hide();
  $('#setUpGameButton').on('click', function(event){
    event.preventDefault();
    maxNumber = $('#maxSelect').val();

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
  });// end onClick

  $('#playGameButton').on('click', guessesSubmitted);
  $('#cancel').on('click', cancel);
  $('#feedback').on('click', '#restart', cancel);
} //end onReady

function playGame(response){
   $('#playGame').show();
   maxNumber = $('#maxSelect').val();
   $('#maxRemind').empty();
   $('#maxRemind').append(`Max Number: ${maxNumber}`);
}//end playgame function

function guessesSubmitted(){
    if ($('#p1').val() == $('#p2').val() || $('#p1').val() == $('#p3').val() || $('#p1').val() == $('#p4').val()){
      alert("Error! Guesses Cannot Match!");
    }//end if check for p1
    else if ($('#p2').val() == $('#p3').val() || $('#p2').val() == $('#p4').val()){
      alert("Error! Guesses Cannot Match!");
    }//end if check for p2
    else if ($('#p3').val() == $('#p4').val() ){
      alert("Error! Guesses Cannot Match!");
    }
    else{

    if ($('#p1').val() <= maxNumber || $('#p2').val() <= maxNumber || $('#p3').val() <= maxNumber || $('#p4').val() <= maxNumber){
      counter ++;
      $('#guesses').empty();
      $('#guesses').text(`Number of Guesses: ${counter}`);
      $.ajax({
        type: 'POST',
        url: '/random/compare',
        data: { p1: $('#p1').val(),
                p2: $('#p2').val(),
                p3: $('#p3').val(),
                p4: $('#p4').val(),
              }
      }).done(function(response){
        console.log(response, 'response');
        printDifferences(response);
      }).fail(function(response){
        console.log('We suck guessesSubmitted', response);
      }); // end .ajax post
    }//end overmax check if
    else {
      alert("Error! Guesses Cannot Be Over MAX!");
    }
    }//end else check for duplicates
}//end guessesSubmitted

function printDifferences(differences){
  //sets value equal to difference
  let p1comparison = differences.p1;
  let p2comparison = differences.p2;
  let p3comparison = differences.p3;
  let p4comparison = differences.p4;

    $('#feedback').empty();
    $('#p1').val('');
    $('#p2').val('');
    $('#p3').val('');
    $('#p4').val('');





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

if (p1comparison == 0 || p2comparison == 0 || p3comparison == 0 || p4comparison == 0 ){
  $('#feedback').append("<button id='restart'>Restart</button> ");
}
}//end printDifferences

function cancel(){
  $('#feedback').empty();
  $('#p1').val('');
  $('#p2').val('');
  $('#p3').val('');
  $('#p4').val('');
  $('#guesses').empty().append('Number of Guesses: 0');
  $('#playGame').hide();
  $('#setUpGame').show();
  counter = 0;
}//end cancel
