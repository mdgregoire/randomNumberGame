let counter = 0;
let maxNumber;

$(document).ready(onReady);

function onReady(){
  $('#playGame').hide();
  $('#playGameButton').on('click', function(event){
    event.preventDefault();
    maxNumber = $('#maxSelect').val();
    setUpGame();
  });// end onClick setUpGameButton
  $('#submitGuessesButton').on('click', guessesSubmitted);
  $('#cancel').on('click', cancel);
  $('#feedback').on('click', '#restart', cancel);
} //end onReady

function cancel(){
  $('#feedback').empty();
  $('.inputField').val('');
  $('#guesses').empty().append('Number of Guesses: 0');
  $('#playGame').hide();
  $('#setUpGame').show();
  counter = 0;
}//end cancel

function guessesSubmitted(){
  if ($('#p1').val() == $('#p2').val() || $('#p1').val() == $('#p3').val() || $('#p1').val() == $('#p4').val()){
    alert("Error! Guesses Cannot Match!");
  }//end if check for p1
  else if ($('#p2').val() == $('#p3').val() || $('#p2').val() == $('#p4').val()){
    alert("Error! Guesses Cannot Match!");
  }//end if check for p2
  else if ($('#p3').val() == $('#p4').val() ){
    alert("Error! Guesses Cannot Match!");
  }//end if check for p3 & p4 match
  else{ //if the numbers are under the max the code below will run
    if ( parseInt($('#p1').val()) <= maxNumber && parseInt($('#p2').val()) <= maxNumber && parseInt($('#p3').val()) <= maxNumber && parseInt($('#p4').val()) <= maxNumber ){
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
        console.log(response, 'response from guesses submitted post');
        printDifferences(response);
      }).fail(function(response){
        console.log('We suck guessesSubmitted', response);
      }); // end .ajax post
    }//end over max check if
    else {
      alert("Error! Guesses Cannot Be Over MAX!");
    }//end else check for over max
  }//end else check for duplicates
}//end guessesSubmitted

function playGame(response){
   $('#playGame').show();
   maxNumber = $('#maxSelect').val();
   $('#maxRemind').empty();
   $('#maxRemind').append(`Max Number: ${maxNumber}`);
}//end playgame function

function printDifferences(differences){
    //emptys the inputs and feedback after a guess
    $('#feedback').empty();
    $('#p1').val('');
    $('#p2').val('');
    $('#p3').val('');
    $('#p4').val('');

  if(differences.p1 == 0){
    $('#feedback').append('<div>Player 1 WINS!!!</div>');}
    else if (differences.p1 > 0){
    $('#feedback').append('<div>Player 1 Guessed too high</div>');}
    else {
    $('#feedback').append('<div>Player 1 Guessed too low</div>');}
  //end p1 check guess    
  if(differences.p2 == 0){
    $('#feedback').append('<div>Player 2 WINS!!!</div>');}
    else if (differences.p2 > 0){
    $('#feedback').append('<div>Player 2 Guessed too high</div>');}
    else {
    $('#feedback').append('<div>Player 2 Guessed too low</div>');}
  //end p2 check guess
  if(differences.p3 == 0){
    $('#feedback').append('<div>Player 3 WINS!!!</div>');}
    else if (differences.p3 > 0){
    $('#feedback').append('<div>Player 3 Guessed too high</div>');}
    else {
    $('#feedback').append('<div>Player 3 Guessed too low</div>');}
  //end p3 check guess
  if(differences.p4 == 0){
    $('#feedback').append('<div>Player 4 WINS!!!</div>');}
    else if (differences.p4 > 0){
    $('#feedback').append('<div>Player 4 Guessed too high</div>');}
  else {
    $('#feedback').append('<div>Player 4 Guessed too low</div>');}
  //end p4 check guess
  if (differences.p1 == 0 || differences.p2 == 0 || differences.p3 == 0 || differences.p4 == 0 ){
    $('#feedback').append("<button id='restart'>Restart</button> ");
  }//end if check for winner
}//end printDifferences

function setUpGame(){
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
}