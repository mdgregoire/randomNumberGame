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
} //end onReady

function playGame(response){
   $('#playGame').show();
  // $.ajax({
  //   type:'GET',
  //   url:'/random'
  // }).done(function(response){
  //   rando = response;
  // }).fail(function(resopnse){
  //   console.log('we all suck!', rando);
  // });
  console.log('in playgame function', response);
  ourRandomNumber = response.ourRandomNumber;
  console.log(ourRandomNumber);
}
